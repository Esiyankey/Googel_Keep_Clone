import { useState } from "react";
import { BsImage, BsPin, BsThreeDotsVertical } from "react-icons/bs";
import { BiPalette } from "react-icons/bi";
import { MdOutlineArchive } from "react-icons/md";

export const SingleNotes = ({ todo,onDelete }) => {
  const [logOut, setLogOut] = useState(false);
  const [onHover, setOnHover]=useState(false)

//hover 
const handleHover=()=>{
  setOnHover(true)
}

  const handleDelete = () => {
    onDelete(todo.id); // Pass the note ID to the onDelete callback
  };

  //Drop Down

  const showDropdown = () => {
    setLogOut(!logOut);
  };

  return (
    <div>
      <div className="Take-Notes" onHover={handleHover}>
        <div className="saved-notes">
          <div className="pin">
            <input
              type="text"
              placeholder="Title"
              value={todo.Title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <BsPin className="bspin"/>
          </div>
          <input
            type="text"
            placeholder="Take a note"
            value={todo.Text}
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
              <button className="btn delete">
                <BsThreeDotsVertical onClick={showDropdown} />
                {logOut && (
                  <div className="Delete">
                    <button onClick={handleDelete}>Delete note</button>{" "}
                    <button>AddLabel</button>{" "}
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
