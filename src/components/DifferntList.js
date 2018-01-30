import React from 'react';


const DifferentList = ({characters}) => 
<div className="list">
    {characters.map(item => 
    <div 
        className={`list-row list-row-${item.id}`} 
        key={item.id}
        style={{backgroundImage: `url(${item.backgroundImg})`}}>
        <h3>{(item.name).charAt(0)}</h3>
        <h2>{item.name}</h2>
        <button className="button button__VR">Experience My VR World</button>
        <img className="profileImg" src={item.image} alt="zelda character" />
    </div>
    )}
</div>


export default DifferentList;
