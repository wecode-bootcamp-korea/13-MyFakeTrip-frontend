import React from 'react';

import AirTicketsAside from '../../components/AirTicketsAside/AirTicketsAside.component';
import AirTicketsMain from '../../components/AirTicketsMain/AirTicketsMain.component';
import AirTicketsSearch from '../../components/AirTicketsSearch/AirTicketsSearch.component';

import { AirTicketsPage } from './AirTickets.styles';

function AirTickets() {
	return (
		<AirTicketsPage>
			<div className="ticket_search_container">
				<AirTicketsSearch />
			</div>
			<div className="ticket_list_container">
				<div className="ticket_list_information">
					<AirTicketsAside />
					<AirTicketsMain />
				</div>
			</div>
		</AirTicketsPage>
	);
}

export default AirTickets;
