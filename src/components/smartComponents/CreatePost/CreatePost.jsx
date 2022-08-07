import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { useState, useEffect } from "react";
import { useState } from "react";
// import { bookSchema } from "../Validators/CreatePostValidator";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

// lógica validación
function validator(form) {
    // const re = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
    const re = /^https?:\/\/[\w-]+(\.[\w-]+)+[/#?]?.*$/;
    let forbidden = {};
    let imageValidator = re.test(form.image)
    Object.keys(form).forEach(property => {
        if (!form[property]) {
            forbidden.title = `Todos los campos son obligatorios`;
        }
    })
    if (form.genre.length === 0) forbidden.genre = '';
    if (form.category.length === 0) forbidden.category = '';
    if (isNaN(form.pages)) forbidden.pages = 'Número de páginas debe ser un número';
    else if (Number(form.pages) < 0) forbidden.pages = 'Número de páginas debe ser un número positivo';
    else if (!Number.isInteger(Number(form.pages))) forbidden.pages = 'Número de páginas debe ser un número entero';
    if (form.description.length > 2000) forbidden.description = 'La descripción es muy larga';
    if (form.image.length > 0 && !imageValidator) forbidden.image = 'Enlace URL imagen inválido';
    if (form.rating.length === 0) forbidden.rating = '';
    if (isNaN(form.price)) forbidden.pages = 'Precio debe ser un número';
    else if (Number(form.price) < 0) forbidden.price = 'Precio debe ser un número positivo';
    if (!form.released) forbidden.released = '';
    if (form.language.length === 0) forbidden.language = '';
    return forbidden;
}

export default function CreatePost() {
    // const { register, handleSubmit, errors } = useForm({
    //     resolver: yupResolver(bookSchema),
    // });
    // Declaración de estados
    // const dispatch = useDispatch();
    const navigate = useNavigate();
    //const genres = useSelector(state => state.genres);
    const [ form, setForm ] = useState({
        name: '',
        author: '',
        genre: [],
        category: [],
        pages: '',
        publisher: '',
        description: '',
        image: '',
        rating: [],
        price: '',
        released: '',
        language: []
    });
    const [ forbidden, setForbidden ] = useState({});

    // lógica posteo
    function handleSelectCategory (e) {
        if (e.target.value !== 'disabled' && !form.category.includes(e.target.value)) {
            setForm({
                ...form,
                category: [e.target.value]
            })
        }    
    }

    function handleSelectRating (e) {
        if (e.target.value !== 'disabled' && !form.rating.includes(e.target.value)) {
            setForm({
                ...form,
                rating: [e.target.value]
            })
        }    
    }

    function handleSelectLanguage (e) {
        if (e.target.value !== 'disabled' && !form.language.includes(e.target.value)) {
            setForm({
                ...form,
                language: [e.target.value]
            })
        }    
    }

    function handleSelectGenre (e) {
        if (e.target.value !== 'disabled' && !form.genre.includes(e.target.value)) {
            setForm({
                ...form,
                genre: [...form.genre, e.target.value]
            })
        }    
    }
    function handleDeleteGenre (toDelete) {
        setForm({
            ...form,
            genre: form.genre.filter(gen => gen !== toDelete)
        })
    }

    function handleFormChange (e) {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        });
        setForbidden(validator({
            ...form,
            [e.target.name]: e.target.value
        }))
    };
    function handleFormSubmit (e) {
        if (form.name === '') {
            alert('No ha ingresado ninguna información para publicar');
            return;
        }
        e.preventDefault();
        form.category = form.category[0];
        form.pages = Number(form.pages);
        form.rating = Number(form.rating[0]);
        form.price = Number(form.price);
        form.released = form.released + '';
        form.language = form.language[0];
        // dispatch(postBook(form));
        alert('Libro publicado');
        console.log('Libro publicado', form)
        setForm({
            name: '',
            author: '',
            genre: [],
            category: [],
            pages: '',
            publisher: '',
            description: '',
            image: '',
            rating: [],
            price: '',
            released: '',
            language: []
        })
        navigate('/');
    }
    // useEffect(() => {
    //     dispatch(getGenres());
    // }, []);
    
    // Selectores
    function RatingSelector() {
        const possibleRatings = [1, 2, 3, 4, 5];
        return (
            <div>
                <select value = {form.rating} name = 'rating' className = "text-slate-600 w-56 rounded-lg text-center" onChange = {(e) => handleSelectRating(e)}> {/*RatingSelector*/}
                    <option /*disabled={true}*/ value="disabled">--Seleccionar--</option>
                    {
                        possibleRatings.map(r  => ( <option key = {r} value = {r}>{r}</option> ))
                    }
                    {/* <input type = 'text' value = {form.rating} name = 'rating'/> */}
                </select>
                <div>
                    {
                        form.rating.map(r => 
                            <div className = 'text-slate-400' key = {r}>
                                <p>Puntaje asignado: &nbsp;{r}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }

    function CategorySelector() {
        const possibleCategories = ['todos', '12+', '16+', '18+', 'sin clasificación'];
        return (
            <div>
                <select value = {form.category} name = 'category' className = "text-slate-600 w-56 rounded-lg text-center" onChange = {(e) => handleSelectCategory(e)}> {/*CategorySelector*/}
                    <option /*disabled={true}*/ value="disabled">--Seleccionar--</option>
                    {
                        possibleCategories.map((cat, i)  => ( <option key = {i} value = {cat}>{cat}</option> ))
                    }
                    {/* <input type = 'text' value = {form.category} name = 'category'/> */}
                </select>
                <div>
                    {
                        form.category.map((cat, i) => 
                            <div className = "text-slate-400" key = {i}>
                                <p>Categoría asignada: &nbsp;{cat}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }

    function LanguageSelector() {
        const possibleLanguages = ['español', 'inglés', 'otro'];
        return (
            <div>
                <select value = {form.language} name = 'language' className = "text-slate-600 w-56 rounded-lg text-center" onChange = {(e) => handleSelectLanguage(e)}> {/*LanguageSelector*/}
                    <option /*disabled={true}*/ value="disabled">--Seleccionar--</option>
                    {
                        possibleLanguages.map((lang, i)  => ( <option key = {i} value = {lang}>{lang}</option> ))
                    }
                    {/* <input type = 'text' value = {form.language} name = 'language'/> */}
                </select>
                <div className = "flex justify-center">
                    {
                        form.language.map((lang, i) => 
                            <div key = {i} className = "flex items-center no-underline text-slate-400">
                                <p>Lenguaje seleccionado: &nbsp;{lang}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }

    function GenreSelector() {
        const possibleGenres = [  
            'arte', 'anime', 'biografía', 'biología', 'comic', 'comida', 
            'computación', 'deporte', 'derecho', 'economía', 'estudio', 'ficción', 
            'historia', 'humor', 'infantil', 'juvenil', 'matemática', 'medicina', 
            'novela', 'ocio - tiempo libre', 'política', 'salud - desarrollo personal', 'tecnología', 'terror'
        ];
        return (
            <div>
                <select value = {form.genre} name = 'genre' className = "text-slate-600 w-56 rounded-lg text-center" onChange = {(e) => handleSelectGenre(e)}> {/*GenreSelector*/}
                    <option /*disabled={true}*/ value="disabled">--Seleccionar--</option>
                    {
                        possibleGenres.map((gen, i)  => ( <option key = {i} value = {gen}>{gen}</option> ))
                    }
                    {/* <input type = 'text' value = {form.genre} name = 'genre'/> */}
                </select>
                <div className = "flex flex-col items-center">
                    {
                        form.genre.map((gen, i) => 
                            <div key = {i} className = "flex items-center no-underline text-slate-400 py-1">
                                <p>Añadido: &nbsp;{gen}&nbsp;</p>{<button className = 'border rounded-lg px-1 bg-stone-100' onClick = {() => handleDeleteGenre(gen)}>&nbsp;Borrar</button>}
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }

    // Renderizar formulario
    return (
        <div className = "flex justify-center items-center text-center h-screen flex-col mt-12"> {/*Container*/}
            <div className = "bg-cream-100 px-20 w-2/3 rounded"> {/*Background bg-slate-900*/}
                <h1 className = "text-zinc-600 pt-5 text-lg">PUBLICA TU LIBRO PARA VENTA</h1>
                <br></br>
                <form onSubmit={e => handleFormSubmit (e)}> {/*FormContainer*/}
                    <div className = "flex justify-between text-zinc-600 mb-1"> {/*FormItem*/}
                        <div>
                            <label>Título:</label>
                            <label className = "text-orange-600 justify-self-center">{forbidden.name && forbidden.name}</label>
                        </div>
                        <input type = 'text' value = {form.name} name = 'name' onChange={e => handleFormChange (e)} className = "w-56 rounded-lg"/>
                    </div>
                    <div className = "flex justify-between text-zinc-600 mb-1"> {/*FormItem*/}
                        <div>
                            <label>Autor:</label>
                            <label className = "text-orange-600">{forbidden.author && forbidden.author}</label>
                        </div>
                        <input type = 'text' value = {form.author} name = 'author' onChange={e => handleFormChange (e)} className = "w-56 rounded-lg"/>
                    </div>
                    <div className = "flex justify-between text-zinc-600 mb-1"> {/*FormItem*/}
                        <div>
                            <label>Género(s):</label>
                            <label className = "text-orange-600">{forbidden.genre && forbidden.genre}</label>
                        </div>
                        {GenreSelector()}
                    </div>
                    <div className = "flex justify-between text-zinc-600 mb-1"> {/*FormItem text-slate-50*/}
                        <div>
                            <label>Categoría:</label>
                            <label className = "text-orange-600">{forbidden.category && forbidden.category}</label>
                        </div>
                        {CategorySelector()}
                    </div>
                    <div className = "flex justify-between text-zinc-600 mb-1"> {/*FormItem*/}
                        <div>
                            <label>Número de páginas:</label>
                            <label className = "text-orange-600">{forbidden.pages && forbidden.pages}</label>
                        </div>
                        <input type = 'text' value = {form.pages} name = 'pages' onChange={e => handleFormChange (e)} className = "w-56 rounded-lg"/>
                    </div>
                    <div className = "flex justify-between text-zinc-600 mb-1"> {/*FormItem*/}
                        <div>
                            <label>Editorial:</label>
                            <label className = "text-orange-600">{forbidden.publisher && forbidden.publisher}</label>
                        </div>
                        <input type = 'text' value = {form.publisher} name = 'publisher' onChange={e => handleFormChange (e)} className = "w-56 rounded-lg"/> 
                    </div>
                    <div className = "flex justify-between text-zinc-600 mb-1"> {/*FormItem*/}
                        <div>
                            <label>Imagen o Portada:</label>
                            <label className = "text-orange-600 justify-self-center">{forbidden.image && forbidden.image}</label>
                        </div>
                        <input type = 'text' value = {form.image} name = 'image' onChange={e => handleFormChange (e)} className = "w-56 rounded-lg"/>
                    </div>
                    <div className = "flex justify-between text-zinc-600 mb-1"> {/*FormItem*/}
                        <div>
                            <label>Puntaje:</label>
                            <label className = "text-orange-600">{forbidden.rating && forbidden.rating}</label>
                        </div>
                        {RatingSelector()}
                    </div>
                    <div className = "flex justify-between text-zinc-600 mb-1"> {/*FormItem*/}
                        <div>
                            <label>Precio:</label>
                            <label className = "text-orange-600">{forbidden.price && forbidden.price}</label>
                        </div>
                        <input type = 'text' value = {form.price} name = 'price' onChange={e => handleFormChange (e)} className = "w-56 rounded-lg"/>
                    </div>
                    <div className = "flex justify-between text-zinc-600 mb-1"> {/*FormItem*/}
                        <div>
                            <label>Fecha de publicación:</label>
                            <label className = "text-orange-600">{forbidden.released && forbidden.released}</label>
                        </div>
                        <input type = 'date' value = {form.released} name = 'released' onChange={e => handleFormChange (e)} className = "text-slate-600 w-56 rounded-lg text-center"/>
                    </div>
                    <div className = "flex justify-between text-zinc-600 mb-1"> {/*FormItem*/}
                        <div>
                            <label>Idioma:</label>
                            <label className = "text-orange-600">{forbidden.language && forbidden.language}</label>
                        </div>
                        {LanguageSelector()}
                    </div>
                    <div className = "flex flex-col text-zinc-600 mb-1"> {/*FormItem*/}
                        <div>
                            <label className = "flex items-start">Descripción:</label>
                            <label className = "text-orange-600">{forbidden.description && forbidden.description}</label>
                        </div>
                        <textarea type = 'text' value = {form.description} name = 'description' onChange={e => handleFormChange (e)} className = "w-full rounded-lg"/>
                    </div>
                    <div> {/*ErrorDiv*/}
                        {
                            forbidden.title && ( <p key = 'title' className = "flex text-orange-600">{forbidden.title}</p> )
                        }
                        {/* {
                            Object.keys(forbidden).map((oneKey, i) => {
                                return (
                                    forbidden[oneKey] && ( <p key = {i} className = "flex text-orange-600">{forbidden[oneKey]}</p> )
                                )
                            })
                        } */}
                    </div>
                    <br></br>
                    <br></br>
                    <div className = "flex flex-wrap justify-evenly pb-4"> {/*ButtonsDiv*/}
                        {
                            Object.entries(forbidden).length === 0 ?
                                <div> {/*PostButtonDiv*/}
                                    <button type = 'submit' className = "no-underline w-60 py-1 px-4 text-neutral-900 rounded-2xl font-medium bg-stone-400 hover:text-white hover:border-solid hover:border-slate-50 hover:bg-stone-400">Publicar</button>
                                </div>
                                :
                                <div> {/*PostButtonDisabledDiv*/}
                                    <button type = 'submit' className = "no-underline w-60 py-1 px-4 text-gray-800 rounded-2xl font-medium bg-zinc-600 pointer-events-none">Publicar</button>
                                </div>
                        }
                        <div> {/*GoBackDiv*/}
                            <Link to = '/'>
                                <button className = "no-underline w-60 py-1 px-4 text-neutral-900 rounded-2xl font-medium bg-stone-400 hover:text-white hover:border-solid hover:border-slate-50 hover:bg-stone-400">Cancelar {'&'} Volver</button>
                            </Link>
                        </div>
                    </div>                    
                </form>
            </div>            
        </div>
    )
}