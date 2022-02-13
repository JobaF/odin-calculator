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
  const symbols = ['0123456789,', '÷+=-×', 'AC±%']
  allButtons.forEach((button) => {
    const innerHTML = button.innerHTML
    const initialBackground = button.style.backgroundColor

    button.addEventListener('mousedown', () => {
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

initializeCalculatorHTML()
handleClick()
