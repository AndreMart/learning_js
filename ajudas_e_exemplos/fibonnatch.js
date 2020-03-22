var fibonacci_series = function (n) {
    if (n === 1) {
        return [0, 1];

    } else {
        var s = fibonacci_series(n - 1);
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s;
    }
};
console.log(fibonacci_series(4))


function fib(n) {
    if (n === 0) {
        return 0
    } else {
        if (n === 1) {
            return 1
        } else {
            return fib(n - 1) + fib(n - 2)
        }
    }
}
console.log(fib(4))