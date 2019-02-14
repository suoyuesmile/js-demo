// 转义字符转换普通字符
var unescapeHtml = (function() {
  var entity = {
    quot: '"',
    lt: '<',
    gt: '>',
    amp: '&',
    nbsp: ' '
  }

  // 利用闭包创建访问私有变量entity的特权函数，并将其返回
  return function(str) {
    return str.replace(/&([^&;]+);/g, function(a, b) {
      // a为&quot b为quot
      console.log(a)
      console.log(b)
      var r = entity[b]
      return typeof r === 'string' ? r : a
    })
  }
})()

// 普通字符转换成转义字符
var escapeHtml = (function() {
  var entity = {
    '"': 'quot',
    '<': 'lt',
    '>': 'gt',
    '&': 'amp',
    ' ': 'nbsp'
  }

  return function(str) {
    return str.replace(/[<>"&]/g, function(match) {
      return entity[match]
    })
  }
})()

// test
console.log(unescapeHtml('&lt;&gt;&amp;'))
console.log(escapeHtml('><"&'))
