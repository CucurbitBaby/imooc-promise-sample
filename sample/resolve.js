// Promise.resolve()
// https://www.imooc.com/video/16625

console.log('start');

Promise.resolve()             // 第一次没有任何参数执行
    .then( (value) => {
        console.log('Step 1', value);
        return Promise.resolve('Hello');
    })
    .then( value => {
        console.log(value, 'World');
        return Promise.resolve(new Promise( resolve => {    //这里Promise.resolve返回了一个promise对象，它并不会改变这个promise对象的状态
            setTimeout(() => {
                resolve('Good');
            }, 2000);
        }));
    })
    .then( value => {
        console.log(value, ' evening');
        return Promise.resolve({
            then() {
                console.log(', everyone');
            }
        })
    })


/*
返回一个fulfilled的Promise实例, 或原始 Promise实例。
    参数为空，返回一个状态为fulfilled的Promise实例
    参数是一个跟Promise无关的值，同上，不过fulfilled的响应参数会的这个参数
    参数为Promise实例，则返回该实例，不做任何修改
    参数为thenable,立刻执行它的.then()


//*/