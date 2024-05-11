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
function passwordGenerate(){
    let password="";
    for(let i=0;i<8;i++)
    {
    let ASCII=Math.floor(Math.random()*(90-64))+64;
    let convert=String.fromCharCode(ASCII);
    password=password+convert;
    }
    console.log(password)
    document.getElementById("Password").innerHTML=password; 
}