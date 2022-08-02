import React from 'react'

export default function SearchNavBar() {
  return (
    <div className='rounded-full bg-cream-300 flex'>
        <input type="text" className='rounded-full'/>
        <button>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-3 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </button>
    </div>
  )
}
