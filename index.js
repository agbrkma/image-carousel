let currentIndex = 0;

const middleImg = document.getElementById('single-img')

const nextBtn = document.getElementById('right-btn')
const previousBtn = document.getElementById('left-btn')

const circleDiv = document.getElementById('circleDiv')


const imageSources = ['./images/image1.jpg', './images/image2.jpg', './images/image3.jpg']

let circles = []



function makeCircles(){
    for(let i = 0; i<imageSources.length; i++){
    const circle = document.createElement('p')
    circle.innerHTML = '&#9675'
    circles.push(circle)
    circleDiv.append(circle)
    }
}


function previousImage() {
    middleImg.innerHTML = '';
    if(currentIndex === 0){
        currentIndex = 3
    }
    currentIndex = (currentIndex - 1) % imageSources.length
    const img = new Image();
    img.src = imageSources[currentIndex]
    middleImg.append(img)
    changeCircle(currentIndex)

}

function nextImage() {
    middleImg.innerHTML = ''
    currentIndex = (currentIndex + 1) % imageSources.length
    const img = new Image();
    img.src = imageSources[currentIndex]
    middleImg.append(img) 
     changeCircle(currentIndex)
}

const changeCircle = (passedIndex) => {
    circles.forEach(circle => {
        circle.innerHTML = '&#9675'
    })
    circles[currentIndex].innerHTML = '&#9673'
}

function showSlides() {
    setInterval(nextImage, 5000)
}

function clickCircles() {
    circles.forEach(circle => {
        circle.addEventListener('click', () => {
            const clickedCircleIndex = circles.indexOf(circle)
            const distance = Math.abs(currentIndex - clickedCircleIndex)
            for(let i = 0; i < distance; i++){
                if(clickedCircleIndex > currentIndex){
                    nextImage()
                }
                else if(clickedCircleIndex < currentIndex){
                    previousImage()
                }
            }
        })
    })
}


previousBtn.addEventListener('click', () => {
    previousImage()
})

nextBtn.addEventListener('click', () =>{
    nextImage()
})

window.addEventListener('load', () => {
    showSlides()
    makeCircles()
    clickCircles()
})