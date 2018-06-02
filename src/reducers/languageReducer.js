import { CLICK_UPDATE_DEUTSCH, CLICK_UPDATE_ENGLISH } from '../actions/actionTypes';

const initialState = {
    currentLanguage: 1,
};

export const languageReducer = (state = initialState, action)=> {
    switch (action.type) {
        case 'CLICK_UPDATE_DEUTSCH':
            return {
                ...state,
                currentLanguage: action.currentLanguage,
            };
            console.log(action.currentLanguage, 'CLICK_UPDATE_DEUTSCH');

        case 'CLICK_UPDATE_ENGLISH':
        return {
            ...state,
            currentLanguage: action.currentLanguage
        };
        console.log(action.currentLanguage, 'CLICK_UPDATE_ENGLISH');


        default:
            return state;
    }
}