// var timer=window.setInterval(changeNum,1000);


var timer;//设计计时器变量

//启动定时器函数定义
function startTimer(speed)
{
    timer=window.setInterval(changeNum,speed);
}
//调用定时器，使程序从一开始就执行变化
startTimer(1000);

//获取h2元素
var images1 = document.querySelector('#images');
var imgObj=document.getElementById('images');

console.log(images1);
console.log(iamges2);

// console.log(imgObj);
//设置当前变化的号码变量及初值
var currentNo = 0; 
// var flag = true;      

//定义变化数字函数，0-9，到达9后变化到0
function changeNum() {

    if (currentNo < 8) currentNo++;
    else currentNo = 1;
    h2Obj.innerHTML='<img src="images/0'+currentNo+'.jpg "alt=""></img>';
    //h2Obj.textContent = currentNo;//节点文本内容
    // console.log(currentNo);
}
console.log(timer);

var btnObj = document.getElementById('btnObj');
console.log(btnObj);

function startChange(){
    startTimer(500);
    btnObj.textContent="停止";
}
function stopChange(){
    window.clearInterval(timer);
    btnObj.textContent="启动";
}
btnObj.addEventListener('mouseover',stopChange);
btnObj.addEventListener('mouseout',startChange);

