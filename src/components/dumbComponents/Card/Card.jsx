import React from "react";
import { ReactDOM } from "react";
import data from "../../../mock/mockdata.json"



export default function Card() {
    return(
    <>
        {data.length > 0 && data.map((e)=>{
            return(
            <div key={e.id} className="container mx-auto items-start my-16 ">
                <div class="lg:w-1/4 w-full lg:pr-3">
                    <div className="bg-gray-200 rounded-xl grid grid-rows-4">
                            <div className="row-start-1 row-end-4 flex justify-center"><img src={e.image} alt="not found" className="w-60 py-10"/></div>
                            <div className="p-6 row-start-4 row-end-5">
                                <h2 className="text-2xl font-bold mb-2">{e.name}</h2>
                                <div className="text-gray-800 leading-relaxed mb-6">
                                    {e.author}
                                </div>
                            </div>
                     </div>
                </div>
            </div>
            )
        })}
    </>
    )
}