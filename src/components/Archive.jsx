import React, { useState, useEffect } from "react";
import { MdOutlineUnarchive } from "react-icons/md";
import { BsImage, BsPin, BsThreeDotsVertical } from "react-icons/bs";
import { BiPalette } from "react-icons/bi";
import "../styles/archives.scss";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../config/Firebase";

export const Archive = () => {
  const [archivedNotes, setArchivedNotes] = useState([]);
  const [logOut, setLogOut] = useState(false);

  const showDropdown = () => {
    setLogOut(!logOut);
  };

  useEffect(() => {
    const ArchivedNotes = async (noteId) => {
      const notesCollection = collection(db, "noteTodos");
      onSnapshot(notesCollection, (querySnapshot) => {
        const notesArray = [];
        querySnapshot.docs.forEach((doc) => {
          notesArray.push({ id: doc.id, ...doc.data() });
        });
        const filteredArray = notesArray.filter((item) => {
          return item.archived;
        });
        setArchivedNotes(filteredArray);
      });
    };
    ArchivedNotes();
  }, []);

  // useEffect(() => {
  //   const fetchArchivedNotes = async () => {
  //     const notesRef = collection(db, "noteTodos");

  //     const ArchivedNotesQuery = query(notesRef, where("archived", "==", true));

  //     // Get the deleted notes
  //     const querySnapshot = await getDocs(ArchivedNotesQuery);

  //     const archivedNotes = [];
  //     querySnapshot.forEach((doc) => {
  //       const note = doc.data();
  //       note.id = doc.id;
  //       archivedNotes.push(note);
  //       setArchived(archivedNotes);
  //     });
  //   };
  //   fetchArchivedNotes();
  // }, []);

  return (
    <>
      <div className="Archived">
        <div className="archivedNotes">
          {archivedNotes.map((item) => {
            return (
              <div className="archived-notes">
                <div className="archived-pin">
                  <div className="title">{item.Title}</div>
                  <BsPin className="bspin"/>
                </div>
                <div className="text">{item.Text}</div>
                <div className="archived-icons">
                  <div className="archived-buttons">
                    <button className="archived-btn">
                      <BiPalette />
                    </button>
                    <button className="archived-btn">
                      <BsImage />
                    </button>
                    <button className="archived-btn">
                      <MdOutlineUnarchive  />
                    </button>
                    <button className="archived-btn">
                      <BsThreeDotsVertical onClick={showDropdown}/>
                      {logOut && (
                        <div className="Delete">
                          <button
                            onClick={() => {
                              handleDelete();
                              deleteNotify();
                            }}
                          >
                            Delete note
                          </button>
                          <button>AddLabel</button>
                        </div>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="archive">
          <div className="archive-background">
            <MdOutlineArchive className="archive-icon" />
            <h3 className="archive-text">Your archives show here</h3>
          </div>
        </div>
      </div>
    </>
  );
};
