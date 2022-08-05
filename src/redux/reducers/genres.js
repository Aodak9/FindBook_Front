import {GET_GENRES} from '../actions/variables'

let initialState = {
    genres: []
}

export default function genre(state = initialState, actions){
    switch (actions.type) {
        case GET_GENRES:
        return {
            ...state,
            genres: actions.payload
        }
        default:
            return {...state}
    }
}
