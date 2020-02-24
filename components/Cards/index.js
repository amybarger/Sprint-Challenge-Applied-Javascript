// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

let cardsExport = document.querySelector(".cards-container");

let articleComponent = (param) => {

    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card");

    let headlineDiv = document.createElement("div");
    headlineDiv.classList.add("headline");
    headlineDiv.textContent = param.headline;

    cardDiv.appendChild(headlineDiv);

    let authorDiv = document.createElement("div");
    authorDiv.classList.add("author");

    cardDiv.appendChild(authorDiv);

    let imgClass = document.createElement("div");
    imgClass.classList.add("img-container");

    let articleImage = document.createElement('img');
    articleImage.src = param.authorPhoto;

    authorDiv.appendChild(imgClass);
    imgClass.appendChild(articleImage);

    let byline = document.createElement("span");
    byline.textContent = `By ${param.authorName}`;

    authorDiv.appendChild(byline);

    return cardDiv;

}

// AXIOS

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    console.log(response.data);

    response.data.articles.javascript.forEach(x => {
        let thisArticle = articleComponent(x);
        cardsExport.appendChild(thisArticle);
    })
    
    response.data.articles.bootstrap.forEach(x => {
        let thisArticle = articleComponent(x);
        cardsExport.appendChild(thisArticle);
    })
    
    response.data.articles.technology.forEach(x => {
        let thisArticle = articleComponent(x);
        cardsExport.appendChild(thisArticle);
    })

    response.data.articles.jquery.forEach(x => {
        let thisArticle = articleComponent(x);
        cardsExport.appendChild(thisArticle);
    })

    response.data.articles.node.forEach(x => {
        let thisArticle = articleComponent(x);
        cardsExport.appendChild(thisArticle);
    })

  })
  .catch((error) => {
    console.log(error);
  })