// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component
const headerContainer = document.querySelector(".header-container")
function Header() {
    const header = document.createElement("div")
    header.classList.add("header")

    const headerInfo = document.createElement("div")
    headerInfo.classList.add("header-info")
    
    const date = document.createElement("span")
    date.classList.add("date")
    date.appendChild("headerInfo")
    date.textContent = date;

    const title = document.createElement("h1")
    title.appendChild("headerInfo")
    title.textContent = "Lambda Times"

    const temp = document.createElement("span")
    temp.classList.add("temp")
    temp.appendChild("headerInfo")
    temp.textContent = temp;

    header.appendChild(headerInfo)

    return header
}
