function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
}

let result = palindrome("Ada jaja jada") ? "jest" : "nie jest";
console.log(`Podany ciąg znaków ${result} palindromem`);