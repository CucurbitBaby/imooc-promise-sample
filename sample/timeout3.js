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
        

        // return new Promise(resolve => {       // 直接return() 连着的.then才会被执行
        //   setTimeout(() => {
        //       console.log('Mr.Laurence');
        //       resolve('Merry Xmas');          // 注意这里的resole有没有被执行
        //   }, 2000);
        // })
        // .then(value => {
        //   console.log(value)                   // 上面直接return()  这里才会被执行哦
        //   // return new Promise(resolve => {   
        //   //   setTimeout(() => {
        //   //       resolve('hello');           // 继续return Promise外面连着的.then才不会是undefined
        //   //   }, 2000);
        //   // })
        // })
        return false;   // 没有return false,就是undefined
    })
    .then( value => {
        console.log(value + ' world');
      //   return new Promise(resolve => {
      //     resolve('我看看我传过去没有');
      // });
    })
    // .then( value => {
    //   console.log(value + ' 我看看自己执行了没有');   // 注意这里的.then是哪一个Promise的哦
    // })

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