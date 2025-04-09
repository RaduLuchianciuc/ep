
function objectToArray(obj) {
    let result = [];
    for (let key in obj) {
        result.push([key, obj[key]]);
    }
    return result;
}

console.log(objectToArray({color: 'blue', model: 'Tesla'}));
console.log(objectToArray({brand: 'Nike', size: 42}));

