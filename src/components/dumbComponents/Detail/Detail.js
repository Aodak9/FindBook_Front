import React from 'react'
import data from '../../../mock/mockdata.json'
export default function Detail() {
    return (
        <div className='w-screen h-auto'>
            {/*  {
                data && data
            } */}
            <div className='grid grid-cols-1 justify-items-center'>
                <h1>Nombre</h1>
                <div className='grid grid-cols-3 justify-items-center gap-x-10'>
                    <span><a href='#descripcion'>descripcion</a></span>
                    <span><a href='#caracteristicas'>caracteristicas</a></span>
                    <span><a href='#recomendados'>recomendados</a></span>
                </div>
            </div>
            <div>
                <div>
                    {/* <img></img> */}
                    <div>
                        <h1>imagen</h1>
                        <button>agregar a una lista</button>
                    </div>
                    <div>
                        <h1>$3000</h1>
                        <button>comprar ahora</button>
                        <button>agregar al carrito</button>
                    </div>
                </div>
                <div>
                    <h1 id='descripcion'>Descripcion</h1>
                    <div>
                        hola soy la descripcion
                    </div>
                </div>
                <div>
                    <h1 id='caracteristicas'>Caracteristicas</h1>
                    <div>
                        tabla
                    </div>
                </div>
                <div id='recomendados'>
                    <h1>yo soy las recomendaciones</h1>
                </div>
            </div>
        </div>
    )
}
