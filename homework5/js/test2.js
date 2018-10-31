//获取元素
//通过CSS选择器来获取document.querySelector  
// var img4=document.querySelector('#images a:nth-child(4)');
// //通过ID
// var img4=document.getElementById('images').children[4];
// //通过类名
// var img4=document.getElementsByClassName('hiddenImg')[3];
// //通过标签名
// var img4=document.getElementsByTagName('a')[4];
// console.log(img4);

//获取一组带超链接的图像
var imagesA=document.getElementById("images").children;

//获取一组文本
// var txtList=document.querySelectorAll(".txt-box>li")
var txtList = document.querySelector(".txt-box").children;


// console.log(imagesA);


//通过更换CCSS类名来实现
//26行隐藏
// imagesA[0].style.display="none";
// //30行显示
// imagesA[4].style.display="block";

//利用计时器间隔1s,显示1张图像，其余图像隐藏
//初始化当前显示的图片/文本编号
var currentNo=0;
const nodeLength=8;

//计时器换片函数，间隔1S被调用,显示1张图像，其余图像隐藏。文本轮流高亮
function changeImg()
{
//排他原理，先去掉同类，再突出自己
for(var i=0;i<nodeLength;i++)
 {
     // 同类图片透明度0（.hiddenImg)
    imagesA[i].className="hiddenImg";
    //同类文本设置正常非高亮
    txtList[i].className="txtItem normalColor";

  
 

    //再突出自己,当前图片透明度1(.displayImg)
     imagesA[currentNo].className="displayImg";
     txtList[currentNo].className="txtItem heighlightColor";
 }
 }
    //换个元素，为下一个计时器调用做准备
    // if(currentNo<7){currentNo++;}
    // else{currentNo=0;}

    //  console.log(currentNo);
    function leftImg()
    {
        if(currentNo>0)
        {
            currentNo--;
        }
        else{
            currentNo=7;
        }
    }
    function rightImg()
    {
        if(currentNo<7)
        {
            currentNo++;
        }
        else{
            currentNo=0;
        }
    }

//网页加载后启动定时器，每隔1秒调用changeImgGo（）换片
var timer=window.setInterval(rightImgGo,1000)

//定时器移入移出暂停启动按钮
//鼠标移出后移除定时器
function stopChange()
{
    window.clearInterval(timer)
}
//鼠标移入后重设定时器
function startChange()
{
    timer=window.setInterval(rightImgGo,1000);
}
//获取sliderDIV以注册移入移出事件
var sliderDiv=document.querySelector(".slider");

// console.log(sliderDiv);
//为sliderDIV注册移入移出事件
sliderDiv.addEventListener('mouseover',stopChange);
sliderDiv.addEventListener('mouseout',startChange);


// 为所有文本Li注册鼠标移入事件，移入之后，当前li的高亮，跳转到对应的图片

for(var i=0;i<txtList.length;i++)
{
    txtList[i].addEventListener('mouseover',gotoImg);
    txtList[i].no=i;
    // console.log(txtList[i].no);

}
function gotoImg()
{
//获取当前显示图像的编号/文本编号  this是当前事件发生的文体
//  console.log(this.no);
 currentNo=this.no;
 changeImg();
}

var leftButton=document.querySelector('.leftButton');
var rigetButton=document.querySelector('.rigetButton');

leftButton.addEventListener('click',leftImgGo);
rigetButton.addEventListener('click',rightImgGo);


function leftImgGo(){
    leftImg();
    changeImg();
}

function rightImgGo(){
    rightImg();
    changeImg();
}
