import React, { Component } from 'react';
// import API from '../../utils/API';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
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
		return (
			<div>
				<Nav />
				<div className="list">
					{characters.map(item => 
					<div 
						className={`list-row list-row-${item.id}`} 
						key={item.id}
						style={{ backgroundImage: `url(${item.backgroundImg})` }}>
						<div className="list-row list-row__text-wrapper">
							<div className="list-row__letter" style={{backgroundImage: `url(${item.backgroundImg})`}}>{(item.name).charAt(0)}</div>
							<div className="list-row__text">{item.name}</div>
						</div>
						<div className="profile-wrapper">
							<img className="profileImg" src={item.image} alt="zelda character" />
							<Link to={`/VR-World/${item.id}`} className="button button__VR">Experience My VR</Link>
						</div>
					</div>
					)}
				</div>
			</div>
		)
	}
}