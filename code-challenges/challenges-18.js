'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// Given a string find the length of the middle word in the sentence
//
// Ex:
// Input: "You can't handle the truth!"
// Output: 6
//
// Input: "You're gonna need a bigger boat"
// Output: 1
//

const wordLength = (str) => {
    let arr = str.split(" ")
    let  word = arr[Math.floor(arr.length/2)]
    return word.length
}
// -------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
//
// Write a function that takes two strings and checks if the two strings contain the same combination of letters
//
// Ex:
// Input: "dad", "add"
// Output: true
//
// Input: "dad", "aadd"
// Output: false
//
// Input: "table", "label"
// Output: false
//
// Input: "cat", "rat"
// Output: false

const wordLetters = (str1, str2) => {
    let obj1={}
    let obj2={}
    for(let i of str1.split("")){
        obj1[i]?obj1[i]+=1:obj1[i]=1
    }
    for(let i of str2.split("")){
        obj2[i]?obj2[i]+=1:obj2[i]=1
    }
    if (str1.split("").length !== str2.split("").length) {
        return false;
    }
    for (let i in obj1) {
        if (obj1[i] !== obj2[i]) {
        return false;
        }
    }
    return true;
}


// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Optional:
//
// Write a function that takes an integer and a sorted array
// The function returns the index of the integer in the array
// If the integer was not there, the function returns where it could have been
//
// Ex:
// Input: [1,3,5,6], 5
// Output: 2
//
// Input: [1,3,5,6], 2
// Output: 1
//
// Input: [1,3,5,6], 7
// Output: 4
//

const targetIndex = (arr, int) => {
    let index = arr.indexOf(int)
    if(index!=-1) return index
    for(let i=0;i<arr.length;i++) if(arr[i]<int && (arr[i+1] ? arr[i+1]>int : true)) return i+1; 
    
}
// -------------------------------------------------------------------------------------------------------

module.exports = { wordLength, wordLetters, targetIndex };