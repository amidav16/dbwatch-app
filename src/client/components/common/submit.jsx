import React from 'react';
import Dropdown from "./dropdown";

const Submit = () => {
    return ( 
        <form>
            <div className="submit-box">
                <Dropdown name="Assign to" padding="m-0 mb-2 mt-4"></Dropdown>
                <textarea className="form-control" id="form4Example3" rows="4"></textarea>
                <label>Task Description</label>
            </div>

            <div className="form-check d-flex justify-content-center mb-4"></div>

            <button type="submit" className="btn btn-primary btn-block mb-4">Resolve</button>
        </form>
     );
}
 
export default Submit;