import React from 'react';

//Title to save some spacing (can be built further)
const Title = ({iconStyle, Name}) => {
    return ( 
      <div>
        <p className="chart-title"><i className={iconStyle}></i>{Name}</p>
        <div className="gray-line"></div>
      </div>

 );
}
 
export default Title;