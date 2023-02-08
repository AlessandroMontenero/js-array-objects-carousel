/**
* Js-Array-Objects-Carousel
* @author   Alessandro Montenero
* @description carosello basato su un array di oggetti
*/

/* array of images */
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

/******************************+*
 * Carousel Preview Side  
*******************************+*/

/* Preview Container ID */
let prevContainer = document.getElementById("carouselSide")

/* Insert a PrevBox HTML El for each image in images array*/
images.forEach((img, i) => prevContainer.innerHTML += '<div class="prevBox" id="'+ i +'"><img src="./' + img.image + '" class="prevImg" alt=""></div>')

/* Insert all created PrevBox in a prevBoxes array */
let prevBoxes = document.querySelectorAll(".prevBox")

/* Function to select a PrevBox onclick */
prevBoxes.forEach((box) => box.onclick = function(){
    /* Remove active from last selected item */
    prevBoxes[carouselSelectedItem].classList.remove("active")
    /* Set this box as new selected item */
    carouselSelectedItem = this.id
    /* Set this box img as main */
    carouselMain.innerHTML = '<img src="' + images[carouselSelectedItem].image + '" class="mainImg" alt=""><div class="mainDescr"><h4>' + images[carouselSelectedItem].title + '</h4><h5>' + images[carouselSelectedItem].text + '</h5></div>'
    /* Set this box as active */
    prevBoxes[carouselSelectedItem].classList.add("active")
        removeOtherBoxesActive()
        clearAndRestartInterval()
    })


/******************************+*
 * Carousel Main Side 
*******************************+*/

let carouselMain = document.getElementById("carouselMain")  /* Carousel Main ID */

let carouselSelectedItem = 0            /* Carousel Auto Scroll index */

/* Insert the first image */
carouselMain.innerHTML = '<img src="' + images[carouselSelectedItem].image + '" class="mainImg" alt=""><div class="mainDescr"><h4>' + images[carouselSelectedItem].title + '</h4><h5>' + images[carouselSelectedItem].text + '</h5></div>'
prevBoxes[0].classList.add("active")

/* Start Carousel Timer and set Pause var false*/
let carouselInterval = setInterval(carouselTimer, 3000)
let carouselPause = false

/* Carousel Timer function */
function carouselTimer() {
    /* Increase index while smaller than number of boxes */
    if (carouselSelectedItem < (prevBoxes.length - 1)){
        carouselSelectedItem ++
        prevBoxes[carouselSelectedItem].classList.add("active")
        removeOtherBoxesActive()
    }
    /* Than restart index */
    else {
        carouselSelectedItem = 0
        prevBoxes[4].classList.remove("active")
        prevBoxes[carouselSelectedItem].classList.add("active")
    }
    carouselMain.innerHTML = '<img src="' + images[carouselSelectedItem].image + '" class="mainImg" alt=""><div class="mainDescr"><h4>' + images[carouselSelectedItem].title + '</h4><h5>' + images[carouselSelectedItem].text + '</h5></div>'
}


/* Remove class active from all boxes except the current selected one */
function removeOtherBoxesActive(){
    for (let i = 0; i < (prevBoxes.length - 1) && i != carouselSelectedItem; i++) {
        prevBoxes[i].classList.remove("active")
    }
} 

/* Pause and Restart Interval */
function clearAndRestartInterval() {
    if (carouselPause == false) {
        clearInterval(carouselInterval)
        carouselInterval = setInterval(carouselTimer, 3000)
    }
}

/******************************+*
 * Carousel Buttons 
*******************************+*/

/* Left Arrow onclick*/
document.getElementById("carouselArrowLeft").onclick = function(){
    /* deselect current box*/
    prevBoxes[carouselSelectedItem].classList.remove("active")
    /* condition for cycle from first to last*/
    if (carouselSelectedItem == 0) {
        carouselSelectedItem = 4
    }
    else {
        carouselSelectedItem -= 1
    }
    /* select last box */
    prevBoxes[carouselSelectedItem].classList.add("active")
    removeOtherBoxesActive()
    /* Insert selected box on main carousel  */
    carouselMain.innerHTML = '<img src="' + images[carouselSelectedItem].image + '" class="mainImg" alt=""><div class="mainDescr"><h4>' + images[carouselSelectedItem].title + '</h4><h5>' + images[carouselSelectedItem].text + '</h5></div>'
    /* Restart interval */
    clearAndRestartInterval()
}

/* Right Arrow */
document.getElementById("carouselArrowRight").onclick = function(){
    /* deselect current box*/
    prevBoxes[carouselSelectedItem].classList.remove("active")
        /* condition for cycle from last to first*/
    if (carouselSelectedItem == 4) {
        carouselSelectedItem = 0
    }
    else {
        carouselSelectedItem += 1
    }
    /* select next box */
    prevBoxes[carouselSelectedItem].classList.add("active")
    removeOtherBoxesActive()
    /* Insert selected box on main carousel  */
    carouselMain.innerHTML = '<img src="' + images[carouselSelectedItem].image + '" class="mainImg" alt=""><div class="mainDescr"><h4>' + images[carouselSelectedItem].title + '</h4><h5>' + images[carouselSelectedItem].text + '</h5></div>'
    /* Restart interval */
    clearAndRestartInterval()
}

/* Pause */
document.getElementById("carouselPause").onclick = function(){
    /* Set Pause var as True */
    carouselPause = true
    /* Clear interval */
    clearInterval(carouselInterval)

    /* Switch to Play Button */
    document.getElementById("carouselPause").classList.add("d-none")
    document.getElementById("carouselPlay").classList.remove("d-none")
}

/* Play */
document.getElementById("carouselPlay").onclick = function(){
    /* Set Pause var as False */
    carouselPause = false
    /* Clear interval */
    carouselInterval = setInterval(carouselTimer, 3000)

    /* Switch to Pause Button */
    document.getElementById("carouselPlay").classList.add("d-none")
    document.getElementById("carouselPause").classList.remove("d-none")
}





