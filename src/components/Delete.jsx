import { useState, useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdDeleteForever } from "react-icons/md";
import "../styles/delete.scss";
import {
  collection,
  onSnapshot,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../config/Firebase";
import { BsImage, BsPin, BsThreeDotsVertical } from "react-icons/bs";
import { BiPalette } from "react-icons/bi";
import { toast } from "react-hot-toast";
import { FaTrashRestoreAlt } from "react-icons/fa";

export const Delete = () => {
  const [deleteNotes, setDeleteNotes] = useState([]);
  const [logOut, setLogOut] = useState(false);

  useEffect(() => {
    const DeleteNotes = async () => {
      const notesCollection = collection(db, "noteTodos");
      onSnapshot(notesCollection, (querySnapshot) => {
        const notesArray = [];
        querySnapshot.docs.forEach((doc) => {
          notesArray.push({ id: doc.id, ...doc.data() });
        });
        const filteredArray = notesArray.filter((item) => {
          return item.deleted;
        });
        setDeleteNotes(filteredArray);
      });
    };
    DeleteNotes();
  }, []);

  const restoreNote = async (noteId) => {
    try {
      const noteRef = doc(db, "noteTodos", noteId);
      await updateDoc(noteRef, {
        deleted: false,
      });
      toast.success("Notes restored successfully");
    } catch (error) {
      toast.error("Notes could not be restored");
      console.error("Error deleting note:", error);
    }
  };

  const deleteForever = async (noteId) => {
    try {
      const noteRef = doc(db, "noteTodos", noteId);

      await deleteDoc(noteRef,noteId);

      console.log("Note deleted successfully!");
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  // useEffect(() => {
  //   const fetchDeletedNotes = async () => {
  //     const notesRef = collection(db, "noteTodos");

  //     const deletedNotesQuery = query(notesRef, where("deleted", "==", true));

  //     // Get the deleted notes
  //     const querySnapshot = await getDocs(deletedNotesQuery);

  //     const deletedNotes = [];
  //     querySnapshot.forEach((doc) => {
  //       const note = doc.data();
  //       note.id = doc.id;
  //       deletedNotes.push(note);
  //       setDeleteNotes(deletedNotes);
  //     });
  //   };
  //   fetchDeletedNotes();

  // }, []);

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
              <div className="deleted-notes" key={item.id}>
                <div className="deleted-pin">
                  <div className="title">{item.Title}</div>
                  <BsPin className="bspin" />
                </div>
                <div className="text">{item.Text}</div>
                <div className="deleted-icons">
                  <div className="deleted-buttons">
                    <button
                      className="deleted-btn"
                      onClick={deleteForever(item.id)}
                    >
                      <MdDeleteForever />
                    </button>
                    <button
                      className="deleted-btn"
                      onClick={() => {
                        restoreNote(item.id);
                      }}
                    >
                      <FaTrashRestoreAlt className="forever" />
                    </button>
                  </div>
                </div>
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
