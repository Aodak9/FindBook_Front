import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Card from "./Cards";


export default function SwiperCard({data}){
    return(
        <Swiper
        modules = { [ Navigation, Pagination ] }
            slidesPerView = { 4 }
            navigation
        >
        <div className="flex justify-evenly">
            { data && data.length > 0 && data.map((e)=> (
                <SwiperSlide className = "flex justify-center">
                    <Card data={e} key={e.id}/>
                </SwiperSlide>))}
        </div>
        </Swiper> 
    )
}


