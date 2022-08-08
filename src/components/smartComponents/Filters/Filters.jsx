import React from 'react'
import { useSelector } from 'react-redux'
import Filter from './Filter'
// let year = [
//   "1999-2004",
//   "2004-2009",
//   "2009-2014",
//   "2014-2019",
//   "2019-2022"
// ]
export default function Filters() {
  let state = useSelector(s => s.genre.genres)
  let year = useSelector(s => s.root.year)
  return (
    <div className='z-50 grid h-full grid-cols-2 pt-1 mx-40 justify-items-center'>
      <Filter text={'Genero'} filtros={state} />
      {/* {console.log('state ', state)} */}
      {console.log('year ',year)}
      <Filter text={'Año'} filtros={year} />
    </div>
  )
}
