import React from 'react';
import TaskItem from "./common/taskitem";
import Title from "./common/title";

//Task Errors list, we can fetch tasks items from a server using REST API later
const TaskError = () => {
    return ( 
    <div className="smallchart-box">
        <Title iconStyle="fas fa-exclamation-triangle pr-2" Name="Error Log"></Title>
        <ul className="list-group list-flow">
            <TaskItem ItemName="Disk Storage Warning: 85% Thursday"></TaskItem>
            <TaskItem ItemName="Disk Storage Warning: 83% Friday"></TaskItem>
        </ul>
    </div> );
}
 
export default TaskError;