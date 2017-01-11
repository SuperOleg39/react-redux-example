import React from 'react';
import { Link } from 'react-router';

const App = (props) => (
    <div>
        <div><Link to="/">Home</Link></div>
        <div><Link to="/form">Form</Link></div>
        <div><Link to="/123">fail</Link></div>
        
        <div>{props.children}</div>
    </div>
);

export default App;