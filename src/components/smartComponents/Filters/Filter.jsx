import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getBooksGenres } from '../../../redux/actions/actions'
export default function Filter({ text, filtros }) {
  let navigate = useNavigate()
  let dispatch = useDispatch()
  let handleOnClick = (e) => {
    dispatch(getBooksGenres(e.target.id))
    navigate(`/categoria/${e.target.id}`)
  }
  return (
    <div className='w-80 z-10'>
      <details className="open:bg-cream-300 open:shadow-lg rounded-lg p-2">
        <summary className="text-sm text-greyBlack-400 font-semibold select-none p-1">
          {text}
        </summary>
        <div className="p-2 grid grid-cols-2 gap-1 text-sm leading-6 text-greyBlack-400 border-t-2 border-greyBlack-100">
          {
            filtros && filtros.map((e) => <button key={e.id} id={e.genre || e.released} onClick={(e) => handleOnClick(e)}>{e.genre || e.released}</button>)
          }
        </div>
      </details>
    </div>
  )
}

