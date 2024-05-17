// 1 . Given a sentence, capitalize the first character of each word.
// 	input - this is javascript
// 	output - This Is JavaScript

// function capitalize(string) {
//     let arr = string.split(' ');
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
//     }
//     return arr.join(' ');
// }

// let word = "this is javascript";
// console.log(capitalize(word));


// 2) Given an array of string. Return a new boolean array. If the item at each index contains the word javascript in it. It should be true else it should be false.
// 	input - ["javascript", "react", "node"]
// 	output - [true, false, false]

// function returnNewArray(strings) {
//     let newArray = [];
//     for (let i = 0; i < strings.length; i++) {
//         newArray[i] = strings[i].includes("javascript");
//     }
//     return newArray;
    
// }

// let array = ["javascript", "react", "node"];
// console.log(returnNewArray(array));

// 3) Given a string which contains an email address, return true if the given email is valid, else return false.
// 	input - puran@navgurukul.org
// 	output - true
	
// 	input - puran@navgurukul
// 	output - false
	
// 	input - puran@gmail.com
// 	output - true


// 4. Given two strings, check if they are anagrams or not. If they are anagrams return true else return false.
// 	input - below, elbow
// 	output - true

// 	input - night, think
// 	output - false


// 5) Reverse the given sentence.
// 	input- i am learning javascript.
// 	output - tpircsavaj gninrael ma i

// function reverseSentence(string) {
//     let arr = string.split(''); 
//     arr.reverse(); 
//     return arr.join(''); 
// }

// let words = "i am learning javascript";
// console.log(reverseSentence(words)); 


// 6) Reveres the given string word by word then return the reversed string.
// 	input - Success comes to those who work hard
// 	output - hard work who those to comes Success

// function reversesent (string){
//     let arr = string.split(' ');
//     arr.reverse( );
//     return arr.join(' ');
// }
// let  words = "Success comes to those who work hard"
// console.log(reversesent(words));