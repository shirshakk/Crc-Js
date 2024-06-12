function Dice() {
  let userInput = Math.floor(Math.random() * 6) + 1;
  let ComputerInput = Math.floor(Math.random() * 6) + 1;
  let image = document.getElementById("image");
  image.setAttribute("src", `Dice Image/dice${userInput}.png`);
  let Computerimage=document.getElementById("Computerimage");
  Computerimage.setAttribute("src", `Dice Image/dice${ComputerInput}.png`);
  let result;
  if (userInput > ComputerInput) {
    result = "User Win";
  } else if (userInput < ComputerInput) {
    result = "Computer Win";
  } else {
    result = "Draw";
  }
  document.getElementById("Result").innerHTML = result;
}
function Generate() {
  let OTP = Math.floor(Math.random() * (99999 - 10000)) + 10000;
  document.getElementById("OTP").innerHTML = OTP;
}
function passwordGenerate() {
  let password = "";
  for (let i = 0; i < 8; i++) {
    let ASCII = Math.floor(Math.random() * (90 - 64)) + 64;
    let convert = String.fromCharCode(ASCII);
    password = password + convert;
  }
  console.log(password);
  document.getElementById("Password").innerHTML = password;
}
let userPoints=0;
let ComputerPoints=0;
function RPS(Input) {
    const UserInput=Input.id;
    const option=["Rock","Paper","Scissor"];
    const RandomOption=Math.floor(Math.random()*3);
    const ComputerInput=option[RandomOption];
    let result;
    if((UserInput==="Rock"&& ComputerInput==="Scissor")|| (UserInput==="Paper" && ComputerInput==="Rock")||(UserInput==="Scissor" && ComputerInput==="Paper")){
        result="User Win";
        userPoints++;
    }
    else if(UserInput===ComputerInput){
        result="Draw";
    }
    else{
        ComputerPoints++;
        result="Computer Win";
    }
    document.getElementById("Answer").innerHTML=result;
    document.getElementById("Computer").innerHTML=ComputerPoints;
    document.getElementById("User").innerHTML=userPoints;

}
function blackjack()
{
  let firstcard = Math.floor((Math.random()*13)+1)
  console.log(firstcard)
  document.getElementById("cardPic").setAttribute("src",`Playing Card/${firstcard}.png`)
  if(firstcard===10)
    {
      document.getElementById("result").innerHTML="Used Win"
    }
    else{
      document.getElementById("result").innerHTML="Try Again"
    }
}
