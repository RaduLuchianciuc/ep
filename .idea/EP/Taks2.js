function isPrime(num) {
    if (num <= 1) return false;




    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++)   {
        if (num % i === 0) return false;
    }


    return true;
}
console.log(isPrime(7));
console.log(isPrime(10));
console.log(isPrime(2));
