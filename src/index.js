import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import THEME from './style/theme';
import './style/reset.scss';

ReactDOM.render(
	<ThemeProvider theme={THEME}>
		<BrowserRouter>
			<Routes />
		</BrowserRouter>
	</ThemeProvider>,
	document.getElementById('root'),
);
