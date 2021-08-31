function init() {
  // Elements 

  const cells = document.querySelectorAll('.cell')
  
  const audio = document.querySelector('#backgroundSong')
  const moving = document.querySelector('#moving_effect')
  const carHorn = document.querySelector('#carHorn')
  
  const seagullSound = document.querySelector('#seagullSound')
  const winSound = document.querySelector('#win')
  const gameOverTheme = document.querySelector('#gameOverTheme')

  let gameInterval
  let counter = 0
  const width = 11
  // car
  const carRowIndex = 6
  const carGap = 3
  const carStartIndex = width * carRowIndex
  const cars = Array.from(cells).slice(carStartIndex, carStartIndex + width)
 
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
  function seagullSounds() {
    seagullSound.play()
    setTimeout(() => {
      seagullSound.pause()
    }, 4000
    )
  }
  function winTheme() {
    winSound.play()
  }
  function gameOverThemee() {
    gameOverTheme.currentTime = 0
    gameOverTheme.play()
  }

  function startReset() {
    popUps.forEach(popUp => popUp.classList.remove('active'))
    characterPosition = startingPosition
    moveCharacter()
    audio.play()
    winSound.pause()
    gameOverTheme.pause()
    gameInterval = setInterval(run, 600)
  }


  function moveCharacter() {
    cells.forEach(cell => cell.innerHTML = '')
    cells[characterPosition].innerHTML = '<img src="/surfer.png" class="surfer" >'

  }

  function gameOver() {
    popGameOver.classList.add('active')
    stopGame()
  }
  function win() {
    popWin.classList.add('active')
    stopGame()
  }
  function stopGame() {
    clearInterval(gameInterval)
   audio.pause()
  }


  function run() {
    counter++
    // console.log(counter) 
    cells.forEach(cell => cell.classList.remove('car', 'seagull', 'truck'))
    cars.forEach((car, index) => {
      if (index % carGap === carGap - 1 - counter % carGap) {
        car.classList.add('car')

        if (index + width * carRowIndex === characterPosition) {
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
          seagullSounds()
        }

      }
    })
    trucks.forEach((truck, index) => {
      if (index % truckGap === counter % truckGap) {
        truck.classList.add('truck')


        if (index + width * truckRowIndex === characterPosition) {
          carHornPlay()
          gameOver()
        }
      }
    })

  }

  function keyUp(event) {
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
      gameOverThemee()
    }
    if (cells[newPosition].classList.contains('car')) {
      gameOver()
      carHornPlay()
    }
    if (cells[newPosition].classList.contains('seagull')) {
      gameOver()
      seagullSounds()
    }
    if (cells[newPosition].classList.contains('truck')) {
      gameOver()
      carHornPlay()
    }
    if (characterPosition <= width) {
      win()
      winTheme()
    }
    moveCharacter()
  }


  // Puts the first character in a strat position.
  moveCharacter()



  //Event Listeners 

  document.addEventListener('keyup', keyUp)
  startButtons.forEach(button => button.addEventListener('click', startReset))
}

window.addEventListener('DOMContentLoaded', init)