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
                return value
            })
            .then( value => {
                console.log('Step 1-3');
                return value
            });
    })
    .then(value => {
        console.log(value);           // 110
        console.log('Step 2');
    })
    // start
    // Step 1

    // Step 1-1 

    // Step 1-2
    // Step 1-3
    // 110
    // Step 2

//*/


/*

因为.then()返回的还是Promise实例，
外层的.then()会等里面的.then()执行完，在执行外面的.then()。
对于我们来说，此时最好将其展开，会更好读。

*/


//*

console.log('start');
new Promise( resolve => {
    console.log('Step 1');
    setTimeout(() => {
        resolve(100);
    }, 1000);
})
    .then( value => {
        return new Promise(resolve => {
            console.log('Step 1-1');
            setTimeout(() => {
                resolve(110);
            }, 1000);
        })
    })
    .then( value => {
        console.log('Step 1-2');
        return value
     
    })
    .then( value => {
        console.log('Step 1-3');
        return value
    })
    .then(value => {
        console.log(value);           // 130
        console.log('Step 2');
    })

//*/

