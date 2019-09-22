// 使用`Promise.all()`包装多个Promise实例
// https://www.imooc.com/video/16634



console.log('here we go');
Promise.all([1, 2, 3])      // 这三个值全是数字，就会直接then到下一步
    .then( all => {
        console.log('1：', all);
        return Promise.all([ function () {  // 一个函数，string，bool还是直接下一步
            console.log('ooxx');
        }, 'xxoo', false]);
    })
    .then( all => {
      console.log('2：', all);
      let p1 = new Promise( resolve => {
          setTimeout(() => {
              resolve('I\'m P1');
          }, 1500);
      });
      let p2 = new Promise( (resolve, reject) => {
          setTimeout(() => {
              resolve('I\'m P2');
          }, 1450);
      });
      return Promise.all([p1, p2]);   // 这就不一样了哦，但是没有reject还是下一个.then
  })
    .then( all => {
        console.log('3：', all);
        let p1 = new Promise( resolve => {
            setTimeout(() => {
                resolve('I\'m P1');
            }, 1500);
        });
        let p2 = new Promise( (resolve, reject) => {
            setTimeout(() => {
                // resolve('I\'m P2');
                reject('I\'m P2');
            }, 1000);
        });
        let p3 = new Promise( (resolve, reject) => {
            setTimeout(() => {
                // resolve('I\'m P3');
                reject('I\'m P3');
            }, 3000);
        });
        return Promise.all([p1, p2, p3]);   // 
    })
    .then( all => {
        console.log('all', all);
    })
    .catch( err => {
        console.log('Catch：', err);
    });


    /*
    Promise.all()
    它接收一个数组作为参数
    数组里面可以是Promise对象，也可以是别的，只有Promise对象才会等待状态改变

    当所有子Promise都完成，该Promise完成，返回值是全部值的数组

    有任何一个失败，该Promise失败，返回值是第一个失败的子Promise的结果

    
    
    */