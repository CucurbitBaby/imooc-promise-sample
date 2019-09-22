// Promise会自动捕获内部异常，并交给rejected响应函数处理-reject响应捕获
// https://www.imooc.com/video/16620

console.log('here we go');
new Promise( (resolve, reject) => {
    setTimeout( () => {
        // throw new Error()
        reject('bye');
    }, 2000);
})
    .then( value => {
        console.log( value + ' world');
        // 也就是说.then这里也发生错误的时候 .catch也能捕获
    }, 
    // value => {
    //   console.log( 'Error：', value);
    // }
    )
    .catch( error => {
      console.log('CatchError:',error)
    })
 
/*

推荐使用.catch

*/    