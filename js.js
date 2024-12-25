let myAdmins=["Ahmed","Osama","Sayed","Stop","Samera"];
let myEmployees = ["Amgad","Samah","Ameer","Omar","Othman","Amany","Samia"];
let count = 0;
let i =0;
let s = 0 , n=0, r=0;
for(i=0; i<myAdmins.length ; i++){
    if(myAdmins[i] != "Stop" && myAdmins[i] != "Samera"){
        count++;
    }
};

document.write(`<div> We Have ${count} Admins</div>`);
for(let i=0; i<myAdmins.length-2 ;i++){
    document.write(`<hr>`);
    if(myAdmins[i] != "Stop" && myAdmins[i] != "Samera"){
        document.write(`<div> The Admin For Team  -${i+1} is ${myAdmins[i]}</div>`);
        document.write(`<div> Team Members</div>`);
    };
    
    
    for( let j=0;j<myEmployees.length;j++){
        if(myAdmins[i] == "Ahmed"){
            if(myEmployees[j].startsWith("A") == true){
                        s++;
                     document.write(`<div> ${s} - ${myEmployees[j]}</div>`);
                }
        }
        else if(myAdmins[i] == "Osama"){
            if(myEmployees[j].startsWith("O") == true){
                n++;
             document.write(`<div> ${n} - ${myEmployees[j]}</div>`);
        }    
}
else{
    if(myEmployees[j].startsWith("S") == true){
        r++;
     document.write(`<div> ${r} - ${myEmployees[j]}</div>`);
}
}
}
};
