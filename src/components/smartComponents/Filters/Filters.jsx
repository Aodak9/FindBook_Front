import React from 'react'
import Filter from './Filter'
let arrayGeres = ['arte', 'anime', 'biografía', 'biología', 'comic', 'comida', 'computación', 'deporte', 'derecho', 'economía', 'estudio', 'ficción', 'historia', 'humor', 'infantil', 'juvenil', 'matemática', 'medicina', 'novela', 'ocio - tiempo libre', 'política', 'salud - desarrollo personal', 'tecnología', 'terror']
let arrayYears = [1992, 1230, 2001, 2015, 2017]
export default function Filters() {
  return (
    <div className='grid h-full grid-cols-3 pt-1 mx-40 justify-items-center'>
       <Filter text={'Genero'} filtros={arrayGeres}/>
       <Filter text={'Escritor'}/>
       <Filter text={'Año'} filtros={arrayYears}/>
    </div>
  )
}
