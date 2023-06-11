import { useState, useEffect } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineArchive } from "react-icons/md";
import "../styles/delete.scss";
import { collection,onSnapshot } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { db } from "../config/Firebase";
import { BsImage, BsPin, BsThreeDotsVertical } from "react-icons/bs";
import { BiPalette } from "react-icons/bi";

export const Delete = () => {
  const [deleteNotes, setDeleteNotes] = useState([]);
  const [logOut, setLogOut] = useState(false);

  const showDropdown = () => {
    setLogOut(!logOut);
  };
  useEffect(() => {
    const DeleteNotes = async (noteId) => {
      const notesCollection = collection(db,"noteTodos")
      onSnapshot(notesCollection,(querySnapshot)=>{
        const notesArray = []
        querySnapshot.docs.forEach((doc)=>{
          notesArray.push({id:doc.id,...doc.data()})
        })
        const filteredArray = notesArray.filter((item) => {
          return item.deleted
        });
        setDeleteNotes(filteredArray)

      })
    };
  DeleteNotes();
  }, []);


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
              <div className="deleted-notes">
                <div className="deleted-pin">
                  <div className="title">{item.Title}</div>
                  <BsPin className="bspin"/>
                </div>
                <div className="text">{item.Text}</div>
                <div className="deleted-icons">
                  <div className="deleted-buttons">
                    <button className="archived-btn">
                      <BiPalette />
                    </button>
                    <button className="deleted-btn">
                      <BsImage />
                    </button>
                    <button className="deleted-btn">
                      <MdOutlineArchive  />
                    </button>
                    <button className="deleted-btn">
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
