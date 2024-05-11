function Dice(){
    let userInput=Math.floor((Math.random())*6)+1;
    let ComputerInput=Math.floor((Math.random())*6)+1;
    let image=document.getElementById("image");
    image.setAttribute("src",`Dice Image/dice${userInput}.png`);
    let result;
    if(userInput>ComputerInput)
        {
            result="User Win";
    }
    else if(userInput<ComputerInput)
        {
            result="Computer Win";
    }
    else{
        result="Draw"
    }
    document.getElementById("Result").innerHTML=result;
}
function Generate(){
    let OTP=Math.floor((Math.random())*(99999-10000))+10000;
    document.getElementById("OTP").innerHTML=OTP;
}
