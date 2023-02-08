/**
* Js-Array-Objects-Carousel
* @author   Alessandro Montenero
* @description carosello basato su un array di oggetti
*/

/**
 * @const {array} images
 * @description array of objects
 * @returns {object} return object with imagePath, title and text
 */

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
]

let prevContainer = document.getElementById("carouselSide")

images.forEach((img, i) => prevContainer.innerHTML += '<div class="prevBox" id="'+ i +'"><img src="./' + img.image + '" class="prevImg" alt=""></div>')

prevBoxes = document.querySelectorAll(".prevBox")

let prevItems = document.getElementsByClassName("prevBox")

/* Selected item */

let carouselMain = document.getElementById("carouselMain")
let carouselSelectedItem = 0
carouselMain.innerHTML = '<img src="' + images[carouselSelectedItem].image + '" class="mainImg" alt=""><div class="mainDescr"><h4>' + images[carouselSelectedItem].title + '</h4><h5>' + images[carouselSelectedItem].text + '</h5></div>'
prevItems[0].classList.add("active")

let carouselInterval = setInterval(carouselTimer, 3000)
let carouselPause = false

document.getElementById("carouselArrowLeft").onclick = function(){
    prevItems[carouselSelectedItem].classList.remove("active")
    if (carouselSelectedItem == 0) {
        carouselSelectedItem = 4
    }
    else {
        carouselSelectedItem -= 1
    }
    prevItems[carouselSelectedItem].classList.add("active")
    for (let i = 0; i < prevBoxes.length && i != carouselSelectedItem; i++) {
        prevBoxes[i].classList.remove("active")
    }
    carouselMain.innerHTML = '<img src="' + images[carouselSelectedItem].image + '" class="mainImg" alt=""><div class="mainDescr"><h4>' + images[carouselSelectedItem].title + '</h4><h5>' + images[carouselSelectedItem].text + '</h5></div>'
    if (carouselPause == false) {
        clearInterval(carouselInterval)
        carouselInterval = setInterval(carouselTimer, 3000)
    }
}

document.getElementById("carouselArrowRight").onclick = function(){
    prevItems[carouselSelectedItem].classList.remove("active")
    if (carouselSelectedItem == 4) {
        carouselSelectedItem = 0
    }
    else {
        carouselSelectedItem += 1
    }
    prevItems[carouselSelectedItem].classList.add("active")
    for (let i = 0; i < prevBoxes.length && i != carouselSelectedItem; i++) {
        prevBoxes[i].classList.remove("active")
    }
    carouselMain.innerHTML = '<img src="' + images[carouselSelectedItem].image + '" class="mainImg" alt=""><div class="mainDescr"><h4>' + images[carouselSelectedItem].title + '</h4><h5>' + images[carouselSelectedItem].text + '</h5></div>'
    if (carouselPause == false) {
        clearInterval(carouselInterval)
        carouselInterval = setInterval(carouselTimer, 3000)
    }
}


document.getElementById("carouselPause").onclick = function(){
    carouselPause = true
    clearInterval(carouselInterval)
    document.getElementById("carouselPause").classList.add("d-none")
    document.getElementById("carouselPlay").classList.remove("d-none")
}

document.getElementById("carouselPlay").onclick = function(){
    carouselPause = false
    carouselInterval = setInterval(carouselTimer, 3000)
    document.getElementById("carouselPlay").classList.add("d-none")
    document.getElementById("carouselPause").classList.remove("d-none")
}

prevBoxes.forEach((box) => box.onclick = function(){
    prevItems[carouselSelectedItem].classList.remove("active")
    carouselSelectedItem = this.id
    carouselMain.innerHTML = '<img src="' + images[carouselSelectedItem].image + '" class="mainImg" alt=""><div class="mainDescr"><h4>' + images[carouselSelectedItem].title + '</h4><h5>' + images[carouselSelectedItem].text + '</h5></div>'
    prevItems[carouselSelectedItem].classList.add("active")
        for (let i = 0; i < prevBoxes.length && i != carouselSelectedItem; i++) {
            prevBoxes[i].classList.remove("active")
        }
        if (carouselPause == false) {
            clearInterval(carouselInterval)
            carouselInterval = setInterval(carouselTimer, 3000)
        }
    })

function carouselTimer() {
    if (carouselSelectedItem < (images.length - 1)){
        carouselSelectedItem ++
        prevItems[carouselSelectedItem].classList.add("active")
        prevItems[carouselSelectedItem - 1].classList.remove("active")
    }
    else {
        carouselSelectedItem = 0
        prevBoxes[0].classList.add("active")
        prevBoxes[4].classList.remove("active")
    }
    carouselMain.innerHTML = '<img src="' + images[carouselSelectedItem].image + '" class="mainImg" alt=""><div class="mainDescr"><h4>' + images[carouselSelectedItem].title + '</h4><h5>' + images[carouselSelectedItem].text + '</h5></div>'
}


