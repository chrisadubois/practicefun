


const factorial = (n) => {
    // base case
    if (n === 1) return 1;
    // break into small problem
    const subProblem = n - 1;
    // find the result of the continuously smaller problem
    const result = factorial(subProblem);
    // based on mathematical definition
    return n * result 
}

console.log(factorial(3));