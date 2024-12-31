fetch("jsontest.js")
.then((response)=>response.json())
.then((data)=>{
    const selectNumber = document.getElementById("selectnumber");
    data.numbers.forEach((number) => {
        const option = document.createElement("option");
        option.value = number;
        option.textContent = number;
        selectNumber.appendChild(option);
    });
})
.catch((error)=>console.log("loading error",error));

document.getElementById("calcul").addEventListener("click",()=>{
    const selectNumber = parseFloat(document.getElementById("selectnumber"),value);
    const userInput = parseFloat(document.getElementById("userInput"),value);
    const operation = document.querySelector("input[name = `operation`]:checked").value;

    let result;
    if(isNaN(parseInt(userInput))){
        alert("enter a valid number");
        return
    }
    switch(operation){
        case "add" :
            result = selectNumber +userInput;
            break;
        case "multiple" :
            result = selectNumber *userInput;
            break;
        case "soust" :
            result = selectNumber - userInput ;
            break;
        case "div" :
            if(userInput === 0){
                alert("connot device by zero");
            }

            result = selectNumber / userInput;
            break;
            default :
            result = 0;
    }
    document.getElementById("result").textContent = result ;
})