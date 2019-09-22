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