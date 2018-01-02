var dynamicTable = function (data, tableStyle) {
  var tableData = JSON.parse(data),
      tableArrayRes = [],
      tb,
      th,
      tr,
      td,
      thText,
      tdText,
      textNode,
      i,
      j,
      k;

  // 1.处理数据
  (function(tableData, tableArrayRes) {
    var key2Arr,
        key1Arr;
    for (i = 0; i < tableData["tbody"].length; i++) {
      key2Arr = [];
      for (j = 0; j < tableData["thead"].length; j++) {
        key1Arr = [];
        for (key in tableData["tbody"][i]) {
          if (tableData["thead"][j]["col"].indexOf(key) >= 0) {
            key1Arr.push(tableData["tbody"][i][key]);
          }
        }
        key2Arr.push(key1Arr);
      }
      tableArrayRes.push(key2Arr);
    }
  })(tableData, tableArrayRes)

  // 2.创建表
  tb = document.createElement("table");
  tb.className = tableStyle;

  // 3.创建表头
  tr = document.createElement('tr');
  for (i = 0; i < tableData["thead"].length; i++) {
    thText = tableData["thead"][i]["name"];
    textNode = document.createTextNode(thText);
    th = document.createElement('th');
    th.appendChild(textNode);
    tr.appendChild(th);
    tb.appendChild(tr);
  }

  // 4.创建表体
  for (i = 0; i < tableArrayRes.length; i++) {
    tr = document.createElement('tr');
    for (j = 0; j < tableArrayRes[i].length; j++) {
      tdText = tableArrayRes[i][j][0];
      for (k = 1; k < tableArrayRes[i][j].length; k++) {
        tdText += ',' + tableArrayRes[i][j][k];
      }
      td = document.createElement('td');
      textNode = document.createTextNode(tdText);
      td.appendChild(textNode);
      tr.appendChild(td);
    }
  tb.appendChild(tr);
  }

  // 5.生成表
  document.body.appendChild(tb);
}