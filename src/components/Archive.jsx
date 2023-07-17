import React, { useState, useEffect } from "react";
import { MdOutlineUnarchive,MdOutlineArchive } from "react-icons/md";
import { BsImage, BsPin, BsThreeDotsVertical } from "react-icons/bs";
import { BiPalette } from "react-icons/bi";
import "../styles/archives.scss";
import { toast } from "react-hot-toast";
import { collection, onSnapshot,doc,updateDoc } from "firebase/firestore";
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


  const restoreArchive = async(noteId)=>{
    try {
      const noteRef = doc(db, "noteTodos", noteId);
      await updateDoc(
       noteRef,{
     archived: false,
        });
      toast.success("Notes restored successfully");
    } catch (error) {
      toast.error("Notes could not be restored");
      console.error("Error deleting note:", error);
    }
  }

  
  return (
    <>
      <div className="Archived">
        <div className="archivedNotes">
          {archivedNotes.map((item) => {
            return (
              <div className="archived-notes" key={item.id}>
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
                      <MdOutlineUnarchive onClick={()=>{restoreArchive(item.id)}} />
                    </button>
                    <button className="archived-btn">
                      <BsThreeDotsVertical onClick={showDropdown}/>
                      {logOut && (
                        <div className="Delete">
                          <button
                            onClick={() => {
                              handleDelete();
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
            <MdOutlineArchive className="archive-icon"  />
            <h3 className="archive-text">Your archives show here</h3>
          </div>
        </div>
      </div>
    </>
  );
};
