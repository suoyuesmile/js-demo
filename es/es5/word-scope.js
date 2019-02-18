// 词法作用域
var a = 2,
  b = 2

function foo(a) {
  var b = a * 2
  function bar(c) {
    console.log(a, b, c)
  }
}

foo(2)

// 作用域查找到第一个匹配标示符停止称为遮蔽效应
// 全局变量被遮蔽了，可以通过 window.a 来访问
// 非全局变量被遮蔽是无法访问到的

// 欺骗词法作用域的两种方法、但是会导致性能下降

// 1.eval 字符串生成代码、运行期修改代码、严格模式不行

function foo(str, a) {
  eval(str)
  console.log(a, b)
}

var b = 2

foo('var b = 3', 1)

// 2.with 重复引用同一对象中多个属性，不需要重复引用对象本身, 实际上创建了一个新的作用，严格模式完全禁止
var obj = {
  a: 1,
  b: 2,
  c: 3
}

with (obj) {
  a = 3
  b = 4
  c = 5
}
console.log(obj)

// 存在这些改变词法作用域时，js 引擎会谨慎认为性能优化是无效的，导致运行变慢
