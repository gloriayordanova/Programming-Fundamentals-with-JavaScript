function minerTask(arr) {
    let resources = {};
    
    for(let i = 0; i < arr.length; i += 2) {
        let resource = arr[i];
        let qty = Number(arr[i + 1]);

        if(resource in resources) {
            resources[resource] += qty; //e.g. if resource is Silver, I will find the key Silver and will take its value e.g. 10 for Silver; about quantity e.g. I had, just an example, 4 then I add 6 = e.g.10
        } else { //ако въобще не е имало такъв ресурс, аз искам сега да го добавя е.г. Silver
            resources[resource] = qty;
        }
    }

    //не можем директно да сортираме object, не само да сортираме, а и да итерираме през него
    //затова за да итерираме взимаме неговите entries

    let entries = Object.entries(resources);
    //console.log(entries);  //it will print e.g. [ [ 'Gold', 155 ], [ 'Silver', 10 ], [ 'Copper', 17 ] ]//това ще трябва да го изпълним през терминала, за да видим какво показва e,g, type in the terminal "node 07.A Miner Task.js" 

    // for(let entry of entries) {
    //     // conso le.log(entry); // e.g. here will print
    //     //[ 'Gold', 155 ]
    //     //[ 'Silver', 10 ]
    //     //[ 'Copper', 17 ]
    // }

    for(let [resource, qty] of entries) {
        console.log(`${resource} -> ${qty}`);
    }
}

// minerTask([
//     'Gold',
//     '155',
//     'Silver',
//     '10',
//     'Copper',
//     '17'
// ]);

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