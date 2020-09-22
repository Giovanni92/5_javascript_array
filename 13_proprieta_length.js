// array properties and methods
var days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY','FRIDAY','SATURDAY', 'SUNDAY'];

console.log(days.length);
days[22]='test';
console.log(days.length);

//length non è solo di lettura ma anche di scrittura perchè modifica dimensione array
days.length = 7;
console.log(days.length);
console.log(days);