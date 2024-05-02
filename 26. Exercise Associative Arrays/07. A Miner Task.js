function minerTask(arr) {
    let resources = {};
    
    for(let i = 0; i < arr.length; i += 2) {
        let resource = arr[i];
        let qty = Number(arr[i + 1]);

        if(resource in resources) {
            resources[resource]  //e.g. if resource is Silver, I will find the key Silver and will take its value
        }
    }
}

minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]);

// minerTask([
//     'gold',
//     '155',
//     'silver',
//     '10',
//     'copper',
//     '17',
//     'gold',
//     '15'
// ]);