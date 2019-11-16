// Promise的设计
// https://www.imooc.com/video/16612

new Promise(
    /* 执行器 executor */
    function (resolve, reject) {
        // 一段耗时很长的异步操作

        resolve(); // 数据处理完成

        reject(); // 数据处理出错
    }
)
    .then(function A() {
        // 成功，下一步
    }, function B() {
        // 失败，做相应处理
    });

/*
Promise 是一个代理对象，它和原先要进行的操作并无关系。
它通过引入多个回调，避免更多的回调


Promise有3个状态
    pendding  [待定]    初始状态(实例化时)
    fulfilled [实现]    操作成功(调用resole())
    rejected  [被否决]  操作失败

Promise实例一经创建，执行器立即执行。

Promise状态发生改变，就会(立刻)触发.then() 里的响应函数处理后续步骤
    .then{第一个处理函数resole,第二个处理函数reject}
Promise状态已经改变，不会在变。

 
//*/

