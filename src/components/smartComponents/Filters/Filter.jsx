import React from 'react'

export default function Filter({text, filtros}) {
  let handleOnClick = ()=>{
    console.log('hola')
  }
  return (
    <div className='w-72'>
      <details class="open:bg-cream-300 open:shadow-lg rounded-lg p-2">
          <summary class="text-sm text-greyBlack-400 font-semibold select-none p-1">
            {text}
          </summary>
        <div class="p-2 grid grid-cols-2 gap-1 text-sm leading-6 text-greyBlack-400 border-t-2 border-greyBlack-100">
          {
            filtros && filtros.map((e, i)=> <input type='button' key={i} onClick={handleOnClick} value={e}/>)
          }
        </div>
      </details>
    </div>
  )
}

