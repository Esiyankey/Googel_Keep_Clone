import { useEffect, useState } from "react";
import { FaRegCheckSquare } from "react-icons/fa";
import { BsImage, BsPin, BsThreeDotsVertical } from "react-icons/bs";
import { BiPalette } from "react-icons/bi";
import { MdOutlineArchive } from "react-icons/md";
import "../styles/Notes.scss";
import { collection, getDocs, addDoc,deleteDoc,doc } from "firebase/firestore";
import { db } from "../config/Firebase";
import { SingleNotes } from "./SingleNotes";

export const Notes = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [showNotes, setShowNotes] = useState(false);
  const [Notes, setNotes] = useState([]);
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


  //create notes
  const AddNotes = async () => {
      try {
        const docRef = await addDoc(collection(db, "Notes"), {
          Title: title,
          Text: text
        });
        const newNote = { id: docRef.id, Title: title, Text: text };
        setNotes((prevNotes) => [...prevNotes, newNote]);
    
        setTitle("");
        setText("");
        setShowNotes(false);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    };
//   const handleBlur = () => {
//       AddNotes();
//       setText("");
//       setTitle("");
//     setShowNotes(false);
//   };

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
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
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
                <button className="close-btn" onClick={AddNotes}>
                  close
                </button>
              </div>
            </div>
          </div>
        )}

        { Notes.map((todo) => {
          return (
            <SingleNotes todo={todo} key={todo.id} onDelete={deleteNote}/>
          );
        })}
      </div>
    </div>
  );
};
