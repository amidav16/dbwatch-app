import React, { Component } from 'react';
import {Link} from "react-router-dom";

//Display this if we route to an invalid url
class NotFound extends Component {

    render() { 
        return ( 
            <div className="notfound">
                <h1>Page not found: 404</h1>
                <Link to="/">
                    <p>Go back</p>
                </Link>
            </div>
         );
    }
}
 
export default NotFound;