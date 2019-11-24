// .catch() + .then()
// https://www.imooc.com/video/16621



console.log('here we go');

new Promise(resolve => {
    setTimeout(() => {
        resolve();
    }, 1000);
})
    .then( () => {
        console.log('start');
        throw new Error('test error');
    })
    .catch( err => {
        console.log('I catch：', err);

        // 下面这一行的注释将引发不同的走向
        // throw new Error('another error');
    })
    .then( () => {
        console.log('arrive here');
        // return 'test'  没有意义
        // return new Promise( resolve => {
        //     resolve('哈哈哈 有意义了')
        // })
    })
    .then( (value) => {
        console.log('... and here');
        // console.log('... and here'+ value);  // 没有意义

    })
    .catch( err => {
        console.log('No, I catch：', err);
    });


    // 强烈建议在所有队列最后都加上一个.catch(),以避免漏掉处理造成意向不到的问题。

// I catch ..
// arrive here
// ... and here

// catch返回的也是一个promise实例, 而且其中没有抛出错误的话，它返回的Promise实例也是fulfilled状态