/* 实现bind */
/* 简易版，满足：
 * 绑定this
 * 传参, bind时传参和bind后再传参
 */
Function.prototype.myBind = function(context) {
  let args = [].slice.call(arguments, 1)
  let fn = this
  function func() {
    let funcArgs = [].slice.apply(arguments)
    fn.apply(context, args.concat(funcArgs))
  }
  return func
}
function test(str) {
  console.log(this, str)
}
let obj = { a: '1' }
test.bind(obj, ['哈哈哈1', '哈哈哈2'])
test.myBind(obj, ['笑嘻嘻1', '笑嘻嘻2'])
/* 完整版
 * 增加构造函数方式调用
 * 增加报错
 */
Function.prototype.mybind = function(context) {
  let args = [].slice.call(arguments, 1)
  let fn = this
  function fBound() {
    let funcArgs = [].slice.apply(arguments)
    // 当以构造函数方式调用时，bind无效，this指向func,
    fn.apply(this instanceof fBound ? this : context, args.concat(funcArgs))
  }
  // 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承绑定函数的原型中的值
  // fBound.prototype = this.prototype
  // 这一步的中转是为了当改变func.prototype时，this.prototype不受影响
  let fnop = function() {}
  fnop.prototype = this.prototype
  fBound.prototype = new fnop()
  return fBound
}