import { useEffect, useState } from "react";
import { FaRegCheckSquare } from "react-icons/fa";
import { BsImage, BsPin, BsThreeDotsVertical } from "react-icons/bs";
import { BiPalette } from "react-icons/bi";
import { MdOutlineArchive } from "react-icons/md";
import "../styles/Notes.scss";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import toast, { Toaster } from 'react-hot-toast';
import { db } from "../config/Firebase";
import { SingleNotes } from "./SingleNotes";

export const Notes = () => {


  // toast 
  const notify = () => toast.success(' Note successfully created!');
const deleteNotify =() => toast.success(' Note successfully deleted!');
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [showNotes, setShowNotes] = useState(false);
  const [Notes, setNotes] = useState([]);
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
    const FetchNotes = async () => {
      const querySnapshot = await getDocs(collection(db, "Notes"));
      const NotesArray = [];
      querySnapshot.forEach((doc) => {
        NotesArray.push({ ...doc.data(), id: doc.id });
        console.log(`${doc.id} => ${doc.data()}`);
      });
      setNotes(NotesArray);
    };
    FetchNotes();
  }, []);

  //delete note
  const deleteNote = async (noteId) => {
    try {
      await deleteDoc(doc(db, "Notes", noteId));
      setNotes((prevNotes) => prevNotes.filter((todo) => todo.id !== noteId));
      console.log("Note deleted successfully");
    } catch (error) {
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

        {Notes.map((todo) => {
          return (
            <SingleNotes todo={todo} key={todo.id} onDelete={deleteNote} />
          );
        })}
      </div>
    </div>
  );
};
