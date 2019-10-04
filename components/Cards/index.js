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
let card = document.querySelector(".cards-container")
axios
    .get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        console.log(response.data.articles)
        const newData = response.data.articles;
        const myData = Object.values(newData)
        myData.forEach(data =>{
            console.log(myData)

            card.appendChild(myArticle(data))
        })
    })
    .catch(error =>{
        console.log("Error", error)
    })

    function myArticle(data){
        const card = document.createElement("div")
        card.classList.add("card")

        const headline = document.createElement("div")
        headline.classList.add("headline")
        headline.textContent = `${data.headline}`;
        card.appendChild(headline)

        const author = document.createElement("div")
        author.classList.add("author")
        headline.appendChild(author)
        
        const placeHolder = document.createElement("div")
        placeHolder.classList.add("img-container")
        author.appendChild(placeHolder)
        
        const pic = document.createElement("img")
        pic.src = data.authorPhoto;
        author.appendChild(pic)

        const name = document.createElement("span")
        name.textContent = `By ${data.authorName}`;
        author.appendChild(name)

        card.appendChild(author)

        return card;
    }