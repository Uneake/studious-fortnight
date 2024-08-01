import React, {useState} from "react"
import Select from "react-select"
import { useNavigate, useLocation } from "react-router-dom";
import {initializeData, options} from "./material";


export default function Home() {
  const col = initializeData();
  const op = options.map(option => ({ value: option, label: option }));
  const [userChoice, setUserChoice] = useState("");
  const [budget, setBudget] = useState("");
  const navigate = useNavigate();
  
  const handleGo = () => {
    navigate("/results", { state: { userChoice , budget} }); // Pass userChoice in state
  };
  
  const changeChoice = (c) =>{
    if(c!=null)setUserChoice(c);
    else setUserChoice("");
  };
  console.log(col.get("มหาลัยมหิดล").get("คณะจิตวิทยา")[0]);
 
  return (
    <>
      <div className="w-dvh h-dvh flex  flex-col  gap-6 items-center bg-red-300">
        <div className="my-auto mx-auto">
          <div className="rounded grid  ">
          <label className="justify-self-center" >Select Option:</label>
          <Select id="combo-box" 
            options={op}  
            className="rounded outline-black outline-none w-64 h-10 shadow-lg"
            styles={{
              control: (base) => ({
                ...base,
                height: '2.5rem',
                minHeight: '2.5rem',
                borderRadius: '0.5rem',
                outline: 'none',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
              }),
            }}
            isSearchable={true}
            isClearable={true}
            onChange={(choice) => changeChoice(choice)}
          >
          </Select>
          </div>
        <div className="rounded grid ">
          <label className="justify-self-center">Budget:</label>
          <input 
            type="text" 
            id="budget-input" 
            className="w-64 h-10 rounded outline-black outline-none shadow-lg"
            onChange = {(e) => setBudget(e.target.value)}
            >
            </input>
        </div >
              <button 
              className="w-64 h-10 rounded-lg bg-green-400 px-9 py-1 flex justify-center my-4 shadow-lg"
              onClick={handleGo}
              >Go</button>
        </div>
      </div>
    </>
    
  )
}
