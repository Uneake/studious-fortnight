import React from "react";
import { useLocation } from "react-router-dom";

export default function Results() {
    const location = useLocation();
    const { userChoice, budget } = location.state || {};
    let parsedBudget = 0;
    if(budget){
        parsedBudget = parseFloat(budget.replace(/[^0-9.]/g, "")).toFixed(5); 
    }
    else parsedBudget = parseFloat(parsedBudget).toFixed(5)
  return (
    <div>
      You selected: {userChoice.value} ({userChoice.label})
      <br />
      Budget: {parsedBudget}
    </div>
  );
}