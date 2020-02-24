// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

let topics = document.querySelector(".topics");

let newTabs = (param) => {

let tabDiv = document.createElement("div");
tabDiv.classList.add("tab");
tabDiv.textContent = param;

return tabDiv;

}

axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then((response) => {
    console.log(response.data.topics);
    response.data.topics.forEach(x => {
        let tabItem = newTabs(x);
        topics.appendChild(tabItem);
    })
  })
  .catch((error) => {
    console.log(error);
  })
