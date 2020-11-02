import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import './style/common.scss';
import './style/reset.scss';
import 'antd/dist/antd.css';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root'),
);
