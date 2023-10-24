let età = prompt('Quanti anni hai?')
let etàN = Number(età)
if (etàN < 13) {
    alert("Puoi vedere solo film con classificazione PG");
} else if (etàN >= 13 && etàN <= 17) {
  alert("Puoi vedere film con classificazione PG e PG-13");
} else {
  alert("Puoi vedere tutti i film");
}
