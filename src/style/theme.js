import { css } from 'styled-components';

const THEME = {
	colors: {
		mainBlue: '#3F3480',
	},

	flexSet: (row, align, direction) => {
		return css`
			display: flex;
			justify-content: ${row};
			align-items: ${align};
			flex-direction: ${direction};
		`;
	},
};

export default THEME;
