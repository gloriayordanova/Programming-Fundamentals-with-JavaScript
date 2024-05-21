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
console.log(str.indexOf('hello', 1)); //това ще рече почни да търсиш от индекс 1, което значи, че ще пропуснем първото h; //when printing we will get 12



let str = "hello world hello";
let lastIndex = 0;
while(str.indexOf('hello', lastIndex) != - 1) {  //!= - 1 различно от -1, защото знаем, че при -1 това ще хвърли грешка
    let foundAt = str.indexOf('hello', lastIndex);
    console.log('found match at', str.indexOf('hello', foundAt));
    lastIndex = foundAt + 5;  
}



//substring(startIndex, endIndex)  //работи по същия начин като slice, разликата е, че това не работи с отрицателни индекси
let str = "I am JavaScript developer";
let sub = str.substring(5, 10);  //ако му подадем например 10, 5 ще работи суъщото, защото то авотматично си ги разменя
console.log(sub); //Expected output: JavaS



////substring(startIndex, endIndex) more examples
let str = 'hello world hello';
console.log(str.substring(11, -6));  //казахме, че с отрицателни символи не работи, а каво ще направи тук по-малкото минус 6 ще мине отпред, което не съществува и после 11, ще принтира накрая hello world
//сравнение горното ако го направим със slice
let str = 'hello world hello';
console.log(str.slice(11, -6)); //няма да върне нищо, зашото то си следва последователността 11,-6 защото започвайки от 11тия (2рото h na hello (отляво андясно) и спирайки 6 назад (ордясно наляво) реално ще прескочим всички символи и ще спре на спейса)



//replace(search, replacement) // или какво търсим и с какво бихме искали да го заменим //fyi замества само 1 съвпадения, а ако искаме няколко ползваме regex ли да използваме някакъв цикъл
let text = "Hello, john@softuni.bg, you have been using john@softuni.bg in you registration.";
let replacedText = text.replace(".bg", ".com");
console.log(replacedText); 
//"Hello, john@softuni.com, you have been using john@softuni.bg in you registration.";



//split(separator)  //opposite to split is join
let text = "I love fruits";
let words = text.split(' '); 
console.log(words); //Expected output: ['I', 'love', 'fruits']
// as above example, //here we can do it as empty (' '), but we can also do it by giving a whole word и което можем да правим ако не е емпти е да заменим всички съвпадения с дадена дума без да ползваме регекси/цикли/replaceAll
let str = 'hello world hello';
console.log(str.split('l')); //Expected output: ['he', '', 'o wor', 'd he', '', 'o']
console.log(str.split('l')); //Expected output: ['he', 'o world he', 'o']



//opposite to split is join
let str = 'hello world hello';
console.log(str.split('ll').join('tt'));  //Expected output: hetto world hetto



//includes(substr)  //indexOf is identical, but instead of giving us True or False, it will tell us where exactly it is located, like which element and it will return us a number
let text = "I love fruits.";
console.log(text.includes("fruits")); //Expected output: True
console.log(text.includes("banana")); //Expected output: False



//repeat(count) - Creates a new string repeated count times
let n = 3;
for(let i = 1; i <= n; i++) {
    console.log('*'.repeat(i));
}