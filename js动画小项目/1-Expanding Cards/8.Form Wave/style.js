window.onload = function(){
    const labels = document.querySelectorAll('.form-control label')
    labels.forEach(label=>{
        label.innerHTML = label.innerText.split('').map((letter,idx)=>{
            return `<span style = "transtion-delay:${idx*50}">${letter}</span>`
        }).join('')
    })
}


// transtion-delay  切换效果
// 模板字符串是一种方便的字符串语法，允许你在字符串中嵌入表达式和变量。

// 模板字符串使用反引号 `` 作为字符串的定界符分隔的字面量
// 模板字面量是用反引号（`）分隔的字面量，允许多行字符串、带嵌入表达式的字符串插值和一种叫带标签的模板的特殊结构。