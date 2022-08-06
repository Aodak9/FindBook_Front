import React from 'react'
import Publicity from '../../dumbComponents/Publicity/Publicity';
import SwiperCard from '../Card/SwiperCard';
import { useSelector } from "react-redux";


export default function Home() {
    let state = useSelector(s => s.root.allBooks)
    let data = state.slice(0, 10)
    return (
        <div className='w-full h-full bg-greyBlack-100'>
            <Publicity/>
            <div>
                <SwiperCard data={data}/>
            </div>
        </div>
    )
}
