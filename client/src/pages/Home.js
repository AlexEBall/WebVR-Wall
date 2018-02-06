import React, { Component } from 'react';
// import API from '../../utils/API';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import NavMobile from '../components/NavMobile'
import characters from './characters.json';

export default class Home extends Component {
	// should be an array once we load from API
	state = {
		characters: characters,
	}

	// componentDidMount = () => {
	// 	this.loadProfiles();
	// }

	// loadProfiles = () => {
	// 	API.getProfiles()
	// 		.then(res =>
	// 			this.setState({ characters: res.data })
	// 		).catch(err => console.log(err));
	// }

	// enterVRHandler = () => {

	// }

	render() {
		let width = window.innerWidth;
		if (width <= 425) {
			return (
			<div>
				<NavMobile />
				<div className="list">
					{characters.map(item => 
					<div 
						className={`list-row list-row-${item.id}`} 
						key={item.id}
						style={{ backgroundImage: `url(${item.image})` }}>
						<div className="list-row list-row__text-wrapper">
							<div className="list-row__letter" style={{backgroundImage: `url(${item.backgroundImg})`}}>{(item.name)}</div>
						</div>
						<Link to={`/VR-World/${item.id}`} className="button button__VR">VR</Link>
					</div>
					)}
				</div>
			</div>
			);
		} else {
			return (
			<div>
				<Nav />
				<div className="list">
					{characters.map(item => 
					<div 
						className={`list-row list-row-${item.id}`} 
						key={item.id}
						style={{ backgroundImage: `url(${item.image})` }}>
						<div className="list-row list-row__text-wrapper">
							<div className="list-row__letter" style={{backgroundImage: `url(${item.backgroundImg})`}}>{(item.name)}</div>
						</div>
						<Link to={`/VR-World/${item.id}`} className="button button__VR">VR</Link>
					</div>
					)}
				</div>
			</div>
			)
		}
	}
}