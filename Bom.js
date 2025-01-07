// window.alert("Have a Good day !");
// alert("Have a good day ");

// let confirmMesg = confirm("Are you sure ?");

// console.log(confirmMesg);

// if(confirmMesg === true){
//     console.log("Action fais");
// }
// else{
//     console.log("essayer");
// }

// let PromptMesg = prompt("choice a day :","enter par 3 caractère");

//siteTimeout and clearTimeout :
 
// let counter = setTimeout(sayMsg,2000,"Imane",22);

// function sayMsg(user,age){
//     console.log(`Hello From tangier I'm ${user} ${age} years old`);
// }

// let mybtn = document.querySelector("button");

// mybtn.onclick = function(){
//     clearTimeout(counter);
// }

// setInterval(function(){
//    console.log("Have a good day");
// },1000)

// function sayGood(){
//     console.log("Have a good day Imane ");
// }

// setInterval(sayGood,1000);

// let mydiv=document.querySelector("div");

// function na9es(){
//     mydiv.innerHTML -= 1;
//     if(mydiv.innerHTML === "0"){
//         clearTimeout(counter);
//     }
// };
//  let counter =setInterval(na9es,1000);

//Open and close window :
  
// setTimeout(function(){
//    window.open("https://www.google.com","_blank","width:200,height: 40");
// },2000);

//  let mywindow = window.open("https://google.com", "_blank", "width =500,height= 500");

let btn = document.querySelector("button");
window.onscroll = function () {
    if (window.scrollY >= 500) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";  
    }
};
btn.onclick = function () {
    // window.scrollTo(0, 0);
    window.scrollTo({
        top: 10,
        left: 0,
        behavior:"smooth",
    })
    btn.style.display = "block";
}
