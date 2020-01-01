const object = {
  a: undefined,
  b: 1,
  c: '1',
  d: true,
  e: {},
  f: [],
  g: function() {},
  h: NaN,
  i: null
}

for (let key in object) {
  console.log(Object.prototype.toString.call(object[key]))
}

// [object Undefined]
// [object Number]
// [object String]
// [object Boolean]
// [object Object]
// [object Array]
// [object Function]
// [object Number]
// [object Null]
