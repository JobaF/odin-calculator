const initializeCalculatorHTML = () => {
  const calculatorDiv = document.querySelector('.calculator')
  const calculatorProperties = [
    { name: 'AC', color: 'rgb(57,55,59)' },
    { name: '±', color: 'rgb(57,55,59)' },
    { name: '%', color: 'rgb(57,55,59)' },
    { name: '÷', color: 'rgb(240,155,44)' },
    { name: '7', color: 'rgb(89,88,92)' },
    { name: '8', color: 'rgb(89,88,92)' },
    { name: '9', color: 'rgb(89,88,92)' },
    { name: '×', color: 'rgb(240,155,44)' },
    { name: '4', color: 'rgb(89,88,92)' },
    { name: '5', color: 'rgb(89,88,92)' },
    { name: '6', color: 'rgb(89,88,92)' },
    { name: '-', color: 'rgb(240,155,44)' },
    { name: '1', color: 'rgb(89,88,92)' },
    { name: '2', color: 'rgb(89,88,92)' },
    { name: '3', color: 'rgb(89,88,92)' },
    { name: '+', color: 'rgb(240,155,44)' },
    { name: '0', color: 'rgb(89,88,92)' },
    { name: ',', color: 'rgb(89,88,92)' },
    { name: '=', color: 'rgb(240,155,44)' },
  ].reverse()

  const table = document.createElement('table')
  calculatorDiv.appendChild(table)
  for (let i = 0; i < 6; i++) {
    const tableRow = document.createElement('tr')
    tableRow.classList.add('row')
    table.appendChild(tableRow)

    if (i != 0 && i != 5) {
      for (let j = 0; j < 4; j++) {
        const tableData = document.createElement('td')
        const corresprondingSymbol = calculatorProperties.pop()
        tableData.classList.add(corresprondingSymbol.name, 'calculatorElement')
        tableData.innerHTML = corresprondingSymbol.name
        tableData.style.backgroundColor = corresprondingSymbol.color
        tableRow.appendChild(tableData)
      }
    } else if (i == 0) {
      const tableData = document.createElement('td')
      tableData.classList.add('inputElement')
      tableData.style.backgroundColor = 'rgb(35,33,38)'
      tableRow.appendChild(tableData)
    } else if (i == 5) {
      for (let j = 0; j < 3; j++) {
        const tableData = document.createElement('td')
        const corresprondingSymbol = calculatorProperties.pop()
        tableData.classList.add(corresprondingSymbol.name, 'calculatorElement')
        tableData.innerHTML = corresprondingSymbol.name
        tableData.style.backgroundColor = corresprondingSymbol.color
        tableRow.appendChild(tableData)
      }
    }
  }
  const numberField = document.createElement('')
}

initializeCalculatorHTML()
