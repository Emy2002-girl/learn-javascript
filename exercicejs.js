fetch("exercicejs.json")
.then((response)=>response.json())
.then((data)=>{
    const selecttype = document.getElementById("selecttype");
    const selectfilm = document.getElementById("selectfilm");
    const info = document.getElementById("année");
    Object.keys(data).forEach(films=>{
       const option = document.createElement("option");
        option.value = films;
        option.textContent = films;
        selecttype.appendChild(option);
        Object.keys(data[films]).forEach(film=>{
            const option = document.createElement("option");
            option.value=film;
            option.textContent =film;
            selectfilm.appendChild(option);
        })
    })
})