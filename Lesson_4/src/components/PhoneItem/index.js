import React from "react";
import "./style.css";

function PhoneItem(props) {
  return (
    <div
      onClick={props.onDelete}
      className={`phone-item ${props.isDeleted ? "bg-red" : ""}`}
    >
      <span className="username flex-1">{props.name}</span>
      <span className="phone-number">{props.numberPhone}</span>
    </div>
  );
}

export default PhoneItem;
