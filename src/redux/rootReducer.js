import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import hotelsReducer from './hotels/hotels.reducer';
import airTicketsReducer from './airTickets/airTickets.reducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['airTickets', 'hotels'],
};

const rootReducer = combineReducers({
	airTickets: airTicketsReducer,
	hotels: hotelsReducer,
});

export default persistReducer(persistConfig, rootReducer);
