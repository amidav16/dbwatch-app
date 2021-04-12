import React from 'react';

const Card = ({title, description, boxname, id}) => {
    return ( 
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                {description}
                </p>
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id={id}/>
                    <label class="custom-control-label" for={id}>{boxname}</label>
                </div>
                    <div class="my-2"></div>
            </div>
        </div>
     );
}
 
export default Card;
