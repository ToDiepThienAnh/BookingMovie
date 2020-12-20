import {applyMiddleware, combineReducers, createStore} from 'redux';
import { QuanLiPhimReducer} from './reducers/QuanLiPhimReducer'

import reduxThunk from 'redux-thunk'
const rootReducer = combineReducers({
    // Nơi định nghĩa các Reducer trong hệ thống
    QuanLiPhimReducer,
});

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));