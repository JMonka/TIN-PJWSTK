function factorial(n) {
    let answer = 1;
    if (n == 0 || n == 1) {
        return answer;
    } else {
        for (var i = n; i >= 1; i--) {
            answer = answer * i;
        }
        return answer;
    }
}

let n = 4;
answer = factorial(n)
console.log("Silnia z " + n + " to " + answer);
// ------------------------------------------
let factorial_recursive = function (n) {
    if (n == 0 || n == 1) {
        return 1;
    } else {
        return n * factorial_recursive(n - 1);
    }
}
let m = 4;
answer_recursive = factorial_recursive(n)
console.log("Silnia z " + n + " to " + answer);