// 随堂小测试
// https://www.imooc.com/video/16619
// 假设doSomething和doSomethingElse返回的都是一个Promise实例
// 原问题地址：http://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html
// 译文地址：http://fex.baidu.com/blog/2015/07/we-have-a-problem-with-promises/
 
// 问题一
doSomething()
    .then(function () {
        return doSomethingElse();
    })
    .then(finalHandler);

// 答案
// doSomething
// |-----------|
//             doSomethingElse(undefined)
//             |------------|
//                          finalHandler(resultOfDoSomethingElse)
//                          |------------|


// 问题二
doSomething()
    .then(function () {     // 响应函数没有return 
        doSomethingElse();  // 只能看作第一个then 返回了一个空
    })
    .then(finalHandler);

// 答案
// doSomething
// |------------------|几乎同时执行
//                    doSomethingElse(undefined)
//                    |------------------|
//                    finalHandler(undefined)
//                    |------------------|


// 问题三
doSomething()
    .then(doSomethingElse())  // 采用执行的方式 传入了一个Promise实例  很有欺骗性,传的不是函数，而是一个实例
    .then(finalHandler);

// 答案
// doSomething
// |------------------|
// doSomethingElse(undefined)
// 和第一个doSomething几乎同时执行 因为在同一个栈
// |----------------------------------|
//                    因为doSomethingElse返回的是一个Promise实例，而不是一个函数 
//                    在Promise规范中，第二个then会被忽略掉
//                    finalHandler(resultOfDoSomething)  
//                    |------------------| 
//                    finalHandler侦听的完成事件是一个doSomething doSomethingElse完成时间就无关紧要了 因为不在同一队列


// 问题四
doSomething()
    .then(doSomethingElse)
    .then(finalHandler);

// 答案
// doSomething
// |-----------|
//             doSomethingElse(resultOfDoSomething)
//             |------------|
//                         finalHandler(resultOfDoSomethingElse)
//                         |------------------|
