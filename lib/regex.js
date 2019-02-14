var patMail = /\w+(\.\w+)*@[a-zA-Z0-9]+(\.[a-zA-Z0-9])+/
var patPhon = /^1[3458](\d){9}$/
var patUrl = /^[a-zA-Z]+:\/\/\w+(\.\w+)+$/

console.log(patMail.test('suoyue@163.com'))
console.log(patPhon.test('13164602219'))
console.log(patUrl.test('http://suosmile.cn'))
