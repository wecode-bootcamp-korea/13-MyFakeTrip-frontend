import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function Facilities(props) {
	const [open, setOpen] = useState(false);
	console.log(props.facility);

	return (
		<FacilitiesCon>
			<FacilityWrap>
				<List>
					{props.facility.map((facility) => {
						return (
							<li key={facility.id}>
								<img src={facility.icon} alt={facility.name} />
								{facility.name}
							</li>
						);
					})}
				</List>
			</FacilityWrap>
			<Button>모두보기</Button>
		</FacilitiesCon>
	);
}

export default Facilities;

const FacilitiesCon = styled.div``;

const FacilityWrap = styled.div``;

const List = styled.ul`
	li {
		img {
		}
	}
`;

const Button = styled.button``;
