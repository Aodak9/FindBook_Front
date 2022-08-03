import React from "react";
import { ReactDOM } from "react";
import data from "../../../mock/mockdata.json"



export default function Card() {
    return(
    <div className="w-screen h-96 flex justify-evenly">
        {data.length > 0 && data.map((e)=>{
            return(
            <div key={e.id} className="w-44 h-72" >
                    <div className="bg-gray-200 rounded-xl">
                            <div className="row-start-1 row-end-4 justify-center">
                                <img src={e.image} alt="not found" className="w-auto h-30 py-5 px-3 "/>
                                </div>
                            <div className="row-start-4 row-end-5">
                                <h2 className="text-2xl font-bold mb-1">{e.name}</h2>
                                <div className="text-gray-800 leading-relaxed">
                                    {e.author}
                                </div>
                            </div>
                     </div>
            </div>
            )
        })}
    </div>
    )
}