import React from 'react'
import { useSelector } from 'react-redux'
import Filter from './Filter'
//let arrayYears = [1992, 1230, 2001, 2015, 2017]
export default function Filters() {
  let state = useSelector(s => s.genre.genres)
  return (
    <div className='grid h-full grid-cols-2 pt-1 mx-40 justify-items-center z-50'>
        <Filter text={'Genero'} filtros={state}/>
        {/* <Filter text={'Año'} filtros={arrayYears}/> */}
    </div>
  )
}
