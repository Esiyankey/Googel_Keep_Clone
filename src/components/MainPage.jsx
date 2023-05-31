import React from 'react'
import { Link } from 'react-router-dom'
import { Loading } from './Loading'

export const MainPage = () => {
  return (
    <>
    <Loading/>
    <div>
      MainPage
        <Link to="/login">login</Link>
    </div>
    </>
  )
}
