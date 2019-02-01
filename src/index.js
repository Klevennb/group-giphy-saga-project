import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider} from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

function* rootSaga(){
yield takeEvery('GET_FAVORITES', getFavorites )
}

function* getFavorites(action){
    try{
        const serverResponse = yield axios.get('/api/favorites')
    }catch(error){
        console.log(error,'in get favorites');
        
    }
}

const favoriteList = (state = [], action) =>{
    if(action.type === 'SET_FAVORITES'){
        return action.payload;
    }
    return state;
}

const searchList = (state = [], action) =>{
    if(action.type === 'SET_SEARCH'){
        return action.payload;
    }
    return state;
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    combineReducers({
        favoriteList,
        searchList,
    }),
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
