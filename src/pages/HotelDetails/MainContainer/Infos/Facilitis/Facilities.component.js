import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { ChevronDown } from '@styled-icons/boxicons-regular/ChevronDown';

function Facilities() {
	const [open, setOpen] = useState(false);

	return (
		<FacilitiesCon>
			<FacilityList></FacilityList>
			<Button>
				모두보기
				<DownIcon />
			</Button>
		</FacilitiesCon>
	);
}

export default Facilities;

const FacilitiesCon = styled.div``;

const FacilityList = styled.div``;

const Button = styled.button``;

const DownIcon = styled(ChevronDown);
