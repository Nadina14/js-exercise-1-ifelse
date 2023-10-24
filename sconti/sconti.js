let prezzo = prompt('Qual era il prezzo iniziale della maglietta che indossi?')
let prezzoN = Number(prezzo)
let sconto = prompt('Qual era la sua percentuale di sconto?')
let scontoN = Number(sconto)
let resultsconto = (prezzoN * scontoN) / 100
let resultscontoN = Number(resultsconto)
let result = prezzoN - resultscontoN
alert('Hai ricevuto uno sconto di ' + resultsconto + '€')
alert('Hai pagto ' + result + '€' )