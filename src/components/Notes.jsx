import { useState } from "react";
import {
  BiImage,
  IoIosCheckboxOutline,
  AiOutlineBulb,
  IoColorPaletteOutline,
  RiInboxArchiveLine,
  BsThreeDotsVertical,
  BsPin,
} from "react-icons/all";
export const Notes = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
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
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  return (
    <>
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
                    <button className="button" onClick={handleBlur}>
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
      </div>
      <div className="backgroundImage">
        <AiOutlineBulb className="outline" />
        <h5>Notes you add appear here</h5>
      </div>
    </>
  );
};
