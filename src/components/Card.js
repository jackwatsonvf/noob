import React, { Component } from 'react';

import data from './../data.json';

import Popup from './Popup';


const ProjectTags = ({ ting }) => {
	return(
		ting.tags.map(projects => (
			<Tag 
				projects={projects}
			/>
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
			<ul className="taglist">
				<ProjectTags {...props} />
			</ul>
			<a href={props.homepage} target="_blank">
				<img src={props.icon} alt="lit" />
			</a>
			<h2>{props.title}</h2>
			<div>
				<h4>ELI5</h4>
				<p>{props.para1}</p>
			</div>
			<h4>Download</h4>
			<p>Click <a href={props.download} target="_blank">here to download</a></p>
			<Popup {...props} />
		</div>
	)
}

export default Card

/*

{props.setuppara1 == true ? <Popup /> : null}

renderModal() {
	if(this.props.setuppara1 = true)
		return <Popup {...props} />;
	return null;
}

{ renderModal() }

*/