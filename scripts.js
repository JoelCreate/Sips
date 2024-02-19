import {menu} from "/menu-items.js"

const favoritesBtn = document.getElementById("favorites-btn")
const coffeeBtn = document.getElementById("coffee-btn")
const donutsBtn = document.getElementById("donuts-btn")
const categoryBtns = document.querySelectorAll(".category-btns")
const menuTitle = document.getElementById("menu-title")
const menuCard = document.getElementById("menu-cards")
const addBalanceContainer = document.getElementById("add-balance-container")
const reloadBtn = document.getElementById("reload-btn")
const currentCardBalance = document.getElementById("current-card-balance")
const getCurrentBalance = document.getElementById("get-balance")
const closeModal = document.getElementById("close-modal")


let cardBalance =  "$19.88"

currentCardBalance.innerHTML = cardBalance

document.getElementById("get-balance").innerHTML = cardBalance

reloadBtn.addEventListener("click", function() {
    addBalanceContainer.style.display = "block"
})

closeModal.addEventListener("click", function () {
    addBalanceContainer.style.display = "none"
})

window.addEventListener("click", function(event) {
    if (event.target == addBalanceContainer) {
      addBalanceContainer.style.display = "none"
    }
  })


categoryBtns.forEach((button) => {
    button.addEventListener("click", function(){
        button.classList.toggle("btn-active")

        categoryBtns.forEach((notActiveBtn) => {
            if(notActiveBtn !== button && notActiveBtn.classList.contains("btn-active")) {
                notActiveBtn.classList.remove("btn-active")
            }
        })
    })
})


menuTitle.innerHTML = "Menu"

favoritesBtn.addEventListener("click", function(){
    menuTitle.innerHTML = "Your Favorites"
})
coffeeBtn.addEventListener("click", function(){
    menuTitle.innerHTML = "Coffee"    
    includesCoffee() 
    addFavorite()
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
    addFavorite()
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
function addFavorite() {
    const favHeart = document.querySelectorAll(".favorite")

    favHeart.forEach((heart) => {
    heart.addEventListener("click", function(){
            heart.classList.toggle("favoriteselected")
    })    
    })
}

addFavorite()
