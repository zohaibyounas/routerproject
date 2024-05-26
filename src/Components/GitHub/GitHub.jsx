import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
const GitHub = () => {
    const data =useLoaderData()
//     const [data , setData] = useState([])
//     useEffect(() => {
// fetch('https://api.github.com/users/zohaibyounas')
// .then(res => res.json())
// .then(data =>{
    
//     setData(data)
// })
//     },[])
  return (
    <div className='text-center
     m-4 p-4 rounded bg-gray-300 text-3xl'>
     Zohaib Younas Github followers:{data.followers}
     <img src={data.avatar_url} alt='git pic' width={300} className='flex items-center text-center justify-center ml-[500px] mt-3 rounded-full' />
    </div>
  )
}

export default GitHub

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/zohaibyounas')
    return response.json()
}