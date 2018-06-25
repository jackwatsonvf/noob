import React, { Component } from 'react';


/*
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';
*/


const Card = ({id, icon, title, para1, para2, download, tags}) => {
	return(
		<div className="card">
			<img src={icon} alt="lit" />
			<h2>{title}</h2>
			<div>
				<h4>ELI5</h4>
				<p>{para1}</p>
			</div>
			<div>
				<h4>Useful links</h4>
				<ul>
					<li><a href={download} target="_blank" >download</a></li>
				</ul>
			</div>
			<h4>Used in the following projects:</h4>
			<ul>
				<li>{tags}</li>/>
			</ul>
		</div>
	)
}

export default Card

/*
{data.software[i].tags.map(projects,i => (
	<li>{projects}</li>
))}

<Accordion>
	<AccordionItem>
		<AccordionItemTitle>
            <h3>Simple title</h3>
        </AccordionItemTitle>
        <AccordionItemBody>
            <p>{props.para1}</p>
        </AccordionItemBody>
	</AccordionItem>
</Accordion>

*/