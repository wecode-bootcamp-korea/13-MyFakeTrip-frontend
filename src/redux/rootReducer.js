import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import hotelsReducer from './hotels/hotels.reducer';
import airTicketsReducer from './airTickets/airTickets.reducer';
import userReducer from './user/user.reducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['airTickets', 'hotels', 'user'],
};

const rootReducer = combineReducers({
	airTickets: airTicketsReducer,
	hotels: hotelsReducer,
	user: userReducer,
});

export default persistReducer(persistConfig, rootReducer);
