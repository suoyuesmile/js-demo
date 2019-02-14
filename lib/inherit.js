// 组合继承

// 父类型
function Person(name) {
  this.name = name
  this.nameGroup = ['xiao', 'ai']
}

// 父类型原型方法
Person.prototype.getName = function() {
  return this.name
}
Person.prototype.addName = function() {
  this.nameGroup.push(this.name)
}

// 子类型
function SubPerson(name, gender) {
  // 构造继承
  Person.call(this, name)
  // 自己属性
  this.gender = gender
}

// 原型链继承
SubPerson.prototype = new Person()
// 修正构造属性
SubPerson.prototype.constructor = SubPerson
// 子类型原型方法
SubPerson.prototype.sayBye = function() {
  console.log('bye')
}

// 实例化
var subperson1 = new SubPerson('suo', 'male')
var subperson2 = new SubPerson('yue', 'female')

// 测试
subperson1.addName()
console.log(subperson1.getName())
console.log(subperson1.nameGroup)
console.log(subperson2.getName())
console.log(subperson2.nameGroup)
subperson1.sayBye()
subperson2.sayBye()

// 输出
// suo
// ["xiao", "ai", "yue"]
// yue
// ["xiao", "ai"]
// bye
// bye
