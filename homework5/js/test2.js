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
// console.log(imagesA);


//通过更换CCSS类名来实现
//26行隐藏
// imagesA[0].style.display="none";
// //30行显示
// imagesA[4].style.display="block";

//利用计时器间隔1s,显示1张图像，其余图像隐藏
var currentNo=0;
function changeImg()
{
//排他原理，先去掉同类，再突出自己

  for(var i=0;i<imagesA.length;i++)
  {
      imagesA[i].className="hiddenImg";
    //   console.log(imagesA[i]);
  }
    //再突出自己
    imagesA[currentNo].className="displayImg"

    //换个元素，为下一个计时器调用做准备
    if(currentNo<7){currentNo++;}
    else{currentNo=0;}

    // console.log(currentNo);

}
var timer=window.setInterval(changeImg,1000)

//定时器移入移出暂停启动按钮

function stopChange()
{
    window.clearInterval(timer)
}
function startChange()
{
    timer=window.setInterval(changeImg,1000);
}
var imagesDiv=document.getElementById("images");
console.log(imagesDiv);
imagesDiv.addEventListener('mouseover',stopChange);
imagesDiv.addEventListener('mouseout',startChange);
