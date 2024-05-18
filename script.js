
const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
function fn() {
let userNumber=parseInt(document.querySelector('input').value);
 let resultDisplay= document.getElementById('result');
if(randomNumber==userNumber){
    resultDisplay.textContent="Congratulations! You guessed the correct number!";
    console.log("Congratulations! You guessed the correct number!");
}else{
    resultDisplay.textContent="You Lose ! Play again ";
}
}
function toggleHint() {
let hintDisplay = document.getElementById('hint');
hintDisplay.classList.toggle('hidden');
if (hintDisplay.classList.contains('hidden')) {
    hintDisplay.textContent = ""; 
} else {
    hintDisplay.textContent = "The correct number is " + randomNumber;  
}
}