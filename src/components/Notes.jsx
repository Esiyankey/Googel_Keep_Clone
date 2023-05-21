import {useState} from 'react'
import  { BiImage,
    IoIosCheckboxOutline,
  } from "react-icons/all";
export const Notes = () => {
    const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <div className="take-notes">
        <input type="text" className="input " 
         onFocus={handleFocus}
         onBlur={handleBlur}
         placeholder="Take a note"/>
          {/* {isFocused && (
        <>
          <input type="text" className="additional-input" placeholder="Text" />
          
        </>
      )} */}
        <div className="inputIcons">
          <IoIosCheckboxOutline className="input-icons" />
          <BiImage className="input-icons" />
        </div>
      </div>
  )
}
