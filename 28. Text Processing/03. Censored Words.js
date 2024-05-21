function solve(text, str) {
    let censor ='*'.repeat(str.length);
    let result = text;

    //console.log(text.replace(str, censor)); //това не работи в случая, защото в последния пример ще отпечата **** world hello (не взима под внимание второто hello)
    while(result.includes(str)) {
        result = result.replace(str, censor)
    }
    console.log(result);
}

// solve('A small sentence with some words', 'small');  //FYI this solution won't be working in practice, because if we have // solve('A ** sentence with some words', '**'); ще изпаднем в безкраен цикъл и това решение няма да работи в практиката, защотов практиката ще искаме да заместим една дума с друга дума. Ако тази дума има част от другата дума, пак ще ни вкара в безкраен цикъл
// solve('Find the hidden word', 'hidden');
// solve('hello world hello', 'hello');



//another solution if we submit directly in judge
(text, str) => text.split(str).join('*'.repeat(str.length));