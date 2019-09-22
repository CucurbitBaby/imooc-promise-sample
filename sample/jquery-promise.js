// 参见jqXHR
$.ajax(url, {
  dataType: 'json'
})
  .then(json => {
    // 该干啥干啥
  })

// 必须支持IE
//    只想实现异步队列: jQuery.defered
//    需要兼容所有平台： Blubird或者Promise polyfill兼容库


// Fetch API  是XMLHttpRequest的现代化替代方案
//    更友好更强大，直接返回一个Promise实例

fetch('some.json')
  .then( response => {
    return response.json()
  })
  .then( json => {
    // do something with the json
  })
  .catch( err => {
    console.log(err)
  })