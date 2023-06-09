import { useState, useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import "../styles/delete.scss";
import { collection, getDocs, query, where } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { db } from "../config/Firebase";

export const Delete = () => {
  const [deleteNotes, setDeleteNotes] = useState([]);

  useEffect(() => {
    const fetchDeletedNotes = async () => {
      const notesRef = collection(db, "noteTodos");

      const deletedNotesQuery = query(notesRef, where("deleted", "==", true));

      // Get the deleted notes
      const querySnapshot = await getDocs(deletedNotesQuery);

      const deletedNotes = [];
      querySnapshot.forEach((doc) => {
        const note = doc.data();
        note.id = doc.id;
        deletedNotes.push(note);
        setDeleteNotes(deletedNotes);
      });
    };
    fetchDeletedNotes();
    //   const FetchNotes = async (noteId) => {
    //     const querySnapshot = await getDocs(collection(db, "Notes"));
    //     const deleteArray = [];
    //     querySnapshot.forEach((doc) => {
    //       const note = { ...doc.data(), id: doc.id };
    //       if (note.delete) {
    //         deleteArray.push(note);
    //       }

    //       // NotesArray.push({ ...doc.data(), id: doc.id });
    //     });
    //     setDeleteNotes(deleteArray);
    //   };
    //   FetchNotes();
  }, []);

  return (
    <>
      <div className="DeletedNotes">
        <div className="empty-bin">
          <h4>Notes in the Recycle Bin are deleted after 7 days</h4>
          <h3 className="empty-btn">Empty bin</h3>
        </div>
        <div className="deletedNotes">
          {deleteNotes.map((item) => {
            return (
              <div className="deleted-notes">
                <div className="">
                  <div className="title">{item.Title}</div>
                </div>
                <div className="text">{item.Text}</div>
              </div>
            );
          })}
        </div>
        <div className="delete">
          <div className="delete-background">
            <RiDeleteBin6Line className="delete-icon" />
            <h3 className="delete-text">Your deleted items show here</h3>
          </div>
        </div>
      </div>
    </>
  );
};
