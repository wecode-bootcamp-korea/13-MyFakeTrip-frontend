<<<<<<< HEAD
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import rootReducer from './rootReducer';
const middlewares = [logger];
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
=======
import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { persistStore } from "redux-persist";

import rootReducer from "./rootReducer";

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

>>>>>>> cd46640... Add: 소셜 로그인 기능 구현
export const persistor = persistStore(store);
