import {createStore, combineReducers, applyMiddleware} from 'redux';
import ProfileReducer from './reducerForProfile';
import MessageReducer from './reducerForMessage';
import reducerForSearchUser from './reducerForSearchUser';
import auth from './auth-reducer';
import thunkMiddleWare from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

let redusers = combineReducers({
    ForProfile: ProfileReducer,
    ForMessage: MessageReducer,
    ForUsersPage: reducerForSearchUser,
    auth,
    form:formReducer


})

let store = createStore(redusers, applyMiddleware(thunkMiddleWare));

window.store = store;

export default store;
