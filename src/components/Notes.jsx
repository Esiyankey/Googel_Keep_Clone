import { useEffect, useState } from "react";
import { FaRegCheckSquare } from "react-icons/fa";
import { BsImage, BsPin, BsThreeDotsVertical } from "react-icons/bs";
import { BiPalette } from "react-icons/bi";
import { MdOutlineArchive } from "react-icons/md";
import "../styles/Notes.scss";
import { collection, getDocs } from "firebase/firestore";
import {db} from '../config/Firebase' 


export const Notes = () => {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [showNotes, setShowNotes] = useState(false);
    

    //Read Data from firestore
    
const FetchNotes= async()=>{
    const querySnapshot = await getDocs(collection(db, "Notes"));
    const NotesArray = []
    querySnapshot.forEach((doc) => {
        NotesArray.push({...doc.data(),id:doc.id})
        setShowNotes(NotesArray);
      console.log(`${doc.id} => ${doc.data()}`);
    });
}
useEffect(()=>{
    FetchNotes();
},[])
      
    //focus and unfocus
  const handleFocus = () => {
    setShowNotes(true);
  };

  const handleBlur = () => {
    setShowNotes(false);
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

        { showNotes&&
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
                <button className="close-btn" onClick={handleBlur}>close</button>
              </div>
            </div>
          </div>
        }
   
            {
                <div className="Take-Notes">
                <div className="saved-notes">
              <div className="pin">
                <input
                  type="text"
                  placeholder="Title"
                  value={showNotes.Title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
                <BsPin />
              </div>
              <input
                type="text"
                placeholder="Take a note"
                value={showNotes.Text}
                onChange={(e) => {
                  setText(e.target.value);
                }}
              />
              
              <div className="icons" style={{display:"none"}}>
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
                <button className="close-btn" onClick={handleBlur}>close</button>
              </div>
            </div>
            </div>}
         
      </div>
    </div>
  );
};
