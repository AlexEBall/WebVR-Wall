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

	render() {
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
						<Link to={`/VR-World/${item.id}`} className="button button__VR">
							<img className="link-img" src="../images/VR_5-512.png" alt="VR Headset" />
						</Link>
					</div>
					)}
				</div>
			</div>
		);
	}
}