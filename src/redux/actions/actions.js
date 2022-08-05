import { GET_ALL_BOOKS, GET_BOOK_BY_ID, GET_BOOKS_BY_NAME, GET_GENRES } from "./variables";
import axios from "axios";

export let getAllBooks = ()=> async(dispatch)=>{
    try {
        let allBooks = (await axios.get('http://localhost:3001/books')).data;
        dispatch({
            type: GET_ALL_BOOKS,
            payload: allBooks
        })
    } catch (error) {
        
    }
}

export let getBookByID = (name)=> async(dispatch)=>{
    try {
        let bookByID = (await axios.get(`https://localhost/books?name=[${name}]`)).data
        dispatch({
            type: GET_BOOK_BY_ID,
            payload: bookByID
        })
    } catch (error) {
        
    }
}

export let getBookByName = ()=> async(dispatch)=>{
    try {
        return {
            type: GET_BOOKS_BY_NAME
        }
    } catch (error) {

    }
}

export let getGenres = ()=> async(dispatch)=>{
    try {
        return {
            type: GET_GENRES
        }
    } catch (error) {

    }
}

/* /books
acepta query "?name=[nombreDeLibro]"
/books/:id
/genres?genre=[genreName]
 */