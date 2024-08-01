import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate} from "react-router-dom";
import { initializeData, universities,options } from "./material";

export default function Results() {
    const col = initializeData();
    const maha = universities;
    const op = options;
    const location = useLocation();
    const navigate = useNavigate();
    const handleGo = () => {
      navigate("/"); // Pass userChoice in state
    };
    const { userChoice, budget } = location.state || {};
    let parsedBudget = 1000000000.00000;
    if(budget){
        parsedBudget = parseFloat(budget.replace(/[^0-9.]/g, "")).toFixed(5); 
    }
    else if(budget<0)parsedBudget = parseFloat(parsedBudget).toFixed(5);
    const myData = [];
    console.log(userChoice.value);
    if(userChoice.value){
      for(let i=0; i < 7; i++){
        
          if(col.get(maha[i]).get(userChoice.value)[0]<=parsedBudget && col.get(maha[i]).get(userChoice.value)[0] !==-1){
            myData.push([maha[i],userChoice.value,col.get(maha[i]).get(userChoice.value)[0],col.get(maha[i]).get(userChoice.value)[1]])
            console.log(maha[i])
            console.log(col.get(maha[i]).get(userChoice.value))
          }
      }
    }
    else {
      for(let i=0; i < 7; i++){
        for(const key in op)
        {
          if(col.get(maha[i]).get(op[key])[0]<=parsedBudget && col.get(maha[i]).get(op[key])[0] !==-1)myData.push([maha[i],op[key],col.get(maha[i]).get(op[key])[0],col.get(maha[i]).get(op[key])[1]])
        }
      }
    }
  return (
    
    <div className="w-full min-h-screen flex flex-col gap-6 items-center bg-red-300 "  >
       <button 
       onClick={handleGo}
       className="fixed w-full h-10 rounded-lg bg-green-400 px-9 py-1 flex justify-center  shadow-lg"
       > Back</button>
      <br />
      <table className=" table-auto w-full ">
      <thead>
        <tr >
          <th className="px-6 py-3 border border-gray-200">มหาวิทยาลัย</th>
          <th className="px-6 py-3 border border-gray-200">คณะ</th>
          <th className="px-6 py-3 border border-gray-200">ค่าเทอมต่ำสุด</th>
          <th className="px-6 py-3 border border-gray-200">ค่าเทอมสูงสุด</th>
        </tr>
      </thead>
      <tbody>
      {myData.map((rowData, index) => (
                        <tr key={index}>
                            {rowData.map((cellData, cellIndex) => (
                                <td key={cellIndex} className="px-6 py-4 border border-gray-200">
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