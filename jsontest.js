fetch("jsontest.json")
.then((response) => response.json())
.then((data) => {
    const selectNumber = document.getElementById("selectnumber");
    data.numbers.forEach((number) => {
        const option = document.createElement("option");
        option.value = number;
        option.textContent = number;
        selectNumber.appendChild(option);
    });
})
.catch((error) => console.error("loading error", error));
let myarray = document.createElement("div");
document.getElementById("calcul").addEventListener("click", () => {
    // Vérifier si aucune opération n'a été choisie
    const selectedOperation = document.querySelector("input[name='operation']:checked");
    if (!selectedOperation) {
        alert("Please select an operation");
        return;  // Empêche l'exécution du reste du code
    }

    const selectNumber = parseFloat(document.getElementById("selectnumber").value);
    const userInput = parseFloat(document.getElementById("userInput").value);
    const operation = selectedOperation.value;

    if (isNaN(userInput)) {
        alert("Enter a valid number");
        return;
    }

    let result;
    switch (operation) {
        case "add":
            result = selectNumber + userInput;
            break;
        case "subtract":
            result = selectNumber - userInput;
            break;
        case "multiple":
            result = selectNumber * userInput;
            break;
        case "div":
            if (userInput === 0) {
                alert("Cannot divide by zero");
                return;
            }
            result = selectNumber / userInput;
            break;
        default:
            result = 0;
    }
    document.getElementById("result").textContent = result;
});
