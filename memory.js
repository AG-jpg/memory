'use strict'
document.addEventListener('DOMContentLoaded', () => {

//Card options
const cardArray = [
    {
        name: 'apple',
        img: 'img/apple.jpg'
    },
    {
        name: 'banana',
        img: 'img/banana.jpg'
    },
    {
        name: 'cherry',
        img: 'img/cherry.jpg'
    },
    {
        name: 'grapes',
        img: 'img/grapes.jpg'
    },
    {
        name: 'lemon',
        img: 'img/lemon.jpg'
    },
    {
        name: 'watermelon',
        img: 'img/watermelon.jpg'
    },
    {
        name: 'orange',
        img: 'img/orange.jpg'
    },
    {
        name: 'pineapple',
        img: 'img/pineapple.jpg'
    },
    {
        name: 'strawberry',
        img: 'img/strawberry.jpg'
    },
    {
        name: 'apple',
        img: 'img/apple.jpg'
    },
    {
        name: 'banana',
        img: 'img/banana.jpg'
    },
    {
        name: 'cherry',
        img: 'img/cherry.jpg'
    },
    {
        name: 'grapes',
        img: 'img/grapes.jpg'
    },
    {
        name: 'lemon',
        img: 'img/lemon.jpg'
    },
    {
        name: 'watermelon',
        img: 'img/watermelon.jpg'
    },
    {
        name: 'orange',
        img: 'img/orange.jpg'
    },
    {
        name: 'pineapple',
        img: 'img/pineapple.jpg'
    },
    {
        name: 'strawberry',
        img: 'img/strawberry.jpg'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector(".grid");
const resultDisplay = document.querySelector("#result")
var cardsChosen = []
var cardsChosenID = []
var cardsWon = []

//Create Board
function createBoard(){
    for (let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'img/blank.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

//Check for matches
function checkForMatch(){
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenID[0]
    const optionTwoId = cardsChosenID[1]

    if(cardsChosen[0] === cardsChosen[1]){
        cards[optionOneId].setAttribute('src', 'img/white.jpg')
        cards[optionTwoId].setAttribute('src', 'img/white.jpg')
        cardsWon.push(cardsChosen)
    }else{
        cards[optionOneId].setAttribute('src', 'img/blank.jpg')
        cards[optionTwoId].setAttribute('src', 'img/blank.jpg')
        console.log("Try Again")
    }
    cardsChosen = []
    cardsChosenID = []

    resultDisplay.textContent = cardsWon.length
    if(cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = "Congratulations! You Won"
    }
}

//Flip card
function flipCard(){
    var cardID = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardID].name)
    cardsChosenID.push(cardID)
    this.setAttribute('src', cardArray[cardID].img)
    if(cardsChosen.length === 2){
        setTimeout(checkForMatch, 500)
    }
}

createBoard()
})