const origin = {
  a: 1,
  b: '1',
  c: true,
  d: {
    e: 1
  },
  f: [1, 2]
}

function shadowCopy(origin) {
  let target = {}
  for (const key in origin) {
    target[key] = origin[key]
  }
  return target
}

console.log('shadowCopy:', shadowCopy(origin))