// add a property to a Object
var newObject = {}

// 1. 点号方式
newObject.prop = 'val'
var key = newObject.prop

// 2.括号方式
newObject[prop] = 'val'
var key = newObject['prop']

// 3.Object.defineProperty 方式
Object.defineProperty(newObject, 'prop')

