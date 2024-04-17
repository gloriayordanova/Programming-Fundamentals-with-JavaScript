let myAssocArray = {
    ['John Smith']: '+1-555-490417',
    ['Ana Peters']: '+1-555-813784',
    ['Ivan Petrov']: '+1-555-420708',
};

console.log(myAssocArray);

for(let key in myAssocArray) {
    console.log(key, '->', myAssocArray[key]);
}