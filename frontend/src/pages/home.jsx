export default function Home() {

  return (
    <>
      <div className="w-full">
        <label for="combo-box">Select Option:</label>
        <select id="combo-box"></select>
        <br />
        <label for="search-field">Search:</label>
        <input type="text" id="search-field"></input>
        <br />
        <label for="budget-input">Budget:</label>
        <input type="text" id="budget-input"></input>
        <br />
        <button id="go-button">Go</button>
      </div>
    </>
  )
}
