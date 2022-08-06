import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import root from './reducers/books'
import thunk from 'redux-thunk';
import genre from  './reducers/genres'

let reducers = combineReducers({root, genre})
const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

export default store