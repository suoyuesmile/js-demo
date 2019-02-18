// 9.Module
// 静态的、编译阶段运行、提升
// 自动采取严格模式
// 支持导出具名和匿名接口
const x = 10
const y = 20
export { x } // 变量的引用
export default y // 值
// 或者 export { y as default }
