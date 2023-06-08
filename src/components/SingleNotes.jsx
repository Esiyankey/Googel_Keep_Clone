import { useState,useContext} from "react";
import { BsImage, BsPin, BsThreeDotsVertical } from "react-icons/bs";
import { BiPalette } from "react-icons/bi";
import { AppContext } from './AppContext';
import '../styles/Notes.scss'
import { MdOutlineArchive } from "react-icons/md";
import toast from 'react-hot-toast';

export const SingleNotes = ({ todo,onDelete }) => {
  const [logOut, setLogOut] = useState(false);
  const [pinned,setPinned]=useState(false);
  const { showGrid } = useContext(AppContext);
  //toast
  const deleteNotify =() => toast.success(' Note successfully deleted!');

  const handleDelete = () => {
    onDelete(todo.id); // Pass the note ID to the onDelete callback
  };

  //Drop Down

  const showDropdown = () => {
    setLogOut(!logOut);
  };

  return (
    <div className="singleNotes">
      <div className={`Take-Notes ${showGrid ? "active" : ""}`}>
        <div className="saved-notes">
          <div className="pin">
            <div className="title">{todo.Title}</div>
            <BsPin className="bspin"/>
          </div>
          <div className="text">{todo.Text}</div>
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
                <BsThreeDotsVertical onClick={showDropdown} />
                {logOut && (
                  <div className="Delete">
                    <button onClick={()=>{handleDelete();deleteNotify();}}>Delete note</button>
                    <button>AddLabel</button>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
