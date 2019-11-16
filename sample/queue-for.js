// 实现队列
// .forEach()  code 半成品
function queue(things) {
  let promise = Promise.resolve()
  things.forEach( thing => {
    promise = promise.then( () => {   // 常见错误1，这里没有赋给promise，后面的所有的.then同时触发
      return new Promise( resolve => {
        doThing(thing, () => {
          resolve()
        })
      })
    })
  })
  return promise
}

queue(['lots','of','things',... ])

