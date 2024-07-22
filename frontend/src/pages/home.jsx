import React, {useState} from "react"
import Select from "react-select"
import { useNavigate, useLocation } from "react-router-dom";


export default function Home() {
  const options = [
    { value: "คณะหมูกรอบ", label: 'คณะหมูกรอบ' },
    { value: "option2", label: 'Option 2' },
    { value: "option3", label: 'Option 3' },
  ];
  const [userChoice, setUserChoice] = useState("");
  const [budget, setBudget] = useState("");
  const navigate = useNavigate();
  
  const handleGo = () => {
    navigate("/results", { state: { userChoice , budget} }); // Pass userChoice in state
  };

  return (
    <>
      <div className="w-dvh h-dvh flex  flex-col  gap-6 items-center bg-red-300">
        <div className="my-auto mx-auto">
          <div className="rounded grid  ">
          <label className="justify-self-center" >Select Option:</label>
          <Select id="combo-box" 
            options={options}  
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
            onChange={(choice) => setUserChoice(choice)}
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
