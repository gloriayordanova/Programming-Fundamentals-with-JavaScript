function replaceRepeatingChars(str) {
    let noRepeatStr = '';
    let prevChar = ''; //и тук е празен, защото преди например 'а' нямаме нищо

    for(let curChar of str) {
        //console.log(curChar); //това ще изпринтира всяка една буквичка на нов ред напр 5 пъти а, 5 пъти б, едно ц и тн
        if(curChar !== prevChar) {
            noRepeatStr += curChar;
            prevChar = curChar; //досега например prevChar ни е бил 'a', а curChar 'b'; и сега казвам новия prevChar ще бъде 'b', a на следваща итерация аз ще взема следващ
        }
    }

    console.log(noRepeatStr);

}

// replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
// replaceRepeatingChars('qqqwerqwecccwd');