import React, { useEffect, useState } from 'react'

const Github = () => {
    const [data, setData]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/vedant-20')
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
            setData(data)
        })
    },[])



    


  return (
    <div className='text-center m-4 bg-indigo-400 text-green-400 p-4 text-3xl'>Github Followers: {data.followers} 
        <img className='border-4 border-red-600' src={data.avatar_url} width={300}/>
    </div>
  )
}

export default Github