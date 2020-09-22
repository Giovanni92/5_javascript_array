//Array literal
//si differenzia da new Array perchè new Array pùo essere sovrascritto, esempio:

//var giorni = new Array();
function Array() {
    return false;
}
var giorni = new Array();
console.log(giorni.length)  //*undefined
console.log(giorni);    //*{} ovvero oggetto, giorni viene visto come oggetto non come array per via della funxzione

//dichiarazione literal
var days = [];
//in questo caso passo all'array SOLO il numero sette
days = [7]; 
days = [7, 'Tewst', false, [1,2,3,4]];
console.log(days);  //*[ 7, 'Tewst', false, [ 1, 2, 3, 4 ] ]
console.log(days.length);   //*4

//come accedere al contenuto dell'array literal
console.log(days[0]);   //*7
console.log(typeof days[3]);   //*object
//accedere dentro array annidato 
console.log(days[3][0]);



