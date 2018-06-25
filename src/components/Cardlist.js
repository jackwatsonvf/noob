import React, { Component } from 'react';
import data from './../data.json';

import Card from './Card';

const Cardlist = () => {
	return data.software.map(ting => (
		<Card 
			className="card"
			icon={ting.icon}
			homepage={ting.website} 
			title={ting.title} 
			para1={ting.para1} 
			para2={ting.para2}
			download={ting.download}
			ting={ting} 
		/>
	))
}

export default Cardlist
