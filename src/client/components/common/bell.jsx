import React from 'react';
import { MDBIcon } from 'mdbreact';

//Stylized Bell with a red notifcation indicator 
const Bell = () => {
  return ( 
  <div className="dropdown dropdown-style"> 
    <a href="/#" onClick="return false;" role="button" data-toggle="dropdown" id="dropdownMenu1" data-target="#"  aria-expanded="true">
      <MDBIcon icon="bell" className="bell-style"></MDBIcon>
      <span className="badge badge-danger">2</span>
    </a>
  </div> 
  );
}
 
export default Bell;