import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import THEME from './style/theme';
import { store, persistor } from './redux/store';

import './style/common.scss';
import './style/reset.scss';

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={THEME}>
			<Provider store={store}>
				<BrowserRouter>
					<PersistGate persistor={persistor}>
						<Routes />
					</PersistGate>
				</BrowserRouter>
			</Provider>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);
