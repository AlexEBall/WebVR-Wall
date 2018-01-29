import React from 'react';

const DifferentList = ({characters}) => 
<div className="list">
    {characters.map(item => 
    <div className="list-row" key={item.id}>
        <h2 className="heading">Name: {item.name}</h2>
        <img src={item.image} alt="zelda character" />
    </div>
    )}
</div>

export default DifferentList;
