//не можем да променим само 1 символ вътре във стринга, както може да направим примерно с масива. Стрингът е immutable (read-only)



let str = "Hello, JS";
let ch = str[2]; //Expected output: l
ch = str.charAt(2); //Expected output: l
//Both declarations are the same



//Strings can also be iterated using for-of )за да ги четем например и да направим нещо друго, разбрахме вече, че не можем да манипулираме стрингове.



//Concatenating
let text = "Hello" + ", ";
//Expected output: "Hello, "
text += "JS!"; // "Hello, JS!"



//Use the concat() method
let greet = "Hello, ";
let name = "John";
let result = greet.concat(name);
console.log(result); //Expected putput: "Hello, John"



//indexf(substr)
let str = "I am JavaScript developer";
console.log(str.indexOf("Java")); //Expected output: 5  //чете отляво надясно и спира при първото съвпадение
console.log(str.indexOf("java")); //Expected output: -1  //защото java  с малка буква го няма, затова връща -1



//lastIndexOf(substr)  
let str = "Intro to programming";
let last = str.lastIndexOf("o"); //чете отдясно наляво и ще върне последния индекс на който се появява
console.log(last); //Expected output: 11



let str = "hello world hello";
console.log(str.indexOf('hello', 1)); //това ще рече почни да търсиш от индекс 1, което значи, че ще пропуснем първото h; //whtn printing we will get 12