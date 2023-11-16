function trippleLetters(n) {

    n = Number(n);

 for (let i = 97; i < 97 + n; i++) {
      let firstLetter = String.fromCharCode(i);
    for (let j = 97; j < 97 + n; j++) {
        let secondLetter = String.fromCharCode(j);
      for (let k = 97; k < 97 + n; k++) {
        let thirdLetter = String.fromCharCode(k);
        console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
      }
    }
  }
}

trippleLetters('3');
trippleLetters(2);



/*
function trippleLetters(n) {
    n = Number(n);
    let chars = 'abcdefghigklmnopqrstuvwxyz';
 for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        
      for (let k = 0; k < n; k++) {
        
        console.log(chars[i] + chars[j] + chars[k]);
      }
    }
  }
}
trippleLetters('3');
trippleLetters(2);
*/