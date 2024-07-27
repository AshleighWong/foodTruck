import React, { useState } from 'react';

function Foodcard(prop) {





    return (
        <>
            <div className="container">
                <img src={prop.src} className="picture"></img>
                <h3 className="names">{prop.name}</h3>
                <p className="names">{prop.cuisine}</p>
                <button className="menu-button">View Menu</button>
            </div>
        </>
    );
}

export default Foodcard