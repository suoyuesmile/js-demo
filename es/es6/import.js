import { x } from './module.js'
import y from './module.js'

console.log(x, y)

// 路由懒加载技术
import('./module.js').then(res => {
  console.log(res)
})
