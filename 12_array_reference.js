//Array Reference
var days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY','SATURDAY', 'SUNDAY'];

var daysCopy = days;    //*abbiamo copiato il riferimento a daysCopy, andando però a modificare daysCopy modifichiamo anche il riferimento
console.log(daysCopy);
daysCopy[0] = 'Lunedì';

//Dopo la modifica su daysCopy, anche days (originale) viene modificato
console.log(days);  //*[ 'Lunedì', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'SATURDAY', 'SUNDAY' ]
console.log(daysCopy);  //*idem sopra

//I valori primitivi vengono passati come copia, mentre gli array, oggetti e funzioni per 'riferimento'
var myNum = 10;
var num2= myNum;
num2=4;

console.log(myNum);
console.log(num2);





