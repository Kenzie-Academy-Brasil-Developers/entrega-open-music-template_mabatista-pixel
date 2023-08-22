/* Desenvolva sua lógica aqui ... */
import { products } from './productsData.js';
import { categories } from './productsData.js';

function createCard(product) {

  const card = document.createElement("li");
  card.classList.add("card__item");
  const cardImage = document.createElement("img");
  cardImage.classList.add("card__image");
  cardImage.src = product.img;
  cardImage.alt = product.name;

  const cardText = document.createElement("p");
  cardText.classList.add("card__description");
  cardText.innerHTML = `${product.band} ${product.year}`

  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card__title");
  cardTitle.innerHTML = product.title;

  const cardSpan = document.createElement("span");
  cardSpan.classList.add("card__span");

  const cardPrice = document.createElement("p");
  cardPrice.classList.add("card__price");
  cardPrice.innerHTML = `R$ ${product.price.toFixed(2)} `;

  const cardButton = document.createElement("button");
  cardButton.classList.add("card__button");
  cardButton.innerHTML = "Comprar";
  cardSpan.appendChild(cardPrice);
  cardSpan.appendChild(cardButton);
  card.appendChild(cardImage);
  card.appendChild(cardText);
  card.appendChild(cardTitle);
  card.appendChild(cardSpan);

  return card;
}

function renderButtons(buttonsArray) {

  const parentElement = document.querySelector(".filter__list")

  buttonsArray.forEach((element) => {

    const li = document.createElement("li")
    li.classList.add("filter__item")

    const button = document.createElement("button")
    button.classList.add("filter__button")
    button.innerHTML = element;

    li.appendChild(button)
    parentElement.appendChild(li)

  })
}

function renderCards(productsArray) {
  const parentElement = document.querySelector(".cards__container")

  productsArray.forEach((obj) => {
    const card = createCard(obj)

    parentElement.appendChild(card)
  })
}

function addEventfilterButtons(productsArray, categoryArray){
  
  const filterButton = document.querySelectorAll(".filter__button")
  const parentElement = document.querySelector(".cards__container")
  const inputHandler = document.querySelector(".slider")
  const priceHolder = document.querySelector(".input__range")
  let filteredArray = productsArray;
  let categoryIndex = 0;
  let inputValue = inputHandler.value;
  priceHolder.innerHTML = `R$${inputValue}` ;

  filterButton.forEach((element) => {
    element.addEventListener('click', () => {
      const index = categoryArray.indexOf(element.innerText);
      categoryIndex = index;

      const filteredProduct = productsArray.filter((product) => product.category === index)
      parentElement.innerHTML = "";
      
      if(index === 0){
        filteredArray = productsArray.filter((product) => product.price <= inputValue )
        // renderCards(productsArray)
      }else {
        filteredArray = productsArray.filter((product) => product.category === categoryIndex && product.price <= inputValue )
      }
      // renderCards(filteredProduct)
      renderCards(filteredArray)
      
    })
  })
  
  inputHandler.addEventListener("input", () => {
    priceHolder.innerHTML = `Até R$${inputHandler.value}`;
    inputValue = inputHandler.value;
    const filteredValue = productsArray.filter((element) => element.price <= inputHandler.value )

    if(categoryIndex === 0){
      filteredArray = productsArray.filter((product) => product.price <= inputValue )
    }else {
      filteredArray = productsArray.filter((product) => product.category === categoryIndex && product.price <= inputValue )
    }
    
    parentElement.innerHTML = "";
    renderCards(filteredArray)
  })
}

renderCards(products)
renderButtons(categories)
addEventfilterButtons(products, categories)



