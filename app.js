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

  const startingPosition1 = 86
  const startingPosition2 = 82
  const startingPosition3 = 78

  let activeCharacter = 1

  //Object

  const characterPositions = {
    1: startingPosition1,
    2: startingPosition2,
    3: startingPosition3
  }

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
    //hide overlays
    popUps.forEach(popUp => popUp.classList.remove('active'))
    // place the characters in their positions
    characterPositions[1] = startingPosition1
    characterPositions[2] = startingPosition2
    characterPositions[3] = startingPosition3
    printCharacters()
    //start background sound
    audio.play()
    winSound.pause()
    gameOverTheme.pause()
    // start the obstacles moving
    setSpeed(400)
    activeCharacter = 1
  }

  function setSpeed(ms) {
    clearInterval(gameInterval)
    gameInterval = setInterval(run, ms)
  }

  function printCharacters() {
  //empty all of the cells.
    cells.forEach(cell => cell.innerHTML = '')
    
    cells[characterPositions[1]].innerHTML = activeCharacter === 1 ? '<img src="/surfer.png" class="surfer active" >' : '<img src="/surfer.png" class="surfer" >'
    cells[characterPositions[2]].innerHTML = activeCharacter === 2 ? '<img src="/surfer2.png" class="surfer active" >' : '<img src="/surfer2.png" class="surfer">'
    cells[characterPositions[3]].innerHTML = activeCharacter === 3 ? '<img src="/surfer3.png" class="surfer active" >' : '<img src="/surfer3.png" class="surfer" >'
  }

  function gameOver() {
    popGameOver.classList.add('active')
    stopGame()
  }
  function win() {
    popWin.classList.add('active')
    stopGame()
    winTheme()
  }
  function stopGame() {
    clearInterval(gameInterval)
    audio.pause()
  }


  function run() {
    counter++
    //removes the three obstacles
    cells.forEach(cell => cell.classList.remove('car', 'seagull', 'truck'))

    //print and run obstacles in a opposite way
    cars.forEach((car, index) => {
      if (index % carGap === carGap - 1 - counter % carGap) {
        car.classList.add('car')

        if (index + width * carRowIndex === characterPositions[activeCharacter]) {
          carHornPlay()
          gameOver()
        }
      }
    })

    seagulls.forEach((seagull, index) => {
      if (index % seagullGap === seagullGap - 1 - counter % seagullGap) {
        seagull.classList.add('seagull')

        if (index + width * seagullIndex === characterPositions[activeCharacter]) {
          gameOver()
          seagullSounds()
        }
      }
    })
    //print and run obstacles 
    trucks.forEach((truck, index) => {
      if (index % truckGap === counter % truckGap) {
        truck.classList.add('truck')

        if (index + width * truckRowIndex === characterPositions[activeCharacter]) {
          carHornPlay()
          gameOver()
        }
      }
    })

  }

  function keyUp(event) {
    let newPosition = characterPositions[activeCharacter]
    //let characters move around inside the grid.
    if (event.code === 'ArrowUp' && characterPositions[activeCharacter] >= width) {
      newPosition -= width

    } else if (event.code === 'ArrowDown' && characterPositions[activeCharacter] < cells.length - width) {
      newPosition += width

    } else if (event.code === 'ArrowLeft' && characterPositions[activeCharacter] % width !== 0) {
      newPosition--
    } else if (event.code === 'ArrowRight' && (characterPositions[activeCharacter] + 1) % width !== 0) {
      newPosition++
    }
    
    if (!cells[newPosition].classList.contains('no-Entry')) {
      characterPositions[activeCharacter] = newPosition
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
    //set different speeds for each round.
    if (characterPositions[activeCharacter] <= width) {
      if (activeCharacter === 1) {
        activeCharacter = 2
        setSpeed(330)
      } else if (activeCharacter === 2) {
        activeCharacter = 3
        setSpeed(290)
      } else {
        win()
      }


    }
    printCharacters()
  }


  // Puts the first character in a strat position.
  printCharacters()



  //Event Listeners 

  document.addEventListener('keyup', keyUp)

  startButtons.forEach(button => button.addEventListener('click', startReset))
}

window.addEventListener('DOMContentLoaded', init)