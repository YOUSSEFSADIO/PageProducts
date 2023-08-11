let mainImage = document.querySelector('.home-products');
let myContainer = document.querySelector('.container');
let myTitle = document.querySelector('h2');

// Product Zero 
let productZero = document.querySelector('.zero');

productZero.onclick = function () {
    mainImage.src = productZero.src;
    myContainer.style = 'background-color: #c79b53';
}

// Products One
let productOne = document.querySelector('.p-one');

productOne.onclick = function () {
    mainImage.src = productOne.src;
    myContainer.style = 'background-color: #e47ec8';
    myTitle.style = 'color: #eee;';
}

// Product Two
let productTwo = document.querySelector('.two');

productTwo.onclick = function () {
    mainImage.src = productTwo.src;
    myContainer.style = 'background-color: #1e1e1e';
    myTitle.style = 'color: #eee;';
}

// Product Three
let productThree = document.querySelector('.three');

productThree.onclick = function () {
    mainImage.src = productThree.src;
    myContainer.style = 'background-color: #a3a3a3';
    myTitle.style = 'color: #eee;';
}

// Product Four
let productFour = document.querySelector('.four');

productFour.onclick = function () {
    mainImage.src = productFour.src;
    myContainer.style = 'background-color: #c82525';
    myTitle.style = 'color: #eee;';
}