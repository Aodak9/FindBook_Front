import {GET_ALL_BOOKS, GET_BOOK_BY_ID, GET_BOOKS_BY_NAME, GET_BOOK_BY_GENRE, GET_YEARS, GET_BOOKS_BY_YEARS} from '../actions/variables'

let initialState = {
    allBooks: [],
    allBooksByName: [],
    allBooksByGenre: [],
    allBooksByRealiced: [],
    bookById: {},
    year: [],
    name: ''
}

export default function root(state = initialState, actions){
    switch (actions.type) {
        case GET_ALL_BOOKS:
            return {
                ...state,
                allBooks: actions.payload
            }
        case GET_BOOK_BY_ID:
            return {
                ...state,
                bookById: actions.payload
            }
        case GET_BOOKS_BY_NAME:
            return {
                ...state,
                allBooksByName: actions.payload.Books,
                name: actions.payload.name
            }
        case GET_BOOK_BY_GENRE:
            return {
                ...state,
                allBooksByGenre: actions.payload
            }
        case GET_YEARS:
            let years = actions.payload.map((l, i) => {
                return {
                    id: i,
                    released: l.released
                }
            })
            return {
                ...state,
                year: years
            }
        case GET_BOOKS_BY_YEARS:
            let booksByName = state.allBooks.filter(e => e.released === actions.payload)
            return {
                ...state,
                allBooksByRealiced: booksByName
            }
        default:
            return {...state}
    }
}
