function reverseArray(arr) {
    let reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}



console.log(reverseArray([10, 20, 30, 40]));  // Output: [40, 30, 20, 10]
console.log(reverseArray(['x', 'y', 'z']));   // Output: ['z', 'y', 'x']