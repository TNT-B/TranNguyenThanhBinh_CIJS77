import React from "react";
import GraphItem from "./graphitems";
import "./style.css";


function GraphChart(props) {
  const defaultValues = {
    1: { month: 1, amount: 0 },
    2: { month: 2, amount: 0 },
    3: { month: 3, amount: 0 },
    4: { month: 4, amount: 0 },
    5: { month: 5, amount: 0 },
    6: { month: 6, amount: 0 },
    7: { month: 7, amount: 0 },
    8: { month: 8, amount: 0 },
    9: { month: 9, amount: 0 },
    10: { month: 10, amount: 0 },
    11: { month: 11, amount: 0 },
    12: { month: 12, amount: 0 },
  };

  const totalExpenseMonthly = Object.values(
    props.dataExpense.reduce((totalValue, o) => {
      totalValue[o.month] = totalValue[o.month] || {
        amount: 0,
        month: o.month,
      };
      totalValue[o.month].amount += Number(o.amount);
      return totalValue;
    }, defaultValues)
  );


  return (
    <div className="graph-container">
      {totalExpenseMonthly.map((item, index) => {
        return (
          <GraphItem key={index} amount={item.amount} month={item.month} />
        );
      })}
    </div>
  );
}

export default GraphChart;
