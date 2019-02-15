/**
 * ES6 相关语法
 */

// 1.let， const

// 2.箭头函数 =>

// 3.对象解构，数组解构 {} []

// 4.扩展运算符 ...
const arr = [1, 2, 3, 4]
const arr2 = [5, 6, 7, 8]
console.log([...arr, ...arr2])

// 扩展运算符省去arguments
function func(...rest) {
  console.log(rest)
}
func(1, 2, 3)

// 与解构函数一起使用、必须放最后一个
const [arr3, ...arr4] = [1, 2, 3, 4]
// const [...arr5, arr6] = [5, 6, 7, 8]
console.log(`arr3: ${arr3}`)
console.log(`arr4: ${arr4}`)

// 在对象中使用
// 合并数组
// 函数curry化
const curry = fn => {
  if (fn.length <= 1) return fn
  const generator = args =>
    args.length === fn.length ? fn(...args) : arg => generator([...args, arg])
  return generator([])
}

// 5.对象属性简写
const bar = () => ({ x: 4, y: 5, z: 6 })
const { x, y, z } = bar() // 属性名和值相同、省略属性名
console.log(`x: ${x}, y: ${y}, z: ${z}`)

// 6.方法简写
const obj = {
  func: function() {
    // code
  }
}

const obj2 = {
  func() {},
  func2() {}
}

const methods = {
  handleAdd() {},
  handleDel(id) {}
}

// 7.for...of
// for ... of遍历获取的是对象的键值,for ... in 获取的是对象的键名
// for ... in会遍历对象的整个原型链,性能非常差不推荐使用,而for ... of只遍历当前对象不会遍历原型链
// 对于数组的遍历,for ... in会返回数组中所有可枚举的属性(包括原型链上可枚举的属性),for ... of只返回数组的下标对应的属性值
const arr6 = [{ a: 1 }, { a: 2 }, { a: 3 }]
const obj3 = {}
for ({ a: obj3.a } of arr6) {
  console.log(obj3.a)
}

// 8.Promise

// 9.Module
