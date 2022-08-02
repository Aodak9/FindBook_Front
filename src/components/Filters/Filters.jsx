import React from 'react'
import Filter from './Filter'

export default function Filters() {
  return (
    <div className='grid grid-cols-3 h-16 items-center justify-items-center mx-40'>
       <Filter text={'Genero'}/>
       <Filter text={'Escritor'}/>
       <Filter text={'Año'}/>
    </div>
  )
}
