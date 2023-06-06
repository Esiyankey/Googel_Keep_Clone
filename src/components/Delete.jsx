import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import '../styles/delete.scss'
export const Delete = () => {
  return (
    <div className="delete">
      <div className="delete-background">
        <RiDeleteBin6Line className="delete-icon"/>
        <h3 className="delete-text">Your deleted items show here</h3>
      </div>
    </div>
  )
}
