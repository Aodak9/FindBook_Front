import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

export default function SearchNavBar() {
  const [name, setName] = useState('')

  const dispatch = useDispatch()
  function handleOnClick(){
    dispatch()
    setName('')
  }

  function handleOnchange(e){
    setName(e.target.value)
  }
  return (
    <div className='rounded-full bg-cream-300 flex'>
        <input type="text" onChange={(e)=>handleOnchange(e)} className='rounded-full'/>
        <button onClick={handleOnClick}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-3 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </button>
    </div>
  )
}
