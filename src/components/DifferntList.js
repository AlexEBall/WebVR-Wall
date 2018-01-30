import React from 'react';


const DifferentList = ({characters}) => 
<div className="list">
    {characters.map(item => 
    <div 
        className={`list-row list-row-${item.id}`} 
        key={item.id}
        style={{backgroundImage: `url(${item.backgroundImg})`}}>
        {(item.name).charAt(0)}
        <h2>{item.name}</h2>
        <img src={item.image} alt="zelda character" />
    </div>
    )}
</div>


export default DifferentList;
