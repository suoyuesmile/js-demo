function Person(name, gender) {
    // 构造的属性
    this.name = name;
    this.gender = gender;

    Person.prototype = {
        // 共享的属性
        origin: "monkey",
		
        // 共享的方法
        getName: function() {
            return this.name;
        }
    };
}

// 修正构造属性
Object.defineProperty(Person, "constructor", {
    enumerable: false,
    value: Person
});

// test
var person1 = new Person("suo", "male");
person1.getName();