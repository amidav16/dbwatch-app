import React from 'react';
import PopupGraph from "./popupbutton";

//Task item component for task error
const TaskItem = ({ItemName}) => {
    return (  
    <li className="list-group-item list-group-item-warning">
        <div className="row task-height">
            <p className="col task-adjust">{ItemName}</p>    
            <PopupGraph></PopupGraph>
        </div>
    </li> 
);
}
 
export default TaskItem;