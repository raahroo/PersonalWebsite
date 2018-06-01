import { languageReducer } from './languageReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
    languageState: languageReducer
});