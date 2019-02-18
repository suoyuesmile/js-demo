// 函数默认值

// es5
function func(a) {
  return a || 1
}

// es6
function func2(a = 1) {
  return a
}

console.log(func(), func2())

const w = 1,
  z = 2
function func3(x = w + 1, y = x + 1, z = z + 1) {
  console.log(x, y, z)
}
// func3()

// 配合解构函数
function func4({ x = 10 } = {}, { y } = { y: 10 }) {
  console.log(x, y)
}

func4({}, {})
func4(undefined, {})
func4(undefined, undefined) // 10 10
func4()
func4({ x: 1 }, { y: 2 })
