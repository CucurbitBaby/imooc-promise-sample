// Promise会自动捕获内部异常，并交给rejected响应函数处理-catch捕获
// https://www.imooc.com/video/16620

console.log('here we go');
new Promise( resolve => {
    // Promise执行器里面发生错误
    setTimeout( () => {
        throw new Error('bye');      
    }, 2000);
})
    .then( value => {
        console.log( value + ' world');
    })
    .catch( error => {
        console.log( 'Error：', error.message);
    });



/*


只能捕获setTimeout的错误
我们能够捕获到的仍然是异步完成回调之后的这一部分栈信息,
没有办法确定是哪一个地方导致了这个错误  

*/
