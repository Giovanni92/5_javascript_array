
//dichiarazione
var giorni = new Array();
console.log(giorni);    //*[]

giorni = new Array(7);
console.log(giorni);    //*[ <7 empty items> ]

//reinizializzo array e aggiungiamo elemento
giorni = new Array(7);
giorni[10]='Test';
console.log(giorni);    //*[ <10 empty items>, 'Test' ]

//reinizializzo array con due valori e aggiungo terzo valore
giorni = new Array(3,4);
giorni[2] = 5;
console.log(giorni);


