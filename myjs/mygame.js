var randomNumber=Math.floor((Math.random()*101));
// console.log(randomNumber);

var guessField=document.querySelector('.guessField');
// console.log(guessField);
// console.log(guessField.value);

var guessSubmit=document.querySelector('.guessSubmit');
// console.log(guessSubmit);

var guesses=document.querySelector('.guesses');
// console.log(guesses);

var lastResult=document.querySelector('.lastResult');
// console.log(lastResult);

var lowOrHi=document.querySelector('.lowOrHi');
// console.log(lowOrHi);


var guessCoutn=1;
var resetButton;
guessField.focus();

function checkGuess()
{
    // console.log('我是函数体');
    // console.log(a+b);
    // document.write('我是结论');
    // guesses.innerHTML=guessField.value;
    guesses.textContent+=guessField.value+" ";
    guesses.style.backgroundColor="blue"
}

guessSubmit.addEventListener('click',checkGuess);
// checkGuess(1,2);
