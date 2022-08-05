import { GET_ALL_BOOKS, GET_BOOK_BY_ID, GET_BOOKS_BY_NAME, GET_BOOK_BY_GENRE, GET_GENRE} from "./variables";
import axios from "axios";

export let getAllBooks = ()=> async(dispatch)=>{
    try {
        let allBooks = (await axios.get('https://findbook-api.herokuapp.com/books')).data;
        dispatch({
            type: GET_ALL_BOOKS,
            payload: allBooks
        })
    } catch (error) {
        alert(error)
    }
}

export let getBookByID = (id)=> async(dispatch)=>{
    try {
        let bookByID = (await axios.get(`https://findbook-api.herokuapp.com/books/${id}`)).data;
        dispatch({
            type: GET_BOOK_BY_ID,
            payload: bookByID
        })
    } catch (error) {
        alert(error)
    }
}

export let getBookByName = (name)=> async(dispatch)=>{
    try {
        let bookByName = (await axios.get(`https://findbook-api.herokuapp.com/books?name=${name}`)).data;
        dispatch({
            type: GET_BOOKS_BY_NAME,
            payload: bookByName
        })
    } catch (error) {
        alert(error)
    }
}

export let getBooksGenres = (genre)=> async(dispatch)=>{
    try {
        let getGenresDB = (await axios.get(`https://findbook-api.herokuapp.com/genres?genre=${genre}`)).data;
        dispatch({
            type: GET_BOOK_BY_GENRE,
            payload: getGenresDB
        }) 
    } catch (error) {
        alert(error)
    }
}

export let getGenres = (genre)=> async(dispatch)=>{
    try {
        let getGenresDB = (await axios.get('https://findbook-api.herokuapp.com/genres')).data;
        dispatch({
            type: GET_GENRE,
            payload: getGenresDB
        })
    } catch (error) {
        alert(error)
    }
}

