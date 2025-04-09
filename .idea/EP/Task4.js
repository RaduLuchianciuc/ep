function countOccurrences(arr, value) {
    return arr.filter(item => item === value).length;
}

console.log(countOccurrences([5, 6, 7, 6, 8, 6], 6));
console.log(countOccurrences([10, 20, 30, 40, 50], 10));
console.log(countOccurrences([1, 1, 1, 1, 1], 1));
