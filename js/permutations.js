// Q: find all the permutations of a given string

/*
    We’re taking the string (“DOG”), and iterating through it one letter at a time.
    We then take the remaining letters, and iterate through those remaining ones, one letter at a time. -- recursion
    When we’re down to one letter, we add it to that first letter we took a look at.
    We keep doing this until we’ve done this with all letters.
*/

/*

Let’s take the first letter of our string in put it in our memory: D
Now, let’s take the remaining letters: O, G
Let’s make one word by taking the remaining letters, and then add them to our first letter, one by one: D+ OG, and D+ GO. So we now have 2 permutations: DOG, and DGO.
Let’s move on to the second letter: O, and take the remaining letter and set them aside: D and G.
Let’s make another permutation of those: O + DG, and O + GD. Now we have 4 permutations: DOG, DGO, ODG, OGD.
Now let’s tackle the last letter: G. And set aside the remaining letters: D and O.
Let’s make permutation of that: G + DO, and G + OD. Now we have 6 permutations: DOG, DGO, ODG, OGD, GDO, GOD.
We’d now just have to return all these combinations in an array.

*/

const permutations = (s) => {
    const results = permutationHelper(s);
    return results;
}

const permutationHelper = (str) => {
    if (str.length === 1) return [str] // nothing left to permute
  
    let all = [] // create a storage for remaining characters 
    for (let i = 0; i < str.length; i++) { // each character
      const currentLetter = str[i] // grab the main letter
      const eitherSide = str.slice(0,i) + str.slice(i+1) // either side of the main letter
      const permsOfRemainingLetters = permutationHelper(eitherSide) // recursion build up the next bits

      permsOfRemainingLetters.forEach(subPerm => { // root 
        all.push(currentLetter + subPerm) // build up a new string
      })  
    }
    return all;
}

const test = 'dog';

console.log(permutations(test));


