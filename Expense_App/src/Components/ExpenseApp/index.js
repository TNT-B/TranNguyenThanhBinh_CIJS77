import React, { useState } from "react";
import ExpenseList from "../ExpenseList";
import Add from "../AddNewExpense";
import "./style.css";
import GraphChart from "../Graph/graphchart";


function ExpenseApp() {
  const [dataExpense, setDataExpense] = useState([]);
  const [updatedExpense, setUpdatedExpense] = useState([]);
  const [updateScreen, setUpdateScreen] = useState(false);


  const [selectedYear, setSelectedYear] = useState("All");

  const addExpense = (item) => {
    console.log("item",item)
    if (selectedYear === item.year.toString() || selectedYear === "All") {
      let newDataExpense = [...dataExpense, item];
      let data = newDataExpense.filter((item) => {
        console.log(item.year.toString() === selectedYear)
        return item.year.toString() === selectedYear;
      })
      setUpdatedExpense(data);
      setDataExpense(newDataExpense);
    }

  };
  
  // const setData = (tmp) => {
  //   setDataExpense(tmp);
  // };
  


  const handleChange = (e) => {
    setSelectedYear(e.target.value);
    if (e.target.value === "All") {
      setUpdatedExpense(dataExpense);
    } else {
      setUpdatedExpense(
        dataExpense.filter((item) => {
          return item.year.toString() === e.target.value;
        })
      );
    }
    console.log("updatedExpense", updatedExpense)
  };


  

  return (
    <div className="box">
      <Add handleAddExpense={addExpense} />

      <div className="child-one">
        <div className="boss">
          <div style={{ color: "#ffffff", fontWeight: "bold" }}>
            Filter by year
          </div>
          <select
            style={{
              borderRadius: "4px",
              padding: "10px",
              fontWeight: "bold",
              border: "none",
            }}
            onChange={handleChange}
          >
            {/* <option style={{ fontWeight: "bold" }}>None</option> */}
            <option value="All" style={{ fontWeight: "bold" }}>
              All
            </option>
            <option value="2021" style={{ fontWeight: "bold" }}>
              2021
            </option>
            <option value="2022" style={{ fontWeight: "bold" }}>
              2022
            </option>
            <option value="2023" style={{ fontWeight: "bold" }}>
              2023
            </option>
            <option value="2024" style={{ fontWeight: "bold" }}>
              2024
            </option>
          </select>
        </div>
            <GraphChart dataExpense={updatedExpense} />

            <ExpenseList dataExpense={updatedExpense} />
      </div>
    </div>
  );
}

export default ExpenseApp;
