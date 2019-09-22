// 实现队列
// .reduce()  code 半成品
function queue(things) {
  return things.reduce( (promise, thing) => {
    return promise.then( () => {
      return new Promise( resolve => {
        doThing(thing, () => {
          resolve()
        })
      })
    })
  }, Promise.resolve())
}

queue(['lots','of','things',... ])



// 常见错误2： Promise实例创建后，会立刻运行执行器代码，所以这个无法达成队列效果
function queue(things) {
  return things.reduce( (promise, thing) => {
      return step =  new Promise( resolve => {
        doThing(thing, () => {
          resolve()
      })
    })
  }, Promise.resolve())
}