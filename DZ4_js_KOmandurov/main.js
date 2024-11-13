// 1 пункт

const btnPlus = document.querySelector('.increment')
const counterResults = document.querySelector('.counter')
const btnMinus = document.querySelector('.decrement')

let counter = 0

btnPlus.addEventListener('click', () => {
    counter++
    counterResults.innerHTML = counter
    counterResults.style.color = 'green'
})

btnMinus.addEventListener('click', () => {
    if (counter>0){
        counter--
        counterResults.innerHTML = counter
        counterResults.style.color = 'red'
    }
})

counterResults.innerHTML = counter

//2 пункт

const bigBlog = document.querySelector('.mouse_field')
const postionChaild = document.querySelector('.position')
bigBlog.addEventListener('mousemove', (event) => {
    const x = event.offsetX
    const y = event.offsetY
    postionChaild.textContent = `X:${x}, Y:${y}`
})

//3 пункт

const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const green = document.querySelector('.green')

const textTraffic = document.querySelector('.text_traffic')

const colorTrafficChange = (color) => {
    red.classList.remove('active')
    yellow.classList.remove('active')
    green.classList.remove('active')

    if (color.toLowerCase() === 'red'){
        red.classList.add('active')
        textTraffic.innerHTML = 'Stop!'
    }else if(color.toLowerCase() === 'yellow'){
        yellow.classList.add('active')
        textTraffic.innerHTML = 'Wait!'
    }else if(color.toLowerCase() === 'green'){
       green.classList.add('active')
        textTraffic.innerHTML = 'Go!'
    }else{
        textTraffic.innerHTML = 'Wrong color!'
    }
}

const writeColor = prompt('Enter the color of the traffic light red,yellow or green')
colorTrafficChange(writeColor)
