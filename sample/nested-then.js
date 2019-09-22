// 嵌套.then()
// https://www.imooc.com/video/16618

/*

console.log('start');
new Promise( resolve => {
    console.log('Step 1');
    setTimeout(() => {
        resolve(100);
    }, 1000);
})
    .then( value => {

        // console.log('看看我获取的value是：',value)      // 100

        return new Promise(resolve => {
            console.log('Step 1-1');
            setTimeout(() => {
                resolve(110);
            }, 1000);
        })
            .then( value => {
                console.log('Step 1-2');
                // console.log('Step 1-2的value:',value)   // 110
                // return value + 10;
                return value
            })
            .then( value => {
                console.log('Step 1-3');
                // console.log('Setp 1-3的value:',value)   // 120
                // return value + 10;
                return value
            });
    })
    .then(value => {
        console.log(value);           // 130
        console.log('Step 2');
    })

//*/




    // 嵌套.then()
// https://www.imooc.com/video/16618

console.log('start');
new Promise( resolve => {
    console.log('Step 1');
    setTimeout(() => {
        resolve(100);
    }, 1000);
})
    .then( value => {

        // console.log('看看我获取的value是：',value)      // 100

        return new Promise(resolve => {
            console.log('Step 1-1');
            setTimeout(() => {
                resolve(110);
            }, 1000);
        })
    })
    .then( value => {
        // setTimeout(()=>{
        //   console.log('Step 1-2');
        // },1000)

        console.log('Step 1-2');
        // console.log('Step 1-2的value:',value)   // 110
        return value + 10;
        // setTimeout(()=>{
        //   return value + 10;       // 这同步的方式执行的，如果用定时器 下面就是NaN
        // },1000)
        // return value

        // return new Promise(resolve=>{
        //   setTimeout(()=>{
        //     return value + 10;      // 就不会向下执行了？
        //     // resolve(value + 10)        // 这样下面会获取到
        //   },1000)
        // })
        // .then( value => {
        //   console.log('向下执行了么',value)  //就是不执行了 why?  应为没有调用resolve
        // })
    })
    .then( value => {
        console.log('Step 1-3');
        // console.log('Setp 1-3的value:',value)   // 120
        return value + 10;
        // return value
    })
    .then(value => {
        console.log(value);           // 130
        console.log('Step 2');
    })

/*

因为.then()返回的还是Promise实例，
会等里面的.then()执行完，在执行外面的.then()。
对于我们来说，此时最好将其展开，会更好读。

*/