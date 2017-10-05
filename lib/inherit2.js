// 寄生组合继承

// 父类型
function Person(name) {
    this.name = name;
    this.nameGroup = ["xiao", "ai"];
}

// 父类型原型方法
Person.prototype.getName = function() {
    return this.name;
}
Person.prototype.addName = function() {
    this.nameGroup.push(this.name);
}

// 子类型
function SubPerson(name, gender) {

    // 构造继承
    Person.call(this, name);
    // 自己的属性
    this.gender = gender;
}

// 原型模式
function createObj(o) {
    function P() {};
    P.prototype = o;
    return new P();
}

// 寄生模式
function inheritPrototype(parent, son) {
    var prototype = createObj(parent.prototype);
    prototype.constructor = son;
    son.prototype = prototype;
}

// 执行寄生模式
inheritPrototype(Person, SubPerson);

// 添加子类型原型函数
SubPerson.prototype.sayBye = function() {
    console.log("bye");
}

// 实例化
var subperson1 = new SubPerson("suo", "male");
var subperson2 = new SubPerson("yue", "female");

// 测试
subperson1.addName();
console.log(subperson1.getName());
console.log(subperson1.nameGroup);
console.log(subperson2.getName());
console.log(subperson2.nameGroup);
subperson1.sayBye();
subperson2.sayBye();

// 输出
// suo
// ["xiao", "ai", "yue"]
// yue
// ["xiao", "ai"]
// bye
// bye
