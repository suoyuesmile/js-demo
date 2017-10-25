var originStr = "aaabbbccc";

function unique(str) {
    var strArr = str.split("");
    var memArr = [];
    memArr.push(strArr[0]);
    var i;
    for (i = 1; i < strArr.length ; i++) {
        if (strArr[i] != strArr[i-1]) {
            memArr.push(strArr[i]);
        }
    }
    str = memArr.join("");
    return str;
}

console.log(unique(originStr));
