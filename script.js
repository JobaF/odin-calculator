const initializeCalculatorHTML = () => {
  const calculatorDiv = document.querySelector('.calculator')
  const symbols = [
    'AC',
    '±',
    '%',
    '÷',
    '7',
    '8',
    '9',
    '×',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '0',
    ',',
    '=',
  ].reverse()
  //Table
  //-> NumberField
  //-> Clear  ±  %  ÷
  //-> 7 8 9 ×
  //-> 4 5 6 -
  //-> 1 2 3 +
  //->  0  , =
  const table = document.createElement('table')
  calculatorDiv.appendChild(table)
  for (let i = 0; i < 6; i++) {
    const tableRow = document.createElement('tr')
    tableRow.classList.add('row')
    table.appendChild(tableRow)

    if (i != 0 && i != 5) {
      for (let j = 0; j < 4; j++) {
        const tableData = document.createElement('td')
        const corresprondingSymbol = symbols.pop()
        tableData.classList.add(corresprondingSymbol, 'calculatorElement')
        tableData.innerHTML = corresprondingSymbol
        tableRow.appendChild(tableData)
      }
    } else if (i == 0) {
      const tableData = document.createElement('td')
      tableData.classList.add('inputElement')
      tableRow.appendChild(tableData)
    } else if (i == 5) {
      for (let j = 0; j < 3; j++) {
        const tableData = document.createElement('td')
        const corresprondingSymbol = symbols.pop()
        tableData.classList.add(corresprondingSymbol, 'calculatorElement')
        tableData.innerHTML = corresprondingSymbol
        tableRow.appendChild(tableData)
      }
    }
  }
  const numberField = document.createElement('')
}

initializeCalculatorHTML()
