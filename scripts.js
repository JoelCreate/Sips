import {menu} from "/menu-items.js"

const favoritesBtn = document.getElementById("favorites-btn")
const coffeeBtn = document.getElementById("coffee-btn")
const donutsBtn = document.getElementById("donuts-btn")
const menuTitle = document.getElementById("menu-title")
const menuCard = document.getElementById("menu-cards")


menuTitle.innerHTML = "Menu"

favoritesBtn.addEventListener("click", function(){
    menuTitle.innerHTML = "Your Favorites"
})
coffeeBtn.addEventListener("click", function(){
    menuTitle.innerHTML = "Coffee"
    includesCoffee() 
})

function includesCoffee() {
    const coffeeCards = menu.map(item => {
        if(item.itemType.includes("coffee")) {
            return `
            <div class="item-card">
                <div id="item-fav"><span class="material-symbols-outlined favorite">favorite</span></div>
                <div id="item-image"><img src="images/${item.itemImage}" alt="${item.imageAlt}"></div>
                <div id="item-name" class="item-card-text">${item.itemName}</div>
                <div id="item-price" class="item-card-text">${item.itemPrice}</div>
                <div id="add-item" class="item-card-text"><span class="material-symbols-outlined">add_circle</span></div>
            </div>
            `
        }
    }).join('')

    menuCard.innerHTML = coffeeCards
}


donutsBtn.addEventListener("click", function(){
    menuTitle.innerHTML = "Donuts"
    includesDount()
})

function includesDount() {
    const donutCards = menu.map(item => {
        if(item.itemType.includes("donut")) {
            return `
            <div class="item-card">
                <div id="item-fav"><span class="material-symbols-outlined favorite">favorite</span></div>
                <div id="item-image"><img src="images/${item.itemImage}" alt="${item.imageAlt}"></div>
                <div id="item-name" class="item-card-text">${item.itemName}</div>
                <div id="item-price" class="item-card-text">${item.itemPrice}</div>
                <div id="add-item" class="item-card-text"><span class="material-symbols-outlined">add_circle</span></div>
            </div>
            `
        }
    }).join('')

    menuCard.innerHTML = donutCards
}

const menuItemHtml = menu.map(item => {
    return `
    <div class="item-card">
        <div id="item-fav"><span class="material-symbols-outlined favorite">favorite</span></div>
        <div id="item-image"><img src="images/${item.itemImage}" alt="${item.imageAlt}"></div>
        <div id="item-name" class="item-card-text">${item.itemName}</div>
        <div id="item-price" class="item-card-text">${item.itemPrice}</div>
        <div id="add-item" class="item-card-text"><span class="material-symbols-outlined">add_circle</span></div>
    </div>
    `
}).join('')

menuCard.innerHTML = menuItemHtml

//Favorite heart clicked on item-card
const favHeart = document.querySelectorAll(".favorite")

favHeart.forEach((heart) => {
   heart.addEventListener("click", function(){
        heart.classList.toggle("favoriteselected")
   })    
})
