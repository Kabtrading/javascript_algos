// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
    // -------Solution 1 ---------//
    // let revStr = '';
    // for(let i = str.length - 1; i >= 0; i--){
    //     revStr = revStr + str[i];
    // }
    
    // return revStr;

    // ------- Sol 1 V2 ------- //
    //  let revStr = '';
    //  for(let i = 0; i <= str.length - 1; i++){
    //      revStr = str[i] + revStr;
    //  }

    //  return revStr;
    
    //------- solution 2 -----------//
    // return str.split('').reverse().join('');

    //------- solution 3 -----------//

    // let revString = '';
    // for(let char of str) {
    //     revString = char + revString;
    // }
    // return revString;

    //------- solution 4 -------//
    // let revString = '';
    // [...str].forEach((char) => revString = char + revString)

    // return revString


    //------ solution 5 reduce-----//
    return [...str].reduce((revString, char) => char + revString)
    


}



// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
    //------ solution 1 ------//
    const revString = [...str].reverse().join('')
    return revString === str
}



// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
    const revInt = int.toString().split('').reverse().join('')
    return parseInt(revInt) * Math.sign(int);
}



// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
    ///--- ES6 solution---///
    return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')


    //----solution 2 ----////
    // const strArr = str.toLowerCase().split(' ')
    // for (let i = 0; i < strArr.length; i++){
    //     strArr[i] = strArr[i].substring(0,1).toUpperCase() +
    //     strArr[i].substring(1)
    // }
    // return strArr.join(' ')

    //---- solution 3 REGEXP ---///
    // return str.replace(/\b[a-z]/gi, (char) => char.toUpperCase())
}



// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
    //------solution 1------//
    const charMap = {}
    let maxNum = 0
    let maxChar = ''
    str.split('').forEach(char => charMap[char] ? charMap[char]++ : charMap[char] = 1)
    
    for(let char in charMap){
        if(charMap[char] > maxNum) {
            maxNum = charMap[char]
            maxChar = char
        }
    }

    return maxChar
}



// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
    for(let i = 1; i <= 100; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log('FizzBuzz')
        } else if (i % 3 === 0){
            console.log('Fizz')
        } else if(i % 5 === 0){
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }
}



// Call Function
const output1 = reverseString('challenge 1')
const output2 = isPalindrome('madam')
const output3 = reverseInt(-1234)
const output4 = capitalizeLetters('Hello my nAme is drew beaupre')
const output5 = maxCharacter('Hellomynameisdrewbeaupretttttt')
const output6 = fizzBuzz()


console.log(output6)