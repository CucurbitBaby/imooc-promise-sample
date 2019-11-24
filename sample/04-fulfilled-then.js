// 假如一个Promise已经完成了，再.then()会怎样？
// https://www.imooc.com/video/16615


console.log('start');

let promise = new Promise(resolve => {
    setTimeout(() => {
        console.log('the promise fulfilled');
        resolve('hello, world');
    }, 1000);
});

setTimeout(() => {
    promise.then( value => {
        console.log(value);
    });
}, 3000);


/*
Promise作为队列最为重要的一个热性：
   在任何一个地方生成了一个Promise队列之后，可以把它作为一个变量传递到其他的地方
   如果操作是一个很明显的队列状态,先进先出的状态,可以在它(Promise)追任意多的一个.then,
   不管前面的Promise执行完成还是未完成，都会按照队列顺序执行.then

//*/