let punteggio = prompt('Qual è stato il tuo punteggio al test? (in centesimi)')
let punteggioN = Number(punteggio)
if (punteggioN >= 90) {
    alert('Complimenti! Hai preso una A!')
}else if (punteggioN < 90 && punteggioN >= 80) {
    alert('Quasi il massimo! Hai preso una B!')
}else if (punteggioN >= 70 && punteggioN < 80){
    alert('Non male! Hai preso una C!')
}else if (punteggioN >= 60 && punteggioN < 70){
    alert('Per un pelo! Hai preso una D')
}else {
    alert('Andrà meglio la prossima volta, hai preso una F')
}