import React from 'react';

const DifferentList = ({characters}) => 
<div className="list">
    {characters.map(item => 
    <div 
    className={`list-row list-row-${item.id}`} 
    key={item.id}
    style={{background: `url(${item.backgroundImg})`, backgroundSize: 'cover' }}
    >
        <div className={`slide__text-wrapper slide--${item.id}__text-wrapper`}>
            <div className={`slide__letter slide--${item.id}__letter`}>
                {(item.name).charAt(0)}
                    <h2 className="heading">{item.name}></h2>
                    <img src={item.image} alt="zelda character" />
            </div>
        </div>
    </div>
    )}
</div>


export default DifferentList;
