let currentIndex = 0;

const middleImg = document.getElementById('single-img')

const nextBtn = document.getElementById('right-btn')
const previousBtn = document.getElementById('left-btn')


const imageSources = ['./images/image1.jpg', './images/image2.jpg', './images/image3.jpg']

function previousImage() {
    middleImg.innerHTML = '';
    if(currentIndex === 0){
        currentIndex = 3
    }
    currentIndex = (currentIndex - 1) % imageSources.length
    const img = new Image();
    img.src = imageSources[currentIndex]
    middleImg.append(img)
}

function nextImage() {
    middleImg.innerHTML = ''
    currentIndex = (currentIndex + 1) % imageSources.length
    const img = new Image();
    img.src = imageSources[currentIndex]
    middleImg.append(img) 
}

function showSlides() {
    setInterval(previousImage, 5000)
}


previousBtn.addEventListener('click', () => {
    previousImage()
})

nextBtn.addEventListener('click', () =>{
    nextImage()
})

window.addEventListener('load', () => {
    showSlides()
})