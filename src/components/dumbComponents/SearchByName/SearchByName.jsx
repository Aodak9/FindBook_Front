import React from 'react'
import { useSelector } from 'react-redux'
import Swiper from '../Card/SwiperCard'

export default function SearchByName() {
    let books = useSelector(s => s.root.allBooksByName)
    return (
        <div>
            <Swiper data={books}/>
        </div>
    )
}
