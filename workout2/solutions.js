// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
    // SOLUTION 1 - Return a single longest word
    // SOLUTION 2 - Return an array and include multiple words if they have the same length
    // SOLUTION 3 - Only return an array if multiple words, otherwise return a string
    // create filtered array
    const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g)
    
    // sort by length
    const sorted = wordArr.sort((a,b) =>  b.length - a.length)

    // If there is multiple words then make an array
    const longestWordArr = sorted.filter((word) =>  word.length === sorted[0].length)
    
    // check if more than one array value
    if(longestWordArr.length === 1) {
        return longestWordArr[0]
    } else {
        return longestWordArr
    }
}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]
function chunkArray(arr, len) {
    /*
    // solution 1
    // initialize chunked arr
    const chunkedArr = []
    // set index
    let i = 0

    // loop while index is less than array length
    while (i < arr.length){
        // Slice out from the index to the index +
        // the chunk length and push to the chunked array
        chunkedArr.push(arr.slice(i, i + len))
        // increment by chunk length
        i += len
    }
    return chunkedArr
*/
    // Solution 2
    // init chunked arr
    const chunkedArr = []

    // Loop through array
    arr.forEach((val) => {
        // get last element
        const last = chunkedArr[chunkedArr.length - 1]
        // check if there is a last, and if last length is == to the
        // chunk length
        if (!last || last.length === len) {
            chunkedArr.push([val])
        } else {
            last.push(val)
        }
    })
    return chunkedArr
}

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]
function flattenArray(arrays) {
    // Solution 1
    // return arrays.reduce((a,b) =>  a.concat(b))

    // SOlution 2
    // return [].concat.apply([], arrays)

    // solution 3
    // using the spread operator
    return [].concat(...arrays)
}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

// Helper function for this problem
formatStr = (str) => {
    return str
        .replace(/[^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('')
}
function isAnagram(str1, str2) {
    return formatStr(str1) === formatStr(str2)

}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'
function letterChanges(str) {
    let newStr = str.toLowerCase().replace(/[a-z]/gi, (char) => {
        if(char === 'z' || char === 'Z'){
            return 'a'
        } else {
            return String.fromCharCode(char.charCodeAt() + 1)
        }
    })

    newStr = newStr.replace(/a|e|i|o|u/gi, (vowel) =>  vowel.toUpperCase())

    return newStr

}

// Call Function
const output1 = longestWord('Hello there, my name is drew');
const output2 = chunkArray([1, 2, 3, 4, 5, 6, 7], 2);
const output3 = flattenArray([[1, 2], [3, 4], [5, 6], [7]]);
const output4 = isAnagram('dormitory', 'dirty room##..!!');
const output5 = letterChanges('hello therez');

// change the output to the current problem for proper output
console.log(output5);