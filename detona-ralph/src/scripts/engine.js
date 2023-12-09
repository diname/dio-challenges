const state = {
  view: {
    squares: document.querySelectorAll('.square'),
    enemy: document.querySelector('.enemy'),
    timeLeft: document.querySelector('#time-left'),
    score: document.querySelector('#score'),
    lives: document.querySelector('#lives')
  },
  values: {
    gameVelocity: 1000,
    hitPosition: 0,
    result: 0,
    currentTime: 60,
    lives: 3
  },
  actions: {
    timerId: setInterval(randomSquare, 1000),
    countDownTimer: setInterval(countDown, 1000)
  }
}

function playSound(audioName) {
  let audio = new Audio(`./src/audios/${audioName}.m4a`)
  audio.volume = 0.2
  audio.play()
}

function countDown() {
  state.values.currentTime--
  state.view.timeLeft.textContent = state.values.currentTime

  if (state.values.currentTime <= 0 || state.values.lives === 0) {
    playSound('gameover')
    clearInterval(state.actions.countDownTimer)
    clearInterval(state.actions.timerId)
    alert('Game Over! O seu score foi de ' + state.values.result)
  }
}

function randomSquare() {
  state.view.squares.forEach((square) => {
    square.classList.remove('enemy')
  })

  let randomNumber = Math.floor(Math.random() * 9)
  let randomSquare = state.view.squares[randomNumber]
  randomSquare.classList.add('enemy')
  state.values.hitPosition = randomSquare.id
}

function addListenerHitBox() {
  state.view.squares.forEach((square) => {
    square.addEventListener('mousedown', () => {
      if (square.id === state.values.hitPosition) {
        state.values.result++
        state.view.score.textContent = state.values.result
        state.values.hitPosition = null
        playSound('hit')
      } else {
        state.values.lives--
        state.view.lives.textContent = state.values.lives
      }
    })
  })
}

function initialize() {
  addListenerHitBox()
}

initialize()
