// async/await
// https://www.imooc.com/video/16631


function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 2000);
    });
}

async function f1() {
    var x = await resolveAfter2Seconds(10);
    console.log(x); // 10
}
f1();   // f1()这样去调用异步函数的时候 返回值也是一个Promise


// async用来表示函数是异步的，定义的函数会返回一个promise对象，可以使用then方法添加回调函数。
//    既然async 定义的方法返回的是 Promise对象。 用返回Promise的方式，await也可以获取数据，并不一定要是定义的async方法await才能获取数据

// await 可以理解为是 async wait 的简写。await 必须出现在 async 函数内部，不能单独使用。
//    await 阻塞的功能 ，把异步改成一个同步
