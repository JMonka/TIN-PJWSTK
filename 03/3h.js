var secondMax = function (arr) {
    var max = Math.max.apply(null, arr);
    arr.splice(arr.indexOf(max), 1);
    return Math.max.apply(null, arr);
};

var secondMin = function (arr) {
    var min = Math.min.apply(null, arr);
    arr.splice(arr.indexOf(min), 1);
    return Math.min.apply(null, arr);
};

var arr = [20, 120, 111, 215, 54, 78];

let resultSecondMax = secondMax(arr);
console.log(resultSecondMax);

let resultSecondMin = secondMin(arr);
console.log(resultSecondMin);