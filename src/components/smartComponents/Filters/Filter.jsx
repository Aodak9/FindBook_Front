import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getBooksGenres, getBooksByYears} from '../../../redux/actions/actions'
export default function Filter({ text, filtros }) {
  let navigate = useNavigate()
  let dispatch = useDispatch()
  let handleOnClick = (type) => {
    if(filtros?.some(e => e.genre === type)){
        dispatch(getBooksGenres(type))
        navigate(`/categoria/${type}`)
      }else{
        dispatch(getBooksByYears(type))
        navigate(`/released/${type}`)
      } 
  }
  return (
    <div className='z-10 w-80'>
      <details className="p-2 rounded-lg open:bg-cream-300 open:shadow-lg">
        <summary className="p-1 text-sm font-semibold select-none text-greyBlack-400">
          {text}
        </summary>
        <div className="grid grid-cols-3 gap-1 p-2 text-sm leading-6 border-t-2 text-greyBlack-400 border-greyBlack-100">
          {
            filtros && filtros.map((e) => <button key={e.id} id={e.genre || e.released} onClick={() => handleOnClick(e.genre || e.released)}>{e.genre || e.released}</button>)
          }
        </div>
      </details>
    </div>
  )
}

