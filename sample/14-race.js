// Promise.race()
// https://www.imooc.com/video/16627


console.log('start');

let p1 = new Promise(resolve => {
    // 这是一个长时间的调用
    setTimeout(() => {
        resolve('I\'m P1');
    }, 10000);
});
let p2 = new Promise(resolve => {
    // 这是个稍短的调用
    setTimeout(() => {
        resolve('I\'m P2');
    }, 2000)
});
Promise.race([p1, p2])
    .then(value => {
        console.log(value);
    });


/*
Promise.race()类似Promise.all(),区别在于它有任意一个完成就算完成。
    Promise.race()接收到的promise数组当中，只要有一个完成，那么这个Promise.race()这个返回的新的Promise实例就算是完成了

start
I'm P2
此时进程还没有执行完哦,但是Promise.race()其实已经执行完了
    常见用法： 把异步操作和定时器放在一起
              如果定时器先触发，就认为超时，告知用户

//*/    

