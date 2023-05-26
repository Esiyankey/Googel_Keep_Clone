import { useState, useEffect } from "react";
import {
  BiImage,
  IoIosCheckboxOutline,
  AiOutlineBulb,
  IoColorPaletteOutline,
  RiInboxArchiveLine,
  BsThreeDotsVertical,
  BsPin,
} from "react-icons/all";
import { db } from "./firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
export const Notes = () => {
  const [showNotes, setShowNotes] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const [createNote, setCreateNote] = useState(false);
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);
  const notesCollectionRef = collection(db, "todos");

  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };

  const ShowNotesList = async () => {
    try {
      const data = await getDocs(notesCollectionRef);
      const fetchedNotes = [];
      data.forEach((doc) => {
        fetchedNotes.push({ id: doc.id, ...doc.data() });
      });
      setShowNotes(fetchedNotes);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    ShowNotesList();
  }, []);

  const handleCreateNote = async () => {
    const newNote = { title, note };
    try {
      await addDoc(notesCollectionRef, newNote);
    } catch (error) {
      console.error(error);
    }
    setShowNotes([...showNotes, newNote]);
    setCreateNote(true);
    setNote("");
    setTitle("");
  };

  const handleInputChange = (e) => {
    if (e.target.id === "titleInput") {
      setTitle(e.target.value);
    } else if (e.target.id === "noteText") {
      setNote(e.target.value);
    }
  };

  return (
    <>
      <div className="div">
        <div className="take-notes">
          <div className="NotesInput">
            <div className="conatainer">
              <input
                type="text"
                className="input "
                onFocus={handleFocus}
                placeholder="Take a note"
              />
              {isFocused && (
                <>
                  <div className="note-popup">
                    <div className="input-pin">
                      <input
                        type="text"
                        className="title"
                        placeholder="Title"
                        value={title}
                        id="titleInput"
                        onChange={handleInputChange}
                      />
                      <BsPin className="pin" />
                    </div>
                    <input
                      type="text"
                      id="noteText"
                      className="note"
                      placeholder="Take a note"
                      value={note}
                      onChange={handleInputChange}
                    />

                    <div className="popup-icons">
                      <div className="popup-icon">
                        <BiImage />
                        <IoColorPaletteOutline />
                        <RiInboxArchiveLine />
                        <BsThreeDotsVertical />
                      </div>
                      <button
                        className="button"
                        onClick={() => {
                          handleCreateNote();
                          handleBlur();
                        }}
                      >
                        close
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="inputIcons">
              <IoIosCheckboxOutline className="input-icons" />
              <BiImage className="input-icons" />
            </div>
          </div>

          {
            showNotes.map((item) => {
              return (
                <>
                  <div className="note-down" key={item.id}>
                    <div className="input-pin">
                      <div className="create-title">{item.title}</div>
                      <BsPin className="pin" />
                    </div>
                    <div className="createNote">{item.note}</div>
                    <div className="popup-icons">
                      <div className="popup-icon">
                        <BiImage />
                        <IoColorPaletteOutline />
                        <RiInboxArchiveLine />
                        <BsThreeDotsVertical />
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
        <div className="backgroundImage">
          <AiOutlineBulb className="outline" />
          <h5>Notes you add appear here</h5>
        </div>
      </div>
    </>
  );
};
