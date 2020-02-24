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

function Header() {

    let headerEntry = document.querySelector(".header-container")
    
    let headerDiv = document.createElement("div");
    headerDiv.classList.add("header");
    
    headerEntry.appendChild(headerDiv);
    
    let dateSpan = document.createElement("span");
    dateSpan.classList.add("date");
    
    headerDiv.appendChild(dateSpan);
    
    let h1Div = document.createElement("h1");
    h1Div.textContent = "Lambda Times";
    
    headerDiv.appendChild(h1Div);
    
    let tempClass = document.createElement("span");
    tempClass.classList.add("temp");
    tempClass.textContent = "98°"
    
    headerDiv.appendChild(tempClass);
    
    return headerDiv;
    
    }
    
    Header();