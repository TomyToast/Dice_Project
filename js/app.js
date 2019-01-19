import style from "../styles/style.scss";
document.addEventListener('DOMContentLoaded', function(){

console.log("DOM works!")

const cubic = [
    "img/dice-1.png",
    "img/dice-2.png",
    "img/dice-3.png",
    "img/dice-4.png",
    "img/dice-5.png",
    "img/dice-6.png",
];

const dice = document.getElementsByClassName('dice');
    const myDice = dice[0];
const diceBtn = document.getElementsByClassName('dice_btn');
    const myDiceBtn = diceBtn[0];
// const style = getComputedStyle(dice[0]);
// console.log(style.backgroundImage);

const randNumb = (min, max) => {
    let rand;
    rand = Math.floor(Math.random() * (max - min + 1)) + min;
    return rand;
}

let j = 1;
const myLoop = () => {
    setTimeout( () => {
        for (let i=0; i<5; i++){
            myDice.style.backgroundImage = `url(${cubic[randNumb(0,5)]})`;
        };
        j++;
        console.log(j);
        if( j < randNumb(10,1000)){
            myLoop();
        } else {
            j = 1;
        };
    }, 5);
};

    myDiceBtn.addEventListener('click', (e) => {
        e.preventDefault();
        myLoop();
    })

});