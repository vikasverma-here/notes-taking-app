
import React, { useState } from 'react'

const Home = () => {
    const [title,setTitle]=useState('')
    const [value,setValue]=useState('')
  return (
    <div>
      <input className='text-black' type="text" placeholder='Enter title Here' value={title} onChange={((e)=>setTitle(e.target.value))}/>
      

        <button className='border border-gray-500'>Create Note</button>
    
    </div>
  )
}

export default Home
