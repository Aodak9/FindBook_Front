import {GET_ALL_BOOKS, GET_BOOK_BY_ID, GET_BOOKS_BY_NAME, GET_BOOK_BY_GENRE} from '../actions/variables'

let initialState = {
    allBooks: [],
    allBooksByName: [],
    allBooksByGenre: [],
    bookById: {},
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
                allBooksByName: actions.payload
            }
        case GET_BOOK_BY_GENRE:
            return {
                ...state,
                allBooksByGenre: actions.payload
            }
        default:
            return {...state}
    }
}
