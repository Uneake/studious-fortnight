export default function Home() {

  return (
    <>
      <div className="w-full flex flex-col gap-3">
        <div className="w-40">
          <label for="combo-box" className="outline-red-950">Select Option:</label>
          <select id="combo-box"></select>
        </div>
        <div className="w-40">
          <label for="search-field" >Search:</label>
          <input type="text" id="search-field" className="outline-red-950 outline-none"></input>
        </div>
        <div className="w-40">
          <label for="budget-input">Budget:</label>
          <input type="text" id="budget-input"></input>
        </div >
        <button className="w-fit bg-green-400">Go</button>
      </div>
    </>
  )
}
