import React from 'react';
import {Link} from 'react-router-dom';

const Navigation =()=>{
    return(
        <div className="navigaion-component">
            <ul className="navigation-component-ul">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/allCustomers'>All Customers</Link></li>
            </ul>
        </div>
    )
}

export default Navigation;