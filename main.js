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
p1Elm.addEventListener('click',()=>{
    p1LuckyNumberElm.textContent = p1luckyNumber;
});
p2Elm.addEventListener('click',()=>{
    p2LuckyNumberElm.textContent = p2luckyNumber;
});
resetElm.addEventListener('click',()=>{
    luckyNumberElm.textContent = 0;
    p1LuckyNumberElm.textContent = 0;
    p2LuckyNumberElm.textContent = 0;
});
