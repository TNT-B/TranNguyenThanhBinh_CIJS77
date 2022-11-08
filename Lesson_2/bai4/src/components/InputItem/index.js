import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./style.css";

function InputItem(props) {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleAddItem = () => {
    if (name && phoneNumber) {
      const newItem = {
        id: uuidv4(),
        name: name,
        numberPhone: phoneNumber,
        isDeleted: false,
      };

      props.handleChangeList(newItem);

      setName("");
      setPhoneNumber("");
    }
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <div className="header">
      <input
        className="mr-1 flex-1"
        type="text"
        placeholder="Tên"
        onChange={handleChangeName}
        value={name}
      />
      <input
        className="mr-1"
        type="text"
        placeholder="Điện thoại"
        onChange={handleChangePhoneNumber}
        value={phoneNumber}
      />
      <button onClick={handleAddItem}>THÊM</button>
    </div>
  );
}

export default InputItem;
