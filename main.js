const winGameElm = document.querySelector(".winGame");

const luckyBtnElm = document.querySelector("#luckyBtn");
const luckyNumberElm = document.querySelector(".lucky-number");
const p1Elm = document.querySelector("#p1");
const p1LuckyNumberElm = document.querySelector(".p1LuckyNumber");
const p2Elm = document.querySelector("#p2");
const p2LuckyNumberElm = document.querySelector(".p2LuckyNumber");
const resetElm = document.querySelector("#reset");


let luckyNumber = Math.floor(Math.random()*10)+1;
let p1luckyNumber = Math.floor(Math.random()*10)+1;
let p2luckyNumber = Math.floor(Math.random()*10)+1;


luckyBtnElm.addEventListener('click', ()=>{
    luckyNumberElm.textContent = luckyNumber;
});

function p1LuckyNumbers(){
    p1LuckyNumberElm.textContent = p1luckyNumber;
    if(luckyNumber == p1luckyNumber){
        winGameElm.textContent = "Player one is won the game";
        p1Elm.setAttribute('disabled', 'disabled');
        p2Elm.setAttribute('disabled', 'disabled');

    }
}
p1Elm.addEventListener('click',p1LuckyNumbers);

function p2LuckyNumbers(){
    p2LuckyNumberElm.textContent = p2luckyNumber;
    if(luckyNumber == p2luckyNumber){
        winGameElm.textContent = "Player two is won the game";
        p1Elm.setAttribute('disabled', 'disabled');
        p2Elm.setAttribute('disabled', 'disabled');
    }
}
p2Elm.addEventListener('click',p2LuckyNumbers);

resetElm.addEventListener('click',()=>{
    luckyNumberElm.textContent = 0;
    p1LuckyNumberElm.textContent = 0;
    p2LuckyNumberElm.textContent = 0;
});
