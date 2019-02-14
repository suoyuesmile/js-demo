console.log('start')

Promise.all([1, 2, 3])
  .then(all => {
    console.log('1: ', all)
    return Promise.all([
      function() {
        console.log('ooxx')
      },
      'xxoo',
      false
    ])
  })
  .then(all => {
    console.log('2: ', all)
    let p1 = new Promise(resolve => {
      setTimeout(() => {
        resolve('p1')
      }, 1200)
    })
    let p2 = new Promise(reject => {
      setTimeout(() => {
        reject('p2')
      }, 1000)
    })
    let p3 = new Promise(reject => {
      setTimeout(() => {
        reject('p3')
      }, 3000)
    })
    return Promise.all([p1, p2, p3])
  })
  .then(all => {
    console.log('all: ', all)
  })
  .catch(err => {
    console.log(err)
  })
