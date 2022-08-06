import React from 'react'
import { useSelector } from 'react-redux'
import ContainCards from '../Card/ContainCards'
export default function SearchByReleased() {
    let state = useSelector(s => s.root.allBooksByRealiced) 
  return (
    <div>
        <ContainCards data={state}/>
    </div>
  )
}
