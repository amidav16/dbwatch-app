import React, { Component } from 'react';
import TableBody from "./common/tablebody";

class TaskLog extends Component {

    //Renders a list of changes to the log
    render() { 
        return ( 
        <div className="container-fluid maincontent">
            <div className="row dashboard-title">Logs</div>
            <div className="row dashboard-title"><p>Task Log Overview</p> </div>
            <TableBody/>
        </div> 
        );
    }
}
 
export default TaskLog;