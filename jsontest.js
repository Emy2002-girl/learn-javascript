fetch((jsontest.json))
.then((response)=>response.json())
.then((data)=>{
    const selectNumber = document.getElementById("selectnumber");
    data.numeros.forEach((number) => {
        const option = document.createElement("option");
        option.value = number;
        option.textContent = number;
        selectNumber.appendChild(option);
    });
})
.catch((error)=>console.log("error loading",error));

document.getElementById("calcul").addEventListener("click",()=>{
    const numberSelect = parseFloat(document.getElementById("selectnumber").value);
    const option = parseFloat(document.getElementById("operation"))
})