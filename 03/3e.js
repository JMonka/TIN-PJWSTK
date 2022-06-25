function findLongestWord(str) {
    var longestWord = str.split(' ').sort(function (a, b) { return b.length - a.length; });
    return longestWord[0];
}

let result = findLongestWord("Iga Świątek i Naomi Osaka zmierzą się w finale turnieju WTA w Miami. Będzie to dla nich druga konfrontacja w dotychczasowej karierze. Kiedy mecz Świątek - Osaka? O której godzinie mecz Świątek - Osaka?");
console.log(result);