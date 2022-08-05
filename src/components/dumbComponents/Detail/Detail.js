import React from 'react'
import {ButtonDetail, H1Detail, DivDetail, TextDetail, DivTableDetail, DivTableColDetail} from './stayleComponentDetail'
import { useSelector } from 'react-redux';
import SwiperCard from '../Card/SwiperCard';
export default function Detail() {
    let state = useSelector(s => s.root.bookById)
    let books = useSelector(s=> s.root.allBooksByName).slice(0, 10)
    return (
        <>
        {  
            state.id && 
                <div className='w-screen bg-greyBlack-100 grid grid-cols-1 justify-items-center gap-5'>
                <div className='grid grid-cols-1 justify-items-center w-full px-20 bg-greyBlack-200 pt-2'>
                    <h1>{state.name}</h1>
                    <div className='grid grid-cols-3 justify-items-center content-center justify-between w-full h-12'>
                        <span><a href='#descripcion'>Descripcion</a></span>
                        <span><a href='#caracteristicas'>Caracteristicas</a></span>
                        <span><a href='#recomendados'>Recomendados</a></span>
                    </div>
                </div>
                <div className='bg-cream-100 w-2/3 grid justify-items-center gap-5 rounded-sm'>
                    <div className='grid grid-cols-2 w-2/3 gap-40 mt-8 w pb-7 border-b-2 border-greyBlack-100'>
                        <div className='grid justify-items-center'>
                                <img src={state.image} alt='Not found'
                                className='w-48 rounded-md'
                                />
                            <ButtonDetail>Agregar a una lista</ButtonDetail>
                        </div>
                        <div className='grid grid-rows-3 content-center h-40 rounded-md bg-cream-200 justify-items-center'>
                            <h1 className='m-auto'>US${state.price}</h1>                      
                            <ButtonDetail>Comprar ahora</ButtonDetail>
                            <ButtonDetail style={{background: '#bababa'}}>Agregar al carrito</ButtonDetail>
                        </div>
                    </div>
                    <DivDetail>
                        <H1Detail id='descripcion'>Descripción</H1Detail>
                        <TextDetail>
                        {state.description}
                        </TextDetail>
                    </DivDetail>
                    <DivDetail>
                        <H1Detail id='caracteristicas'>Características</H1Detail>
                        <div className='w-full my-6'>
                            <DivTableColDetail>
                                <h1>Publisher</h1>
                                <h2>{state.publisher}</h2>
                            </DivTableColDetail>
                            <DivTableDetail/>
                            <DivTableColDetail>
                                    <h1>Pages</h1>
                                    <h2>{state.pages}</h2>
                            </DivTableColDetail>
                            <DivTableDetail/>
                            <DivTableColDetail>
                                <h1>Category</h1>
                                <h2>{state.category}</h2>
                            </DivTableColDetail>
                            <DivTableDetail/>
                            <DivTableColDetail>
                                <h1>Author</h1>
                                <h2>{state.author}</h2>
                            </DivTableColDetail>
                            <DivTableDetail/>
                            <DivTableColDetail>
                                <h1>Genre</h1>
                                <h2>{state.genre}</h2>
                            </DivTableColDetail>
                            <DivTableDetail/>
                            <DivTableColDetail>
                                <h1>Released</h1>
                                <h2>{state.released}</h2>
                            </DivTableColDetail>
                            <DivTableDetail/>
                            <DivTableColDetail>
                                <h1>Language</h1>
                                <h2>{state.language}</h2>
                            </DivTableColDetail>
                            <DivTableDetail/>
                        </div>
                    </DivDetail>
                    <DivDetail id='recomendados' style={{border: 'none'}}>
                        <H1Detail>Recomendaciones</H1Detail>
                        <div className='w-full h-80'>
                            <SwiperCard data={books}/>
                        </div>
                    </DivDetail>
                </div>
                </div>
            }
        </>
    )
}
