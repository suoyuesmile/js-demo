var originArr = [2, 3, 5, 7, 1, 4, 6, 9, 8, 0];

function quickSort(arr) {
    // 1.平凡解
    if (arr.length <= 1){
        return arr;
    }

    // 2.确定轴点
    var pivotIndex = Math.floor((arr.length) / 2);
    var pivot = arr.splice(pivot, 1)[0];

    // 3.分组
    var leftArr = [], rightArr = [];
    for (var i = 0; i < arr.length; i++) {

        if(arr[i] < pivot) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }
    
    // 4.递归
    return quickSort(leftArr).concat(pivot, quickSort(rightArr));
}

console.log(quickSort(originArr));