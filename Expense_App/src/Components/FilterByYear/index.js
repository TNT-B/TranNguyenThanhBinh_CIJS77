// import "./style.css";
// import React, { useState } from "react";
// import ExpenseItem from "../ExpenseItem";
// let thay;
// const FilterYear = (props) => {
//   const [change, setChange] = useState(false);
//   const handleChange = (e) => {
//     setChange(true);
//     if (e.target.value === "All") {
//     } else {
//       //   setChange(e.target.value);
//       //   console.log(change);
//       filterExpense(e.target.value);
//     }
//   };
//   const filterExpense = (filterYear) => {
//     const updatedExpense = props.dataExpense.filter((item) => {
//       return item.year.toString(10) === filterYear;
//     });
//     console.log(props.dataExpense);
//     console.log(updatedExpense);
//     // thay = updatedExpense;
//     // props.setData(updatedExpense);

//     updatedExpense.map((item, index) => {
//       return (
//         <ExpenseItem
//           key={index}
//           year={item.year}
//           month={item.month}
//           day={item.day}
//           name={item.name}
//           amount={item.amount}
//         />
//       );
//     });
//   };

//   return (
//     <div className="boss">
//       <div style={{ color: "#ffffff", fontWeight: "bold" }}>Filter by year</div>
//       <select
//         style={{
//           borderRadius: "4px",
//           padding: "10px",
//           fontWeight: "bold",
//           border: "none",
//         }}
//         onChange={handleChange}
//       >
//         <option style={{ fontWeight: "bold" }}>All</option>
//         <option style={{ fontWeight: "bold" }}>2021</option>
//         <option style={{ fontWeight: "bold" }}>2022</option>
//         <option style={{ fontWeight: "bold" }}>2023</option>
//         <option style={{ fontWeight: "bold" }}>2024</option>
//       </select>
//     </div>
//   );
// };
// export default FilterYear;
