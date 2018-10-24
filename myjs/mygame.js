var randomNumber = Math.floor((Math.random() * 101));
// console.log(randomNumber);

var guessField = document.querySelector('.guessField');
// console.log(guessField);
// console.log(guessField.value);

var guessSubmit = document.querySelector('.guessSubmit');
// console.log(guessSubmit);

var guesses = document.querySelector('.guesses');
// console.log(guesses);

var lastResult = document.querySelector('.lastResult');
// console.log(lastResult);

var lowOrHi = document.querySelector('.lowOrHi');
// console.log(lowOrHi);


var guessCount = 1;
var resetButton;
guessField.focus();

function checkGuess() {
    // console.log('我是函数体');
    // console.log(a+b);
    // document.write('我是结论');
    // guesses.innerHTML=guessField.value;
    var userGuess = Number(guessField.value);
    console.log(typeof userGuess);
    console.log(userGuess);




    // checkGuess(1,2);

    if (guessCount === 1) {
        guesses.textContent = '上次猜的数: ';
    }
    //将用户输入的猜数接入猜数历史中，并用空格隔开
    guesses.textContent += userGuess + ' ';
    guesses.style.backgroundColor = "bule"


    if (userGuess === randomNumber) {
        lastResult.textContent = '恭喜你！猜对了！';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();

    }
    else if (guessCount === 10) {

        lastResult.textContent = '!!!GAME OVER!!!';

        lowOrHi.textContent = '';

        setGameOver();
    }
    else {

        lastResult.textContent = '你猜错了！';

        lastResult.style.backgroundColor = 'red';

        if (userGuess < randomNumber) {

            lowOrHi.textContent = '刚才你猜低了！';
        } else if (userGuess > randomNumber) {

            lowOrHi.textContent = '刚才你猜高了！';
        }
    }
    guessCount++;
    //清空文字区  
    guessField.value = '';
    //文字输入区获得焦点
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);


//设置游戏结束的状态
function setGameOver() {

    //阻止玩家继续猜测
    //显示控制允许玩家继续重新开始游戏
    // var resetButtonP=document.querySelector("div.resultParas p:last-child");
    // console.log(resetButtonP);
    // resetButtonP.style.display="block";


    guessField.disabled = true;
    //禁用文本输入框
    guessSubmit.disabled = true;
    //禁用确定按钮
    resetButton=document.createElement('button');
    //创建button元素，button为html按钮的标签名
    resetButton.textContent='开始新游戏';
    //为新生成的元素resetButton设置文本内容
    document.body.appendChild(resetButton);
    //将resetButton作为boby的小孩加入页面
    resetButton.addEventListener('click,resetGame');
    //为resetButton设置单击事件的侦听器


}