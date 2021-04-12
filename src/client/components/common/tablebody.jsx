import React from 'react';

const Table = () => {
    return ( 
        <div>
            <div className="resolved-tasks">
            <table className="table ">
            <thead className="task-log-header">
            <tr>
            <th scope="col">#</th>
            <th scope="col">Task</th>
            <th scope="col">Date</th>
            <th scope="col">Assigned to</th>
            </tr>
            </thead>
                <tbody>
                <tr>
                <th scope="row">1216178</th>
                <td>Database 1217812 High Capacity - Resolved</td>
                <td>06-Apr-21</td>
                <td>Arnstein Larsen</td>
                </tr>
                <tr>
                <th scope="row">1216179</th>
                <td>Database 1217823 Store - Expanded</td>
                <td>06-Apr-21</td>
                <td>Jakob Norland</td>
                </tr>
                <tr>
                <th scope="row">1216180</th>
                <td>Database 1271831 Disk Full - Deleted</td>
                <td>07-Apr-21</td>
                <td>Oliver Lykken</td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
     );
}
 
export default Table;
