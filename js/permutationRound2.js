

// break the problem into subproblem, apply the recursive call ONTO subproblems
// as the solution hits the base, unwind and combine all subsolution
const permute = (str) => {
    let results;
    // base case
    if (str.length === 1) return str;
    // iterate through each letter in the string 
    results = [];
    for (let i = 0; i < str.length; i++) {
        // break current problem into subproblems
        const firstChar = str[i];
        // get the subproblems (either side)
        const subProblems = str.slice(0, i) + str.slice(i+1, str.length);
        // recursive call on a smaller and smaller problem
        const permutations = permute(subProblems);
        // add it back to the main deal
        for (let j = 0; j < permutations.length; j++) {
            results.push(firstChar + permutations[j]);
        }
    }
    return results;
};

// permutations ability to switch chars
// return as a new array
// break into smaller strings and keep swapping

const k = 'dog';

console.log(permute(k));