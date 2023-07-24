import { useEffect, useState, useContext } from "react";
import { FaRegCheckSquare } from "react-icons/fa";
import { BsImage, BsPin, BsThreeDotsVertical } from "react-icons/bs";
import { BiPalette } from "react-icons/bi";
import { MdOutlineArchive, MdOutlineLightbulb } from "react-icons/md";
import "../styles/Notes.scss";
import { AppContext } from "./AppContext";
import {
  collection,
  setDoc,
  where,
  addDoc,
  updateDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import toast from "react-hot-toast";
import { db,auth } from "../config/Firebase";
import { SingleNotes } from "./SingleNotes";
import { nanoid } from "nanoid";

export const Notes = () => {
  const [title, setTitle] = useState("");
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
    const fetchNotes = async () => {
      const notesCollection = collection(db, "noteTodos");
      onSnapshot(notesCollection, (querySnapsht) => {
        const notesArray = [];
        querySnapsht.docs.forEach((doc) => {
          const userIds= auth.currentUser.uid
          if (doc.data()["deleted"] || doc.data()["archived"]) {
            if(userIds===doc.data().id){
              return;
            }
          } else {
            notesArray.push(doc.data());
          }
        });
        setNotes(notesArray);
        
      });
    };
    fetchNotes();
  }, []);

  //archive
  const Archive = async (noteId) => {
    try {
      await updateDoc(doc(db, "noteTodos", noteId), {
        archived: true,
      });
      toast.success("Notes archived successfully");
    } catch (error) {
      console.error("Error ARCHIVING  note:", error);
    }
  };

  //delete note
  const deleteNote = async (noteId) => {
    try {
      await updateDoc(doc(db, "noteTodos", noteId), {
        deleted: true,
      });
      toast.success("Notes deleted successfully");
    } catch (error) {
      toast.error("Notes could not be deleted");
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
        //init new doc
        const userIds= auth.currentUser.uid
        const newDoc = doc(collection(db, "noteTodos"));
        const newNote = {
          id: userIds,
          Title: title,
          Text: text,
          deleted: false,
          archived: false,
        };
        await setDoc(newDoc, newNote);
        setTitle("");
        setText("");
        setShowNotes(false);
        toast.success(" Note successfully created!");
      } catch (e) {
        toast.error(" Note wasnt created ");
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
                  }}
                >
                  {closeButtonText}
                </button>
              </div>
            </div>
          </div>
        )}

        <div className={showGrid ? "Single" : ""}>
          {Notes.length === 0 ? (
            <div className="archive">
              <div className="archive-background">
                <MdOutlineLightbulb className="archive-icon" />
                <h3 className="archive-text">Your notes show here</h3>
              </div>
            </div>
          ) : (
            Notes.map((todo) => {
              return (
                <SingleNotes
                  todo={todo}
                  key={todo.id}
                  onDelete={deleteNote}
                  archived={Archive}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
