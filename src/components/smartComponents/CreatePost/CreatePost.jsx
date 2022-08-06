import React from "react";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
import { useState } from "react";

// lógica validación
function validator(form) {
    let forbidden = {};
    Object.keys(form).forEach(property => {
        if (!form[property]) {
            forbidden[property] = `${property[0].toUpperCase() + property.substring(1)} is required`;
        }
    })
    return forbidden;
}

export default function CreatePost() {
    // Declaración de estados
    // const dispatch = useDispatch();
    // const history = useHistory();
    const navigate = useNavigate();
    //const genres = useSelector(state => state.genres);
    const [form, setForm] = useState({
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
    const [forbidden, setForbidden] = useState({});

    // lógica posteo
    function handleSelectCategory(e) {
        if (e.target.value !== 'disabled' && !form.category.includes(e.target.value)) {
            setForm({
                ...form,
                category: [e.target.value]
            })
        }
    }

    function handleSelectRating(e) {
        if (e.target.value !== 'disabled' && !form.rating.includes(e.target.value)) {
            setForm({
                ...form,
                rating: [e.target.value]
            })
        }
    }

    function handleSelectLanguage(e) {
        if (e.target.value !== 'disabled' && !form.language.includes(e.target.value)) {
            setForm({
                ...form,
                language: [e.target.value]
            })
        }
    }

    function handleSelectGenre(e) {
        if (e.target.value !== 'disabled' && !form.genre.includes(e.target.value)) {
            setForm({
                ...form,
                genre: [...form.genre, e.target.value]
            })
        }
    }
    function handleDeleteGenre(toDelete) {
        setForm({
            ...form,
            genre: form.genre.filter(gen => gen !== toDelete)
        })
    }

    function handleFormChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
        setForbidden(validator({
            ...form,
            [e.target.name]: e.target.value
        }))
    };
    function handleFormSubmit(e) {
        e.preventDefault();
        form.released = form.released + '';
        form.category = form.category[0];
        form.rating = form.rating[0];
        form.language = form.language[0];
        // dispatch(postBook(form));
        alert('Libro publicado');
        setForm({
            name: '',
            author: '',
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
        // history.push('/');
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
                <select className="text-slate-600 w-56 text-center" onChange={(e) => handleSelectRating(e)}> {/*RatingSelector*/}
                    <option /*disabled={true}*/ value="disabled">--Seleccionar--</option>
                    {
                        possibleRatings.map(r => (<option value={r}>{r}</option>))
                    }
                    <input type='text' value={form.rating} name='rating' />
                </select>
                <div>
                    {
                        form.rating.map(r =>
                            <div>
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
                <select className="text-slate-600 w-56 text-center" onChange={(e) => handleSelectCategory(e)}> {/*CategorySelector*/}
                    <option /*disabled={true}*/ value="disabled">--Seleccionar--</option>
                    {
                        possibleCategories.map(cat => (<option value={cat}>{cat}</option>))
                    }
                    <input type='text' value={form.category} name='category' />
                </select>
                <div>
                    {
                        form.category.map(cat =>
                            <div>
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
                <select className="text-slate-600 w-56 text-center" onChange={(e) => handleSelectLanguage(e)}> {/*LanguageSelector*/}
                    <option /*disabled={true}*/ value="disabled">--Seleccionar--</option>
                    {
                        possibleLanguages.map(lang => (<option value={lang}>{lang}</option>))
                    }
                    <input type='text' value={form.language} name='language' />
                </select>
                <div className="flex justify-center">
                    {
                        form.language.map(lang =>
                            <div className="flex items-center no-underline text-slate-50">
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
                <select className="text-slate-600 w-56 text-center" onChange={(e) => handleSelectGenre(e)}> {/*GenreSelector*/}
                    <option /*disabled={true}*/ value="disabled">--Seleccionar--</option>
                    {
                        possibleGenres.map(gen => (<option value={gen}>{gen}</option>))
                    }
                    <input type='text' value={form.genre} name='genre' />
                </select>
                <div className="flex justify-center">
                    {
                        form.genre.map(gen =>
                            <div className="flex items-center no-underline text-slate-50">
                                <p>Género añadido: &nbsp;{gen}</p>{<button onClick={() => handleDeleteGenre(gen)}>Borrar</button>}
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }

    // Renderizar formulario
    return (
        <div className="flex justify-center items-center text-center h-screen flex-col"> {/*Container*/}
            <div className="bg-slate-900 px-20 w-2/3"> {/*Background*/}
                <h1 className="text-slate-50 pt-5 text-lg">PUBLICA TU LIBRO PARA VENTA</h1>
                <br></br>
                <form onSubmit={e => handleFormSubmit(e)}> {/*FormContainer*/}
                    <div className="flex justify-between text-slate-50"> {/*FormItem*/}
                        <label>Título:</label>
                        <input type='text' value={form.name} name='name' onChange={e => handleFormChange(e)} className="w-56" />
                    </div>
                    <div className="flex justify-between text-slate-50"> {/*FormItem*/}
                        <label>Autor:</label>
                        <input type='text' value={form.author} name='author' onChange={e => handleFormChange(e)} className="w-56" />
                    </div>
                    <div className="flex justify-between text-slate-50"> {/*FormItem*/}
                        <label>Género(s):</label>
                        {GenreSelector()}
                    </div>
                    <div className="flex justify-between text-slate-50"> {/*FormItem*/}
                        <label>Categoría:</label>
                        {CategorySelector()}
                    </div>
                    <div className="flex justify-between text-slate-50"> {/*FormItem*/}
                        <label>Número de páginas:</label>
                        <input type='text' value={form.pages} name='pages' onChange={e => handleFormChange(e)} className="w-56" />
                    </div>
                    <div className="flex justify-between text-slate-50"> {/*FormItem*/}
                        <label>Editorial:</label>
                        <input type='text' value={form.publisher} name='publisher' onChange={e => handleFormChange(e)} className="w-56" />
                    </div>
                    <div className="flex justify-between text-slate-50"> {/*FormItem*/}
                        <label>Imagen o Portada:</label>
                        <input type='text' value={form.image} name='image' onChange={e => handleFormChange(e)} className="w-56" />
                    </div>
                    <div className="flex justify-between text-slate-50"> {/*FormItem*/}
                        <label>Puntaje:</label>
                        {RatingSelector()}
                    </div>
                    <div className="flex justify-between text-slate-50"> {/*FormItem*/}
                        <label>Precio:</label>
                        <input type='text' value={form.price} name='price' onChange={e => handleFormChange(e)} className="w-56" />
                    </div>
                    <div className="flex justify-between text-slate-50"> {/*FormItem*/}
                        <label>Fecha de publicación:</label>
                        <input type='date' value={form.released} name='released' onChange={e => handleFormChange(e)} className="text-slate-600 w-56 text-center" />
                    </div>
                    <div className="flex justify-between text-slate-50"> {/*FormItem*/}
                        <label>Idioma:</label>
                        {LanguageSelector()}
                    </div>
                    <div className="flex flex-col text-slate-50"> {/*FormItem*/}
                        <label className="flex items-start">Descripción:</label>
                        <textarea type='text' value={form.description} name='description' onChange={e => handleFormChange(e)} className="w-full" />
                    </div>
                    <div> {/*ErrorDiv*/}
                        {
                            Object.keys(forbidden).map((oneKey, i) => {
                                return (
                                    forbidden[oneKey] && (<p key={i} className="flex text-orange-600">{forbidden[oneKey]}</p>)
                                )
                            })
                        }
                    </div>
                    <br></br>
                    <br></br>
                    <div className="flex flex-wrap justify-evenly pb-4"> {/*ButtonsDiv*/}
                        {
                            Object.entries(forbidden).length === 0 ?
                                <div> {/*PostButtonDiv*/}
                                    <button type='submit' className="no-underline py-1 px-4 text-neutral-900 rounded-2xl font-medium bg-slate-50 hover:text-white hover: border-solid hover: border-slate-50 hover:bg-stone-400">Publicar</button>
                                </div>
                                :
                                <div> {/*PostButtonDisabledDiv*/}
                                    <button type='submit'
                                        className="no-underline py-1 px-4 text-gray-800 rounded-2xl font-medium bg-zinc-600 pointer-events-none">Publicar</button>
                                </div>
                        }
                        <div> {/*GoBackDiv*/}
                            <Link to='/'>
                                <button className="no-underline py-1 px-4 text-neutral-900 rounded-2xl font-medium bg-slate-50 hover:text-white hover: border-solid hover: border-slate-50 hover:bg-stone-400">Cancelar {'&'} Volver</button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}