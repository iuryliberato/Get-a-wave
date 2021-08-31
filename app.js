function init() {
  // Elements 
  const grid = document.querySelector('.grid')
  const surfer = document.querySelector('.surfer')
  const cells = document.querySelectorAll('.cell')
  const noEntry = document.querySelectorAll('.no-Entry')
  const audio = document.querySelector('#backgroundSong')
  const moving = document.querySelector('#moving_effect')
  const carHorn = document.querySelector('#carHorn')
  const water = document.querySelectorAll('.water')

  let counter = 0
  const width = 11
  // car
  const carRowIndex = 6
  const carGap = 3
  const carStartIndex = width * carRowIndex
  const cars = Array.from(cells).slice(carStartIndex, carStartIndex + width)
  console.log(cars)
  // seagull 
  const seagullIndex = 2
  const seagullGap = 3
  const seagulls = Array.from(cells).slice(width * seagullIndex, width * (seagullIndex + 1))
  // truck
  const truckRowIndex = 4
  const truckGap = 3
  const trucks = Array.from(cells).slice(width * truckRowIndex, width * (truckRowIndex + 1))

  const startButtons = document.querySelectorAll('.start')
  const popUps = document.querySelectorAll('.popUp')
  const popStart = document.querySelector('.startOverlay')
  const popGameOver = document.querySelector('.gameOverOverlay')
  const popWin = document.querySelector('.winOverlay')
  const startingPosition = 86
  let characterPosition = startingPosition

  //Functions
  function carHornPlay() {
    carHorn.play()
  }
  function movesound() {
    moving.play() 
  }
  
  function startReset() {
    popUps.forEach(popUp => popUp.classList.remove('active'))
    characterPosition = startingPosition
    moveCharacter()
    audio.play()
  }


  function moveCharacter() {
    cells.forEach(cell => cell.innerHTML = '')
    cells[characterPosition].innerHTML = '<img src="/surfer.png" class="surfer" >'

  }

  function gameOver() {
    popGameOver.classList.add('active')
  }
  function win() {
    popWin.classList.add('active')
  }



  function run() {
    counter++
    // console.log(counter) 
    cells.forEach(cell => cell.classList.remove('car', 'seagull', 'truck'))
    cars.forEach((car, index) => {
      if (index % carGap === carGap - 1 - counter % carGap) {
        car.classList.add('car')
        
        if (index + width * carRowIndex === characterPosition ) {
          carHornPlay()
          gameOver()
          
        }
      }
    })
    seagulls.forEach((seagull, index) => {
      if (index % seagullGap === seagullGap - 1 - counter % seagullGap) {
        seagull.classList.add('seagull')
        
        if (index + width * seagullIndex === characterPosition) {
          gameOver()
        }

      }
    })
    trucks.forEach((truck, index) => {
      if (index % truckGap === counter % truckGap) {
        truck.classList.add('truck')
       
        
        if (index + width * truckRowIndex === characterPosition) {
          gameOver()
        }
      }
    })

  }
  setInterval(run, 600)


  function keyUp(event) {
    console.log(characterPosition % width)
    let newPosition = characterPosition

    if (event.code === 'ArrowUp' && characterPosition >= width) {
      newPosition -= width 
     
    } else if (event.code === 'ArrowDown' && characterPosition < cells.length - width) {
      newPosition += width
       
    } else if (event.code === 'ArrowLeft' && characterPosition % width !== 0) {
      newPosition--
    } else if (event.code === 'ArrowRight' && (characterPosition + 1) % width !== 0) {
      newPosition++
    }

  

    if (!cells[newPosition].classList.contains('no-Entry')) {
      characterPosition = newPosition
      movesound()

    }
    if (cells[newPosition].classList.contains('water')) {
     gameOver()
    }
    if (characterPosition <= width) {
      win()
    }
    console.log(characterPosition)
    moveCharacter()
  }


  // Puts the first character in a strat position.
  moveCharacter()



  //Event Listeners 
  
  document.addEventListener('keyup', keyUp)
  startButtons.forEach(button => button.addEventListener('click', startReset))
}

window.addEventListener('DOMContentLoaded', init)