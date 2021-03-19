/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/


function hasThreeVowels(string){
    let counter = 0;
    let store = string.split('');
    let vowels = 'aeiou';
    let archive = "";
    store.filter(function(el){
        if(vowels.includes(el) && !archive.includes(el)){
            counter ++;
            return archive += el;
        }

    })
    if(counter >= 3){
        return true;
    }
    else if(counter < 3){return false;}
}

console.log(hasThreeVowels('delicious'));
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}
