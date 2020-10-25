import { combineReducers } from 'redux';
import { auth } from './authReducer';
import { siteModal } from './siteModal';

export const rootReducer = combineReducers({
    auth,
    siteModal
});

