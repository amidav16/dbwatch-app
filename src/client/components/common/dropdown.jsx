import React from 'react';

//Non functional Dropdown, display only for now
const DropDown = ({name, padding}) => {
    return (
    <div className="dropdown">
        <section className={padding}>
        
        <select class="browser-default custom-select ">
          <option selected="">{name}</option>
          <option value="1">Next Week</option>
          <option value="2">Previous Week</option>
          <option value="3">Back</option>
        </select>
      </section>

  </div> 
  );
}
 
export default DropDown;