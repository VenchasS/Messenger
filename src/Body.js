import React from 'react';
import Navbar from './Navbar.js';
import Content from './Content.js';
const Body =(props) => {
    return(
        <div className='Body'>
            <Navbar />
            <Content />
        </div>
    )
};

export default Body;
