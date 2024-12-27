fetch("numbers.json")
.then((response)=>response.json())
.then((data)=>{
  const numberSelect =document.getElementById("numberSelect");
  data.numbers.forEach((number)=>{
    const option=document.createElement("option");
     option.value=number;
     option.textContent=number;
     numberSelect.appendChild(option);
  })
})
.catch((error)=>console.log("Error loading json",error));

//calcule process:
document.getElementById("calclution").addEventListener("click",()=>{
    const selectNumber = parseFloat(document.getElementById("numberSelect").value);
    const userInput = parseFloat(document.getElementById("userInput").value);
    const operation = document.querySelector('input[name="operation"]:checked').value;

    let result;
    if(isNaN(userInput)){
        alert("please enter a valid number");
        return;
    }
    switch(operation){
        case "add":
        result=selectNumber+userInput;
        break;
        case "substruct":
        result=selectNumber-userInput;
        break;
        case "Multiple" :
        result=selectNumber*userInput;
        break;
        case "division" :
        if(userInput===0){
            alert("cannot device by zero");
            return;
        }
        result=selectNumber/userInput;
        break;
        default:
            result=0;
    }
    document.getElementById("result").textContent=result;
})