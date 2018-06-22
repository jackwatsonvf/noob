import React, { Component } from 'react';

import data from './../data.json';

/*
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';
*/

const ProjectTags = ({ ting }) => {
	return(
		ting.tags.map(projects => (
			<Tag projects={projects} />
		))
	)
}

class Tag extends Component {
	render() {
		return <li className="tag">{this.props.projects}</li>
	}
}

const Card = props => {

	return(
		<div className="card">
			<img src={props.icon} alt="lit" />
			<h2>{props.title}</h2>
			<div>
				<h4>ELI5</h4>
				<p>{props.para1}</p>
			</div>
			<div>
				<h4>Useful links</h4>
				<ul>
					<li><a href={props.download} target="_blank" >download</a></li>
				</ul>
			</div>
			<h4>Used in the following projects:</h4>
			<ul>
				<ProjectTags {...props} />
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