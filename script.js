let firstNum = '',
  secondNum = '',
  operator = '',
  activeNumber = 'first',
  lastResult = ''
const symbols = ['0123456789,', '÷+=-×', 'AC±%']

const isComma = (string) => string.includes(',')
const isOperatorNull = () => operator == ''
const isOperator = (string) => symbols[1].includes(string)
const isNumberOrComma = (string) => symbols[0].includes(string)
const readyForCalc = () => operator != '' && firstNum != '' && secondNum != ''

const initializeCalculatorHTML = () => {
  const calculatorDiv = document.querySelector('.calculator')
  const elements = [
    { name: 'AC', color: 'rgb(95,94,97)' },
    { name: '±', color: 'rgb(95,94,97)' },
    { name: '%', color: 'rgb(95,94,97)' },
    { name: '÷', color: 'rgb(240,155,44)' },
    { name: '7', color: 'rgb(122,121,123)' },
    { name: '8', color: 'rgb(122,121,123)' },
    { name: '9', color: 'rgb(122,121,123)' },
    { name: '×', color: 'rgb(240,155,44)' },
    { name: '4', color: 'rgb(122,121,123)' },
    { name: '5', color: 'rgb(122,121,123)' },
    { name: '6', color: 'rgb(122,121,123)' },
    { name: '-', color: 'rgb(240,155,44)' },
    { name: '1', color: 'rgb(122,121,123)' },
    { name: '2', color: 'rgb(122,121,123)' },
    { name: '3', color: 'rgb(122,121,123)' },
    { name: '+', color: 'rgb(240,155,44)' },
    { name: '0', color: 'rgb(122,121,123)' },
    { name: ',', color: 'rgb(122,121,123)' },
    { name: '=', color: 'rgb(240,155,44)' },
  ].reverse()

  for (let i = 0; i < 6; i++) {
    const tableRow = document.createElement('div')
    if (i == 0) tableRow.classList.add('row-input')
    else tableRow.classList.add('row')
    calculatorDiv.appendChild(tableRow)

    if (i != 0 && i != 5) {
      for (let j = 0; j < 4; j++) {
        const tableData = document.createElement('div')
        const corresprondingSymbol = elements.pop()
        tableData.classList.add(
          'element-' + corresprondingSymbol.name,
          'calculatorElement',
        )
        tableData.innerHTML = corresprondingSymbol.name
        tableData.style.backgroundColor = corresprondingSymbol.color
        tableRow.appendChild(tableData)
      }
    } else if (i == 0) {
      const tableData = document.createElement('input')
      tableData.classList.add('inputElement')
      tableData.value = 0
      tableData.style.backgroundColor = 'rgb(78,77,80)'
      tableRow.appendChild(tableData)
    } else if (i == 5) {
      for (let j = 0; j < 3; j++) {
        const tableData = document.createElement('div')
        const corresprondingSymbol = elements.pop()
        tableData.classList.add(
          'element-' + corresprondingSymbol.name,
          'calculatorElement',
        )
        tableData.innerHTML = corresprondingSymbol.name
        tableData.style.backgroundColor = corresprondingSymbol.color
        tableRow.appendChild(tableData)
      }
    }
  }
}

const handleClick = () => {
  const allButtons = document.querySelectorAll('.calculatorElement')
  allButtons.forEach((button) => {
    const innerHTML = button.innerHTML
    const initialBackground = button.style.backgroundColor

    button.addEventListener('mousedown', () => {
      handleAction(button)

      if (symbols[0].includes(innerHTML)) {
        button.style.backgroundColor = 'rgb(173,172,174)'
      } else if (symbols[1].includes(innerHTML)) {
        button.style.backgroundColor = 'rgb(185,119,34)'
      } else if (symbols[2].includes(innerHTML)) {
        button.style.backgroundColor = 'rgb(118,117,120)'
      }
    })
    document.addEventListener('mouseup', () => {
      button.style.backgroundColor = initialBackground
    })
  })
}

