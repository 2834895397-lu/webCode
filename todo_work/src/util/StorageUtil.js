/*
  使用localStorage存储数据的工具模块
  1. 暴露函数
  2. 暴露对象
  向外暴露函数还是对象看你是需要向外暴露一个功能还是多个功能而定
* */
const TODOS_KEY = 'todos_key';
export default {
  saveTodos(todos) {
    //获取localStorage的值
    window.localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  },

  //往localStorage存储数据
  readTodos() {
    return JSON.parse(window.localStorage.getItem(TODOS_KEY) || '[]')
  }


}
