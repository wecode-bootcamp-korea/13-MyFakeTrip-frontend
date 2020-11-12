import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import hotelsReducer from './hotels/hotels.reducer';
const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['hotels'],
};
const rootReducer = combineReducers({
	hotels: hotelsReducer,
});
export default persistReducer(persistConfig, rootReducer);
