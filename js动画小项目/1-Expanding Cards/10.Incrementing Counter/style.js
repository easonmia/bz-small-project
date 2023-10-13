window.onload = function(){
    const counters = document.querySelectorAll('.counter')
    counters.forEach(counter=>{
      counter.innerText = "0"
      const updateCounter = ()=>{
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText
        const increment = target/200
        if(c < target){
          counter.innerText = `${Math.ceil(c+increment)}`
          setTimeout(updateCounter,1)
        }else{
          counter.innerText = target
        }
      }
      updateCounter()
    })
  }

//   window.onload() 方法用于在网页加载完毕后立刻执行的操作，即当 HTML 文档加载完毕后，立刻执行某个方法。
//   window.onload() 通常用于 <body> 元素，在页面完全载入后(包括图片、css文件等等)执行脚本代码。

// document.querySelector('selector').value // selector 是 CSS 选择器
// https://www.runoob.com/w3cnote/javascript-get-the-value-of-text-input-field.html


// forEach(): 没有返回值，本质上等同于 for 循环，对每一项执行 function 函数。即map是返回一个新数组，原数组不变，forEach 是不改变原数组（尽管回调函数 callbackFn 在被调用时可能会改变原数组）。
// 不支持 continue，用 return false 或 return true 代替。
// 不支持 break，用 try catch/every/some 代替：
// 实现 break

// var arr = [1, 2, 3, 4, 5];

// arr.every(function (item) {     ？？？？？
//         console.log(item);
//         return item !== 3;
// });
// 1    
// 2
// 3
// false         


// setTimeout(要执行的代码, 等待的毫秒数)
// setTimeout(JavaScript 函数, 等待的毫秒数) 
{/* <p id="content"> 请等三秒钟!</p>  
<script>  
setTimeout("changeState()",3000 );  
function changeState(){  
    let content=document.getElementById('content');  
    content.innerHTML="<div style='color:red'>我是三秒后显示的内容！</div>";  
}  
</script> */}


//   使用 window.alert() 弹出警告框。
// 使用 document.write() 方法将内容写到 HTML 文档中。
// 使用 innerHTML 写入到 HTML 元素。
// 使用 console.log() 写入到浏览器的控制台。
