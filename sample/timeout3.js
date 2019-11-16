// 先看看fulfiled-then.js
// 假如在.then()的函数里面不返回新的Promise，会怎样？
// https://www.imooc.com/video/16616

console.log('here we go');
new Promise(resolve => {
    setTimeout( () => {
        resolve('hello');
    }, 2000);
})
    .then( value => {
        console.log(value);
        console.log('everyone');
        (function () {
            return new Promise(resolve => {
                setTimeout(() => {
                    console.log('Mr.Laurence');
                    resolve('Merry Xmas');  // 注意这里的resole()没有被执行
                }, 2000);
            });
        }())                                //  立即执行函数
        
        return false;   // 没有return false,就是undefined
    })
    .then( value => {
        console.log(value + ' world');
    })

/*
here we go

hello
everyone
false world

Mr.Laurence



因为.then()返回的还是Promise实例，
会等里面的.then()执行完，在执行外面的.then()。
对于我们来说，此时最好将其展开，会更好读。


//*/