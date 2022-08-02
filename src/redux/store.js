import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import root from '../redux/reducers/home'
import thunk from 'redux-thunk';

//let reducers = combineReducers({root, diets})
const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    root,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

export default store