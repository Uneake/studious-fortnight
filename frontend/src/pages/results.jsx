import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate} from "react-router-dom";

export default function Results() {
    const location = useLocation();
    const navigate = useNavigate();
    const handleGo = () => {
      navigate("/"); // Pass userChoice in state
    };
    const { userChoice, budget } = location.state || {};
    let parsedBudget = 0;
    if(budget){
        parsedBudget = parseFloat(budget.replace(/[^0-9.]/g, "")).toFixed(5); 
    }
    else parsedBudget = parseFloat(parsedBudget).toFixed(5)
    const myData = [];
  
    myData.push([userChoice.value,parsedBudget,1]);
  return (
    
    <div className="w-dvh h-dvh  gap-6 items-center bg-red-300 "  >
       <button 
       onClick={handleGo}
       className="w-full h-10 rounded-lg bg-green-400 px-9 py-1 flex justify-center  shadow-lg"
       > Back</button>
      You selected: {userChoice.value} ({userChoice.label})
      <br />
      Budget: {parsedBudget}
      
      <table className="table-auto w-full ">
      <thead>
        <tr >
          <th className="px-6 py-3 border border-gray-200">Column 1</th>
          <th className="px-6 py-3 border border-gray-200">Column 2</th>
          <th className="px-6 py-3 border border-gray-200">Column 3</th>
        </tr>
      </thead>
      <tbody>
        {myData.map((rowData) => (
          <tr key={rowData[0]}> {/* Use the first element for unique key */}
            {rowData.map((cellData) => (
              <td key={cellData} className="px-6 py-4 border border-gray-200">
                {cellData}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    
  );
}