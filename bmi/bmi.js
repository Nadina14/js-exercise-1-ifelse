let peso = prompt('Qual è il tuo peso? (in kg)')
let pesoN = Number(peso)
let altezza = prompt('Qual è la tua altezza? (in m)')
let altezzaN = Number(altezza)
let result = pesoN / (altezzaN * altezzaN)
if (result < 18.5) {
    alert('Sei sottopeso');
}else if (result >= 18.5 && result <= 24.9 ){
    alert('Sei normopeso');
}else {
    alert('Sei sovrappeso');
}