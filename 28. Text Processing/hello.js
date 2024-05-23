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



let name = 'John';
name[0] = 'R';
console.log(name); //Expected Output is John (because strings are immutable или непроменими)



//for of раоти със стрингове или масиви и ще гръмне ако n му подадем число i ще каже n is not iterrable, затова примера долу е невалиден;
for (let row of n) {
    console.log('*'.repeat(n));
}



//как може да преброим колко пъти се среща дума в един текст?
let str = 'hello world hello';
//console.log(str.split('ll').length); it will be printed 3 (because it splits tbat and leaves ll only in that case it is seen twice)
console.log(str.split('ll').length - 1);  //when we add -1 it will work that way



//trim()
//use trim() method to remove whitespaces(spaces, tabs, no-break space, etc.) from both ends of a string
let text = "      Annoying spaces        ";
console.log(text.trim()); //Expected output: "Annoying spaces"

//user trimStart() or trimEnd() to remove whitespaces only at the beginning or at the end
let text = "      Annoying spaces        ";
text = text.trimStart(); text = text.trimEnd();
console.log(text); //Expected output: "Annoying spaces"



//Starts With/Ends With  //similar to includes but with these we say if sth exists in the beginning or at the end
let text = "My name is John";
console.log(text.startsWith('My'));  //Expected putput: true  //it works as well if we just take not the whole words, but just a letter/letters

let text = "My name is John";
console.log(text.endsWith('John'));  //Expected putput: true  //it works as well if we just take not the whole words, but just a letter/letters

//here he gives and example
let text = 'hello world helllo';
console.log(str.includes('he'));  //Expected putput: true
console.log(str.slice(0, 3) == 'hel');  //Expected putput: true



//padStart(); used to add to the current string another substring at the start until length is reached
let text = "010";
console.log(text.padStart(8, '0'));  //Expected putput: 00000010

//padEnd(); used to add to the current string another substring at the end until a length is reached
let sentence = "He passed away";
console.log(sentence.padEnd(20, '.')); //Expected putput: He passed away......

//example of padEnd
let str = 'hello';
console.log(str.padEnd(10, '*-')); //Expected putput: hello*-*-*



//какво значи literal?
e.g. 6 това е начин да кажем на системата, че това е число
e.g. '6' това е начин да кажем на системата, че това е стринг
други подобни примери за обект, масив etc. 



//не е свързано с тази тема но въпрос за какво използваме асоциативен масив?
отговор: за съхраняване на данни, които искаме да асоциираме и са от един тип -> няма разлика от нормален обект, но по конвенция не слагаме разнотипли данни за ключовете, както при нормален обект
например 10 поръчки за 10 клиента -> може да направим асоциативен масив за тази информация (или телефонен указател -> име: номер на името)
лектора каза използваме асоциативен масив всеки път, когато искаме да имаме индекс различен от число. Като имаме някакви данни , които ги взимаме от база данни  обикновено ще искаме да вземем оригиналното ID на обекта, а не нуе да правим някакви числови индекси и после да се чудим как да ги намерим



//immutable strings
означава, че можем да ги четем, но не можем да ги променяме. Единственият начин да променим стринга е да извършим манипулация и в променливата да запазим новата стойност