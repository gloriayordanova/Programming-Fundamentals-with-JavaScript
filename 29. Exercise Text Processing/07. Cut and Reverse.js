function cutAndReverse(str) {
    let middleIdx = str.length / 2;

    let leftHalf = str.slice(0, middleIdx).split('').reverse().join(''); //правим това първо със split после с join, защото reverse работи само с array, а като направим split го превръщаме вече в array
    //console.log(leftHalf); //tluciffiDsIsihT
    let rightHalf = str.slice(middleIdx).split('').reverse().join(''); //ако не задам нищо като 2ри индекс, то автоматично ще си продължи докрая
    //console.log(rightHalf); //gnizamAoSsIsihT

    console.log(leftHalf);
    console.log(rightHalf);
}

// cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
// cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');