import { CLICK_UPDATE_DEUTSCH, CLICK_UPDATE_ENGLISH } from './actionTypes';

export const deustchButton = value => ({
    type: 'CLICK_UPDATE_DEUTSCH',
    currentLanguage: value,
});

export const englishButton = value => ({
    type: 'CLICK_UPDATE_ENGLISH',
    currentLanguage: value
});