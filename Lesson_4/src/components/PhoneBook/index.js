import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import InputItem from "../InputItem";
import PhoneItem from "../PhoneItem";
import "./style.css";

function PhoneBook(props) {
  const [phoneList, setPhoneList] = useState([
    {
      id: uuidv4(),
      name: "Alice",
      numberPhone: "(816)-403-5456",
      isDeleted: false,
    },
    {
      id: uuidv4(),
      name: "Bob",
      numberPhone: "(572)-566-2397",
      isDeleted: false,
    },
    {
      id: uuidv4(),
      name: "Cris",
      numberPhone: "(864)-309-4841",
      isDeleted: false,
    },
    {
      id: uuidv4(),
      name: "Daniel",
      numberPhone: "(572)-566-5456",
      isDeleted: false,
    },
  ]);

  const [keyword, setKeyWord] = useState("");

  const handleChangeKeyword = (e) => {
    setKeyWord(e.target.value);
  };

  const deleteDuplicate = () => {
    const newList = phoneList.filter((item) => {
      const found = phoneList.find(
        (element) => element.numberPhone === item.numberPhone
      );

      return found === item;
    });

    setPhoneList(newList);
  };

  const handleChangeList = (item) => {
    setPhoneList([...phoneList, item]);
  };

  const handleToggleDelete = (item) => {
    const newList = phoneList.map((el) => {
      if (el.id === item.id) {
        return {
          ...el,
          isDeleted: !el.isDeleted,
        };
      }
      return el;
    });
    setPhoneList(newList);
  };

  return (
    <div className="phone-book-container">
      <InputItem handleChangeList={handleChangeList} />
      <div className="search-bar mt-1">
        <input
          className="mr-1 flex-1"
          type="text"
          placeholder="Tìm kiếm"
          value={keyword}
          onChange={handleChangeKeyword}
        />
        <button className="mr-1">TÌM KIẾM</button>
        <button onClick={deleteDuplicate}>XÓA TRÙNG</button>
      </div>
      <div className="phone-list mt-1">
        {phoneList
          // filter item by keyword
          .filter((item) => {
            return (
              item.name.toLowerCase().includes(keyword.toLowerCase()) ||
              item.numberPhone.toLowerCase().includes(keyword.toLowerCase())
            );
          })
          .map((item) => {
            return (
              <PhoneItem
                key={item.id}
                name={item.name}
                numberPhone={item.numberPhone}
                isDeleted={item.isDeleted}
                onDelete={() => handleToggleDelete(item)}
              />
            );
          })}
      </div>
    </div>
  );
}

export default PhoneBook;
