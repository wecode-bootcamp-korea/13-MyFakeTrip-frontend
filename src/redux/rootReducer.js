<<<<<<< HEAD
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
=======
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const rootReducer = combineReducers({
  user: userReducer,
>>>>>>> cd46640... Add: 소셜 로그인 기능 구현
});

export default persistReducer(persistConfig, rootReducer);
