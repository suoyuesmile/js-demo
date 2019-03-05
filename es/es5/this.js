// function foo() {
//   foo.count++
// }

// foo.count = 0
// foo()
// console.log(foo.count)

// function foo1() {
//   this.count++
// }

// foo1.count = 0

// foo1.call(foo1)
// console.log(foo1.count)

// function foo() {
//   console.log(this.a)
// }
// function bar(fn) {
//   fn()
// }
// var obj = {
//   a: 1,
//   foo: foo
// }

// var a = 2
// bar(obj.foo)

function foo() {
  console.log(this.a)
}

var obj = {
  a: 1
}

foo.call(obj)