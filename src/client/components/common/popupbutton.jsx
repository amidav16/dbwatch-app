import React from "react";
import Popup from "reactjs-popup";
import TaskAssign from "../taskassign";

//Popupgraph will render the designated error and show a comparison
const PopupButton = () => {
  return (
    <Popup
      trigger={<button className="btn btn-danger px-3">
                  <i className="fas fa-exclamation"></i>
              </button>}
      modal
      closeOnDocumentClick
      position="right center"
      className="popup-box"
    >
      <div>
        <TaskAssign></TaskAssign>
      </div>
    </Popup>
  );
};

export default PopupButton;
