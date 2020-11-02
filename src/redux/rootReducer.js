import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import airTicketsReducer from './airTickets/airTickets.reducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['airTickets'],
};

const rootReducer = combineReducers({
	airTickets: airTicketsReducer,
});

export default persistReducer(persistConfig, rootReducer);
