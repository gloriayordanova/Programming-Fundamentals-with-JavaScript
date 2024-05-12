function legendaryFarming(str) {
    let keyMaterials = { shards: 0, fragments: 0, motes: 0};
    let junkMaterials = {};

    let legendaries = { shards: 'Shadowmourne', fragments: 'Valanyr', motes: 'Dragonwrath' }; //we write that line a bit later

    let materialsArr = str.split(' ');
    //console.log(materialsArr);  //it will print ['3', 'Motes', '5', 'stones', '5', 'Shards', '6', 'leathers', '255', 'fragments', '7', 'Shards']

    for(let i = 0; i < materialsArr.length; i += 2) {
        let qty = Number(materialsArr[i]);
        let material = materialsArr[i + 1].toLowerCase();

        //console.log(qty);  
        //console.log(material);
        //when we print the above, we will have 3 motes 5 stones 5 shards 6 leathers etc.

        if(material in keyMaterials) {
            keyMaterials[material] += qty;

            if(keyMaterials[material] >= 250) { //here is when we write  let legendaries etc from above
                let legendaryWon = legendaries[material];    //here is when we write  let legendaries etc from above //e.g. if key is shards, we will take 'Shadowmourne', so in that case 'Shadowmourne' will be the legenraryWon 
                console.log(`${legendaryWon} obtained!`);

                keyMaterials[material] -= 250; //because in that case this is the price we have paid for the legendary
                break; //that break will stop the whole for loop
            }
        } else {
            if(material in junkMaterials) {
                junkMaterials[material] += qty; //here if we have quantity add to existing key
            }  else {
                junkMaterials[material] = qty; //here if we don't have quantity we create new key
            }
        }
    }

    // let keyMaterialsEntries = Object.entries(keyMaterials).sort((a, b) => {
    // //     console.log(a);
    // //     console.log(b);
    // //     //when we print the above we will have 
    // //     // [ 'fragments', 255 ] // we can't do that way because a e.g. [ 'fragments', 255 ] is an array and b [ 'shards', 5 ] is also an array, so we can't say b-a to sort in descending order
    // //     // [ 'shards', 5 ]
    // //     // [ 'motes', 3 ]
    // //     // [ 'fragments', 255 ]
    // // })

    //if we want to sort by qty, we should say
    let keyMaterialsEntries = Object.entries(keyMaterials).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

    for(let [material, qty] of keyMaterialsEntries) {
        console.log(`${material}: ${qty}`);
    }
}

legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
// legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');