function sum(){
    const number=document.getElementById("number").value;
    let arr=number.split(",");
    console.log(arr);
    let my_arr=arr.map((n)=>{
        return Number(n)
    })
    let sum=0;
    my_arr.map((element)=>{
        sum=sum+element;
    })
    alert(sum);
}