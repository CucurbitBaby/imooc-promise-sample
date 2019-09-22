// 分两次，顺序依次执行
// https://www.imooc.com/video/16614]

console.log('here we go');
new Promise( resolve => {
    setTimeout( () => {
        resolve('hello');
    }, 2000);
})
    .then( value => {
        console.log(value);
        return new Promise( resolve => {
            setTimeout( () => {
                resolve('world');
            }, 1000);
        });
    })
    .then( value => {
        console.log( value + ' world');
    });

// hello
// world world