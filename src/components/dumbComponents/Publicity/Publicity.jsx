import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import data from "../../../mock/mockdata.json";

//let pictures = [10, 20, 30, 40, 50, 60];

function slidecreator () {
    return (
        data.map(e => {
            return (
                <SwiperSlide className = "flex justify-center">
                    <img 
                        className = "h-80"
                        alt = "Not Found"
                        /*src = {`https://picsum.photos/id/${pic}/800/600`}*/
                        src = {e.image}
                    ></img>
                </SwiperSlide>
            )   
        })
    )
}

export default function Publicity() {
    return (
        <Swiper
            modules = { [ Navigation, Pagination, Autoplay ] }
            slidesPerView = { 1 }
            navigation
            // autoplay={{ delay: 10000 }}
            autoplay = { true }
            pagination = { { clickable: true } }
        >
            { slidecreator() }
        </Swiper>
    )
}