var staircase = function (n) {
    for (var i = 1; i <= n; i++) {
        var iterationArray = genArray(n - i, i);
        typeOut(iterationArray.join(""));
    }
};
var genArray = function (empty, hash) {
    var finalArray = [];
    for (var i = 0; i < empty; i++) {
        finalArray.push(" ");
    }
    for (var i = 0; i < hash; i++) {
        finalArray.push("#");
    }
    return finalArray;
};
var typeOut = function (text) {
    console.log(text);
};
var test1 = 6;
var test2 = 9;
staircase(test1);
staircase(test2);
