import React, { Component } from 'react';

import Card from './Card';

const Cardlist = ({ cards }) => {
	return (
		<div>
			{
				cards.map((card, i) => {
					return (
						<Card
							key={i}
							id={cards[i].id}
							icon={cards[i].icon}
							title={cards[i].title}
							para1={cards[i].para1}
							para2={cards[i].para2}
							download={cards[i].download}
							tags={cards[i].tags}
						/>
					);
				})
			}
		</div>
	)
}

export default Cardlist