const handleAction = (button) => {
  const inputField = document.querySelector('.inputElement')

  const value = button.innerHTML
  let result = 0

  // Handle change of sign
  if (value === '±') {
    if (!(firstNum != '' && !isOperatorNull() && secondNum == '')) {
      if (
        activeNumber == 'first' &&
        (firstNum != '' || inputField.value == lastResult)
      ) {
        if (inputField.value == lastResult) {
          firstNum = lastResult
        }

        if (firstNum.charAt(0) == '-') {
          firstNum = firstNum.substring(1)
          setInputFieldValue(firstNum)
        } else {
          firstNum = '-' + firstNum
          setInputFieldValue(firstNum)
        }
      } else if (activeNumber == 'second' && secondNum != '') {
        if (secondNum.charAt(0) == '-') {
          secondNum = secondNum.substring(1)
          setInputFieldValue(secondNum)
        } else {
          secondNum = '-' + secondNum
          setInputFieldValue(secondNum)
        }
      }
    }
  }
  // Handle percent
  else if (value === '%') {
    if (!(firstNum != '' && !isOperatorNull() && secondNum == '')) {
      if (activeNumber == 'first') {
        if (inputField.value == lastResult) {
          firstNum = lastResult
        }

        firstNum = String(
          Math.round((parseFloat(firstNum.replace(',', '.')) / 100) * 100000) /
            100000,
        ).replace('.', ',')
        setInputFieldValue(firstNum)
      } else {
        secondNum = String(
          Math.round((parseFloat(secondNum.replace(',', '.')) / 100) * 100000) /
            100000,
        ).replace('.', ',')
        setInputFieldValue(secondNum)
      }
    }
  }
  // If there are two eligible numbers && operator && '=' pressed
  else if (readyForCalc() && value === '=') {
    const firstNumberAsNumber = isComma(firstNum)
      ? parseFloat(firstNum.replace(',', '.'))
      : parseInt(firstNum)
    const secondNumberAsNumber = isComma(secondNum)
      ? parseFloat(secondNum.replace(',', '.'))
      : parseInt(secondNum)

    switch (operator) {
      case '+':
        result = firstNumberAsNumber + secondNumberAsNumber
        firstNum = ''
        setInputFieldValue(String(result).replace('.', ','))
        activeNumber = 'first'
        secondNum = ''
        operator = ''
        lastResult = String(result).replace('.', ',')
        break
      case '-':
        result = firstNumberAsNumber - secondNumberAsNumber
        firstNum = ''
        setInputFieldValue(String(result).replace('.', ','))
        activeNumber = 'first'
        secondNum = ''
        operator = ''
        lastResult = String(result).replace('.', ',')
        break
      case '÷':
        if (secondNumberAsNumber != 0) {
          result =
            Math.round((firstNumberAsNumber / secondNumberAsNumber) * 100000) /
            100000
          firstNum = ''
          setInputFieldValue(String(result).replace('.', ','))
          activeNumber = 'first'
          secondNum = ''
          operator = ''
          lastResult = String(result).replace('.', ',')
        } else {
          firstNum = ''
          setInputFieldValue('Dividing by 0...')
          activeNumber = 'first'
          secondNum = ''
          operator = ''
        }
        break
      case '×':
        result =
          Math.round(firstNumberAsNumber * secondNumberAsNumber * 100000) /
          100000
        firstNum = ''
        setInputFieldValue(String(result).replace('.', ','))
        activeNumber = 'first'
        secondNum = ''
        operator = ''
        lastResult = String(result).replace('.', ',')
    }
  }
  // If there are two eligible numbers && operator && another operator pressed
  else if (readyForCalc() && isOperator(value)) {
    const firstNumberAsNumber = isComma(firstNum)
      ? parseFloat(firstNum.replace(',', '.'))
      : parseInt(firstNum)
    const secondNumberAsNumber = isComma(secondNum)
      ? parseFloat(secondNum.replace(',', '.'))
      : parseInt(secondNum)

    switch (operator) {
      case '+':
        result = firstNumberAsNumber + secondNumberAsNumber
        firstNum = String(result).replace('.', ',')
        setInputFieldValue(String(result).replace('.', ','))
        activeNumber = 'second'
        secondNum = ''
        operator = String(value)
        lastResult = String(result).replace('.', ',')
        break
      case '-':
        result = firstNumberAsNumber - secondNumberAsNumber
        firstNum = String(result).replace('.', ',')
        setInputFieldValue(String(result).replace('.', ','))
        activeNumber = 'first'
        secondNum = ''
        operator = String(value)
        lastResult = String(result).replace('.', ',')
        break
      case '÷':
        if (secondNumberAsNumber != 0) {
          result =
            Math.round((firstNumberAsNumber / secondNumberAsNumber) * 100000) /
            100000
          firstNum = String(result).replace('.', ',')
          setInputFieldValue(String(result).replace('.', ','))
          activeNumber = 'first'
          secondNum = ''
          operator = String(value)
          lastResult = String(result).replace('.', ',')
        } else {
          firstNum = ''
          setInputFieldValue('Dividing by 0...')
          activeNumber = 'first'
          secondNum = ''
          operator = ''
        }
        break
      case '×':
        result = firstNumberAsNumber * secondNumberAsNumber
        firstNum = String(result).replace('.', ',')
        setInputFieldValue(String(result).replace('.', ','))
        activeNumber = 'first'
        secondNum = ''
        operator = String(value)
        lastResult = String(result).replace('.', ',')
    }
  }
  //Delete all inputs
  else if (value === 'AC') {
    firstNum = ''
    secondNum = ''
    operator = ''
    setInputFieldValue(0)
  } else if (value === '%' && activeNumber == 'first') {
    const numberPercent = parseFloat(firstNum.replace(',', '.') / 100)
  }
  //Handle first number
  else if (
    isOperatorNull() &&
    isNumberOrComma(value) &&
    String(firstNum).length <= 8
  ) {
    if (value == ',' && isComma(firstNum)) {
    } else {
      firstNum += value
      setInputFieldValue(firstNum)
    }
  }
  // Handle operator click after calculation
  else if (
    inputField.value == lastResult &&
    isOperator(value) &&
    isOperatorNull() &&
    value != '='
  ) {
    firstNum = lastResult
    operator = value
    activeNumber = 'second'
  }
  //Handle operator after first number is input
  else if (firstNum != '' && isOperator(value) && value != '=') {
    operator = value
    activeNumber = 'second'
  }
  //Handle second number
  else if (
    !isOperatorNull() &&
    String(secondNum).length <= 8 &&
    isNumberOrComma(value)
  ) {
    if (value == ',' && isComma(secondNum)) {
    } else {
      secondNum += value
      setInputFieldValue(secondNum)
    }
  }
}

const setInputFieldValue = (value) => {
  const inputField = document.querySelector('.inputElement')
  inputField.value = value
  if (String(value).length > 7) {
    inputField.style.fontSize = String(45 - String(value).length * 1.5) + 'px'
  } else {
    inputField.style.fontSize = '45px'
  }
}

initializeCalculatorHTML()
handleClick()
