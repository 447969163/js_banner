//定义全局索引值
let index = 0;
//封装获取dom节点
let $ = (function(){
    return {
        dom(attr) {
            return document.querySelectorAll(attr)
        }
    }
})();
//图片节点
let imgs = $.dom("li");
//小圆点节点
let dots = $.dom(".item");
// ul区域节点
let ul = $.dom("ul");
//切换函数
function change (i,dom,dot) {
    //清空所有样式
    for(let i=0;i<dom.length;i++){
        dom[i].style.display = "none";
        dot[i].style.backgroundColor = "transparent";
    }
    //设置当前样式
    dom[i].style.display = "block";
    dot[i].style.backgroundColor = "red";
}

//点击左侧按钮
$.dom("a")[0].addEventListener("click",function() {
    index <= 0 ? index = imgs.length-1 : index--;
    change(index,imgs,dots);
})
//点击右侧按钮
$.dom("a")[1].addEventListener("click",function(){
    index >= imgs.length-1 ? index = 0 : index++;
    change(index,imgs,dots);
})
//自动轮播
//设置一个变量存储定时器，方便后续停止和开启
let timmer = null;
//自动轮播函数
function autoPlay () {
    timmer = setInterval(function(){
        index >= imgs.length-1 ? index = 0 :index++;
        change(index,imgs,dots);
    },1500)
}
//执行自动轮播
autoPlay();
//悬放鼠标停止轮播
ul[0].addEventListener("mouseover",function(){
    clearInterval(timmer);
})
//移开鼠标开始轮播
ul[0].addEventListener("mouseout",function(){
    autoPlay();
})
//点击按钮跳转
for (let i =0; i < dots.length; i++){
    dots[i].addEventListener("click",function(){
        index = i;
        change(index,imgs,dots);
    })
}