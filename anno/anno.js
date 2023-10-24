let anno = prompt('Scrivi un anno a tua scelta e scopriamo insieme se è bisestile!')
let annoN = Number(anno)
if ((annoN % 4 == 0 && annoN % 100 != 0) || annoN % 400 == 0) {
    alert( annoN + ' è un anno bisestile!')
}else {
    alert( annoN + '  non è un anno bisestile')
}