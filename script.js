const body = document.body
const themeOneBtn = document.querySelector('.theme-one')
const themeTwoBtn = document.querySelector('.theme-two')
const themeThreeBtn = document.querySelector('.theme-three')
const themes = document.querySelectorAll('.theme')

// switch themes
themeOneBtn.addEventListener('click', () => {
  if (body.classList.contains('theme2')) {
    body.classList.remove('theme2')
  } else if (body.classList.contains('theme3')) {
    body.classList.remove('theme3')
  }

  removeThemes()
  themeOneBtn.classList.add('active')
})

themeTwoBtn.addEventListener('click', () => {
  if (body.classList.contains('theme3')) {
    body.classList.remove('theme3')
  }

  body.classList.add('theme2')
  removeThemes()
  themeTwoBtn.classList.add('active')
})

themeThreeBtn.addEventListener('click', () => {
  if (body.classList.contains('theme2')) {
    body.classList.remove('theme2')
  }

  body.classList.add('theme3')
  removeThemes()
  themeThreeBtn.classList.add('active')
})

function removeThemes() {
  themes.forEach((theme) => [theme.classList.remove('active')])
}

// calculator operations
const display = document.querySelector('.calc-display')
const numberBtn = document.querySelectorAll('.number-btn')
const calcBtn = document.querySelectorAll('.calc-btn')
const equalsBtn = document.querySelector('.equals-btn')
const deleteBtn = document.querySelector('.delete-btn')
const resetBtn = document.querySelector('.reset-btn')

numberBtn.forEach((number) => {
  number.addEventListener('click', () => {
    if (display.textContent.length === 1 && display.textContent === '0') {
      display.textContent = ''
    }

    display.textContent += number.innerHTML

    if (display.textContent.length >= '18') {
      display.textContent = 'MAX!'
      setTimeout(() => (display.textContent = '0'), 500)
    }
  })
})

calcBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    display.textContent += btn.id
  })
})

equalsBtn.addEventListener('click', () => {
  let soln = eval(display.textContent)

  if (Number.isInteger(soln)) {
    display.textContent = soln
    console.log(soln)
  } else {
    display.textContent = soln.toFixed(2)
  }

  if (!isFinite(soln)) {
    setTimeout(() => (display.textContent = '0'), 500)
  }
})

deleteBtn.addEventListener('click', () => {
  display.textContent = display.textContent.slice(0, -1)
  if (display.textContent === '') {
    display.textContent = '0'
  }
})

resetBtn.addEventListener('click', () => {
  display.textContent = '0'
})
