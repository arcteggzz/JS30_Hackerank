function plusMinus(arr) {
    var positiveNum = 0;
    var negativeNum = 0;
    var zeroNum = 0;
    arr.forEach(function (item) {
        if (item === 0)
            zeroNum++;
        if (item > 0)
            positiveNum++;
        if (item < 0)
            negativeNum++;
    });
    typeOut((positiveNum / arr.length).toFixed(6));
    typeOut((negativeNum / arr.length).toFixed(6));
    typeOut((zeroNum / arr.length).toFixed(6));
}
var typeOut = function (text) {
    console.log(text);
};
plusMinus([1, 1, 0, -1, -1]);
