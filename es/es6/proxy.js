// 拦截器

// let obj = {}
// obj = new Proxy(obj, {
//   set(target, key, val) {
//     console.log('oop')
//     return Reflect.set(target, key, val)
//   }
// })

// obj.foo = 'bar'

// defineProperty
let obj = {}
Object.defineProperty(obj, 'a', {
  configurable: true,
  enumerable: false,
  value: '1',
  wriable: false
})

console.log(obj.a)
obj.a = 2
Object.keys(obj)
console.log(obj.a)

let obj2 = {}
Object.defineProperty(obj2, 'b', {
  configurable: true,
  enumerable: true,
  get() {
    return 1
  }
})

console.log(obj2.b)
obj2.b = 2
console.log(obj2.b)
