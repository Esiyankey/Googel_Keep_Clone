import { useEffect, useState, useContext } from "react";
import { FaRegCheckSquare } from "react-icons/fa";
import { BsImage, BsPin, BsThreeDotsVertical } from "react-icons/bs";
import { BiPalette } from "react-icons/bi";
import { MdOutlineArchive } from "react-icons/md";
import "../styles/Notes.scss";
import { AppContext } from "./AppContext";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import toast from "react-hot-toast";
import { db } from "../config/Firebase";
import { SingleNotes } from "./SingleNotes";

export const Notes = () => {
  // toast
  const notify = () => toast.success(" Note successfully created!");
  const [title, setTitle] = useState("");
  const [deletedNotes, setDeletedNotes] = useState([]);
  const [text, setText] = useState("");
  const [showNotes, setShowNotes] = useState(false);
  const [Notes, setNotes] = useState([]);
  const { showGrid } = useContext(AppContext);
  const [closeButtonText, setCloseButtonText] = useState("Close");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setTitle(value);

    if (value.length > 0) {
      setCloseButtonText("Create");
    } else {
      setCloseButtonText("Close");
    }
  };
  //Read Data from firestore

  useEffect(() => {
    const FetchNotes = async (noteId) => {
      const querySnapshot = await getDocs(collection(db, "Notes"));
      const NotesArray = [];
      querySnapshot.forEach((doc) => {
        const note = { ...doc.data(), id: doc.id };
        if (!note.delete) {
          notesArray.push(note);
        }

        // NotesArray.push({ ...doc.data(), id: doc.id });
      });
      setNotes(NotesArray);
    };
    FetchNotes();
  }, []);

  //delete note
  const deleteNote = async (noteId) => {
    try {
      const deletedNote = Notes.find((note) => note.id === noteId);
      await deleteDoc(doc(db, "Notes", noteId)),
        {
          deleted: true,
        };
      setDeletedNotes((prevDeletedNotes) => [...prevDeletedNotes, deletedNote]);
      setNotes((prevNotes) => prevNotes.filter((todo) => todo.id !== noteId));
    } catch (error) {
      toast.error("there was an error in deleting your note");
      console.error("Error deleting note:", error);
    }
  };

  //focus and unfocus
  const handleFocus = () => {
    setShowNotes(true);
  };
  const handleBlur = () => {
    if (title === "" && text === "") {
      setShowNotes(false);
    }
  };
  //create notes
  const AddNotes = async () => {
    if (title.trim() !== "" || text.trim() !== "") {
      try {
        const docRef = await addDoc(collection(db, "Notes"), {
          Title: title,
          Text: text,
        });
        const newNote = { id: docRef.id, Title: title, Text: text };
        setNotes((prevNotes) => [...prevNotes, newNote]);

        setTitle("");
        setText("");
        setShowNotes(false);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  };

  return (
    <div className="Notes">
      <div className="Notes-input">
        <div className="input">
          <input type="text" placeholder="Take a note" onFocus={handleFocus} />
          <div className="input-icons">
            <FaRegCheckSquare />
            <BsImage />
          </div>
        </div>

        {showNotes && (
          <div className="Take-notes">
            <div className="saved-notes">
              <div className="pin">
                <input
                  type="text"
                  placeholder="Title"
                  value={title}
                  onChange={handleInputChange}
                />
                <BsPin />
              </div>
              <input
                type="text"
                placeholder="Take a note"
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
              />
              <div className="icons">
                <div className="buttons">
                  <button className="btn">
                    <BiPalette />
                  </button>
                  <button className="btn">
                    <BsImage />
                  </button>
                  <button className="btn">
                    <MdOutlineArchive />
                  </button>
                  <button className="btn">
                    <BsThreeDotsVertical />
                  </button>
                </div>
                <button
                  className="close-btn"
                  onClick={() => {
                    AddNotes();
                    handleBlur();
                    notify();
                  }}
                >
                  {closeButtonText}
                </button>
              </div>
            </div>
          </div>
        )}

        <div className={showGrid ? "Single" : ""}>
          {Notes.map((todo) => {
            return (
              <SingleNotes todo={todo} key={todo.id} onDelete={deleteNote} />
            );
          })}
        </div>
      </div>
    </div>
  );
};
