import React, { Component } from 'react';
// import API from '../../utils/API';
import { Link } from 'react-router-dom';
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
			<div className="list">
			    {characters.map(item => 
			    <div 
			        className={`list-row list-row-${item.id}`} 
			        key={item.id}
			        style={{backgroundImage: `url(${item.backgroundImg})`}}>
			        <h3>{(item.name).charAt(0)}</h3>
			        <h2>{item.name}</h2>
			        <Link to={`/VR-World/${item.id}`} className="button button__VR">Experience My VR World</Link>
			        <img className="profileImg" src={item.image} alt="zelda character" />
			    </div>
			    )}
			</div>
		)
	}
}