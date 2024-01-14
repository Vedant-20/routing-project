import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userid}=useParams()
  return (
    <div className='text-center bg-violet-500 font-extrabold text-3xl p-4 text-green-400 '>User:{userid} </div>
  )
}

export default User