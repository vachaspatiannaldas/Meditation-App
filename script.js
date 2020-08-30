

const container = document.querySelector('.container')
const text = document.querySelector('#text')


const totalTime = 7500
const breathTime = (totalTime / 5) * 2
const holdTime = totalTime / 5

breatheAnimation()

function breatheAnimation () {
    text.innerHTML = 'Breath In!'
    container.className = 'container grow'

    setTimeout(() => {
        text.innerText = 'Hold'
       
        setTimeout(() =>{
            text.innerText = 'Breath Out'
            container.className = 'container shrink'
        }, holdTime)
    }, breathTime) 

}

var audioElement = new Audio('bubbles.mp3');
audioElement.addEventListener('loadeddata', () => {
  let duration = audioElement.duration;
  // The duration variable now holds the duration (in seconds) of the audio clip 
})

setInterval(breatheAnimation, totalTime)
