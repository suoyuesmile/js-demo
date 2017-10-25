// while(line = readline()) {
//     var lines = line.split(" ");
//     print(delStr(line[0], line[1]));
// }

var str = "They are students.";
var del = "aeiou";
console.log(delStr(str, del));
function delStr(str, del) {
    var strArr = str.split("");
    var delArr = del.split("");
    //console.log(strArr);
    for (var i = 0; i < delArr.length; i++) {
        for (var j =0; j < strArr.length; j++) {
            if (delArr[i] === strArr[j]) {
                strArr.splice(j, 1);
            }
        }
    }
    str = strArr.join("");
    return str;
}

