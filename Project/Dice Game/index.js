// var randomNumber1=Math.floor(Math.random()*6)+1;
// var randomDiceImage="dice"+randomNumber1+".png";
// var randomimage1="images/"+randomDiceImage;
// var image1=document.querySelectorAll("img")[0];
// image1.setAttribute("src",randomimage1);
// var randomNumber2=Math.floor(Math.random()*6)+1;
// var randomImage2="images/dice"+randomNumber2+".png";
// var image2=document.querySelectorAll("img")[1];
// image2.setAttribute("src",randomImage2);
function StartGame(){
let randomNumber1=Math.floor(Math.random()*6)+1;
let randomNumber2=Math.floor(Math.random()*6)+1;
console.log(document.querySelectorAll("img")[0].setAttribute("src",`images/dice${randomNumber1}.png`));
document.querySelectorAll("img")[1].setAttribute("src",`images/dice${randomNumber2}.png`);

if(randomNumber1>randomNumber2){
    var textSelector=document.querySelector("h1");
    textSelector.innerHTML="Player 1 Wins";
}
else if(randomNumber1<randomNumber2){
    var textSelector=document.querySelector("h1");
    textSelector.innerHTML="Player 2 Wins";
}
else{
    var textSelector=document.querySelector("h1");
    textSelector.innerHTML="DRAW";
}
}