import React from 'react'
import { useSelector } from 'react-redux'
import Swiper from '../Card/SwiperCard'


export default function SearchByCategory() {
    let state = useSelector(s=> s.root.allBooksByGenre)
    let data = state.libros
    return (
    <div>
        <Swiper data={data}/>
    </div>
    )
}
