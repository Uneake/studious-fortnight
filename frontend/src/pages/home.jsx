export default function Home() {

  return (
    <>
      <div className="w-dvh h-dvh flex  flex-col  gap-6 items-center bg-red-300">
        <div className="rounded grid justify-items-center shadow-lg">
          <label for="combo-box" >Select Option:</label>
          <select id="combo-box" className="rounded outline-black outline-none w-40 "></select>
        </div>
        <div className="grid justify-items-center shadow-lg">
          <label for="search-field">Search:</label>
          <input type="text" id="search-field" className="rounded outline-black outline-none w-40 "></input>
        </div>
        <div className="rounded grid justify-items-center shadow-lg">
          <label for="budget-input" >Budget:</label>
          <input type="text" id="budget-input" className="w-40 rounded outline-black outline-none"></input>
        </div >
        <button className="w-40 h-fit rounded-lg bg-green-400 px-9 py-1 flex justify-center my-4 shadow-lg">Go</button>
      </div>
    </>
  )
}
