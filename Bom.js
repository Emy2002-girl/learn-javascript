// // window.alert("Have a Good day !");
// // alert("Have a good day ");
// // window.alert("Have a Good day !");
// // alert("Have a good day ");

// // let confirmMesg = confirm("Are you sure ?");
// // let confirmMesg = confirm("Are you sure ?");

// // console.log(confirmMesg);

// // if(confirmMesg === true){
// //     console.log("Action fais");
// // }
// // else{
// //     console.log("essayer");
// // }
// // if(confirmMesg === true){
// //     console.log("Action fais");
// // }
// // else{
// //     console.log("essayer");
// // }

// // let PromptMesg = prompt("choice a day :","enter par 3 caractère");

// //siteTimeout and clearTimeout :
// //siteTimeout and clearTimeout :
 
// // let counter = setTimeout(sayMsg,2000,"Imane",22);
// // let counter = setTimeout(sayMsg,2000,"Imane",22);

// // function sayMsg(user,age){
// //     console.log(`Hello From tangier I'm ${user} ${age} years old`);
// // }
// // function sayMsg(user,age){
// //     console.log(`Hello From tangier I'm ${user} ${age} years old`);
// // }

// // let mybtn = document.querySelector("button");
// // let mybtn = document.querySelector("button");

// // mybtn.onclick = function(){
// //     clearTimeout(counter);
// // }
// // mybtn.onclick = function(){
// //     clearTimeout(counter);
// // }

// // setInterval(function(){
// //    console.log("Have a good day");
// // },1000)
// // setInterval(function(){
// //    console.log("Have a good day");
// // },1000)

// // function sayGood(){
// //     console.log("Have a good day Imane ");
// // }
// // function sayGood(){
// //     console.log("Have a good day Imane ");
// // }

// // setInterval(sayGood,1000);
// // setInterval(sayGood,1000);

// // let mydiv=document.querySelector("div");
// // let mydiv=document.querySelector("div");

// // function na9es(){
// //     mydiv.innerHTML -= 1;
// //     if(mydiv.innerHTML === "0"){
// //         clearTimeout(counter);
// //     }
// // };
// //  let counter =setInterval(na9es,1000);
// // function na9es(){
// //     mydiv.innerHTML -= 1;
// //     if(mydiv.innerHTML === "0"){
// //         clearTimeout(counter);
// //     }
// // };
// //  let counter =setInterval(na9es,1000);

// //Open and close window :
// //Open and close window :
  
// // setTimeout(function(){
// //    window.open("https://www.google.com","_blank","width=200,height= 40");
// // },2000);
// // setTimeout(function(){
// //    window.open("https://www.google.com","_blank","width=200,height= 40");
// // },2000);


// //  let mywindow = window.open("https://google.com", "_blank", "width =500,height= 500");
// //  let mywindow = window.open("https://google.com", "_blank", "width =500,height= 500");

// // let btn = document.querySelector("button");
// // window.onscroll = function () {
// //     if (window.scrollY >= 500) {
// //         btn.style.display = "block";
// //     } else {
// //         btn.style.display = "none";
// //     }
// // };
// // btn.onclick = function () {
// //     // window.scrollTo(0, 0);
// //     window.scrollTo({
// //         top: 10,
// //         left: 0,
// //         behavior:"smooth",
// //     })
// //     btn.style.display = "block";
// // }

// //set :
// // window.localStorage.setItem("color","green");
// // window.localStorage.fontWeight="bold";
// // window.localStorage["backgroundColor"]="gray";

// // //get :
// // console.log(window.localStorage.getItem("fontWeight"));
// // console.log(window.localStorage.color);
// // console.log(window.localStorage["backgroundColor"]);

// // //Remove :
// // window.localStorage.removeItem("fontWeight");
// // //Remove :
// // window.localStorage.removeItem("fontWeight");

// //Remove All :
// // window.localStorage.clear();
// // document.body.style.backgroundColor=  window.localStorage["backgroundColor"]="green";
// // console.log(window.localStorage.key(0));
// //Remove All :
// // window.localStorage.clear();
// // document.body.style.backgroundColor=  window.localStorage["backgroundColor"]="green";
// // console.log(window.localStorage.key(0));

// //forEach function :
// // let mylist=document.querySelectorAll("ul li ");
// // let mydiv=document.querySelectorAll("div");
// //forEach function :
// // let mylist=document.querySelectorAll("ul li ");
// // let mydiv=document.querySelectorAll("div");

// // mylist.forEach(function(element){
// // element.onclick = function(){
// //     mylist.forEach((element)=>{
// //       element.classList.remove("active");
// //     })
// //     element.classList.add("active");
// // }
// // });
// // mylist.forEach(function(element){
// // element.onclick = function(){
// //     mylist.forEach((element)=>{
// //       element.classList.remove("active");
// //     })
// //     element.classList.add("active");
// // }
// // });

// // mydiv.forEach((element)=>{
// //     element.onclick=function(){
// //         element.style.display="none";
// //     }
// // })
// // mydiv.forEach((element)=>{
// //     element.onclick=function(){
// //         element.style.display="none";
// //     }
// // })

// // let mylist=document.querySelectorAll("ul li ");
// // let mydiv=document.querySelector(".container");
// // let mylist=document.querySelectorAll("ul li ");
// // let mydiv=document.querySelector(".container");

// // mylist.forEach((element)=>{
// //     element.addEventListener("click",(ele)=>{
// //         mylist.forEach((element)=>{
// //             element.classList.remove("active");
// //         });
// //         ele.currentTarget.classList.add("active");
// //         window.localStorage.setItem("color",ele.currentTarget.dataset.color);
// //         mydiv.style.backgroundColor = ele.currentTarget.dataset.color;
// //     });
// // });
// // mylist.forEach((element)=>{
// //     element.addEventListener("click",(ele)=>{
// //         mylist.forEach((element)=>{
// //             element.classList.remove("active");
// //         });
// //         ele.currentTarget.classList.add("active");
// //         window.localStorage.setItem("color",ele.currentTarget.dataset.color);
// //         mydiv.style.backgroundColor = ele.currentTarget.dataset.color;
// //     });
// // });

// // if(window.localStorage.getItem("color")){
// //     mydiv.style.backgroundColor = window.localStorage.getItem("color");
// //     mylist.forEach((element)=>{
// //         element.classList.remove("active");
// //     });
// //     document.querySelector(`[data-color= "${window.localStorage.getItem("color")}"]`).classList.add("active");
// // }
// // else{
// //     console.log("no")
// // }
// // if(window.localStorage.getItem("color")){
// //     mydiv.style.backgroundColor = window.localStorage.getItem("color");
// //     mylist.forEach((element)=>{
// //         element.classList.remove("active");
// //     });
// //     document.querySelector(`[data-color= "${window.localStorage.getItem("color")}"]`).classList.add("active");
// // }
// // else{
// //     console.log("no")
// // }

// //Session Storage :
// //Session Storage :

// // window.localStorage.setItem=("color","black");
// // window.sessionStorage.setItem=("color","black");  //valeur a éte svegarder dans la session

// // let myinput=document.querySelector(".name");

// // myinput.onblur = function(){
// //     window.localStorage.setItem("input",this.value);
// // }
// // myinput.onblur = function(){
// //     window.localStorage.setItem("input",this.value);
// // }

// // let myinput=document.querySelector(".input");
// // let btn=document.querySelector(".add");




// // btn.addEventListener("click",()=> {
// // let mydiv=document.querySelector(".tasks");
// // let mytask = document.createElement("input");
// // let mydelete=document.createElement("input");
// // mydelete.type="submit";
// // mydelete.value="delete";
// // mydiv.appendChild(mytask);
// // mydiv.appendChild(mydelete);
// // mytask.value=myinput.value;
// // window.localStorage.setItem("input",myinput.value);
// // myinput.value= '';
// // mydelete.addEventListener("click",()=>{
// // mytask.remove();
// // mydelete.remove();
// // window.localStorage.removeItem("input");
// // })
// // });
// // window.localStorage.setItem("input",this.value);

// // let a=1;
// // let b =2;
// // let c=3;
// // let d=4;
// // let myFriends=["safae","fati","imane","salma"];
// // [a="A",b, c]=myFriends;

// // console.log(a);
// // console.log(b);
// // console.log(c);
// // console.log(d);
// // console.log(myFriends[3]);

// // let[, y, , z]=myFriends;


// // console.log(y);
// // console.log(z);

// let myFriends=["Ahmed","Sayed","Ali",["Shady","Amr",["Mohamed","Gamal"]]];
// // console.log(myFriends[3][2][0]);

// let [, , ,[a, ,[,b]]] =myFriends;
// console.log(a);
// console.log(b);

//Swap Variables :
// let book="Video";
// let video = "book";

// let stash = book; //Video

// book=video; //book
// video=stash;

// console.log(book);
// console.log(video);

// [book,video]=[video,book];
// console.log(book);
// console.log(video);

//destructing objects :

// const user={
//     theName : "IMANE",
//     theAge: 22,
//     theTitle:"Developpeuse",
//     theCountry: "Tangier",
// };
// console.log(user.theName);
// console.log(user.theAge);
// console.log(user.theCountry);
// console.log(user.theTitle);

// let theName = user.theName;
// let theAge = user.theAge;
// let theCountry = user.theCountry;
// let theTitle = user.theTitle;

// console.log(theName);
// console.log(theAge);
// console.log(theCountry);
// console.log(theTitle);

// ({theName, theAge,theCountry,theTitle} = user);
// console.log(theTitle);

// let {theName, theAge,theCountry,theTitle} = user;
// const user={
//     theName : "IMANE",
//     theAge: 22,
//     theTitle:"Developpeuse",
//     theCountry: "Tangier",
//     skills :{
//         html:70,
//         css:80,
//     }
// };

// let {theName, theAge, theTitle,theCountry, skills :{html:h,css:c}} = user;

// console.log(`${c}`);

// let{html:skillOne,css:skillTwo}=user.skills;

// console.log(skillOne);

//Destructuring Function :

// showDetails(user); //Appel function 

// function showDetails({theName:a,theAge,theCountry,skills:{html}}=user){
//    console.log(`Your Name is ${a}`);
//    console.log(`Your age is ${theAge}`);
//    console.log(`Your Name is ${theCountry}`);
//    console.log(`Your Skills progress  is ${html}`);
// }

// const use={
//     theName : "Imane",
//     theAge: 22,
//     skills:["html", "Css","Javascript"],
//     adresses : {
//         morocco : "tangier",
//         france : "paris",
//     }
// };

// let {theName:name,theAge:age,skills:[,,js],adresses:{morocco:moro}}=use;

// console.log(name);
// console.log(age);
// console.log(js);
// console.log(moro);

// showinfo(use);
// function showinfo(obj){
//     console.log(`your name is ${obj.theName}`);
//     console.log(`your name is ${obj.theAge}`);
//     console.log(`your name is ${obj.skills[0]}`);
//     console.log(`your adresse is ${obj.adresses.morocco}`);
// }

// showinfo(use);
// function showinfo({theName, theAge, skills:[html,css,js],adresses:{morocco,france}}=use){
//     console.log(`your name is ${theName}`);
//     console.log(`your name is ${theAge}`);
//     console.log(`your name is ${css}`);
//     console.log(`your adresse is ${morocco}`);
// }

/*
  Destructuring
  - Challenge
*/

// let chosen = 2;

// let myFriends = [
//   { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
//   { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
//   { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
// ];

// showinfo(myFriends);

// function showinfo(obj){
//     if(chosen === 1){
//         console.log(`${obj[0].title}`);
//         console.log(`${obj[0].age}`);
//         if(obj[0].available === true){
//         console.log("available");
//         }
//         else{
//             console.log('not available');
//         }
//         console.log(`${obj[0].skills[0]} and ${obj[0].skills[1]}`);
//     }
//     if(chosen === 2){
//         console.log(`${obj[1].title}`);
//         console.log(`${obj[1].age}`);
//         if(obj[1].available === true){
//         console.log("available");
//         }
//         else{
//             console.log("not available");
//         }
//         console.log(`${obj[1].skills[0]} and ${obj[1].skills[1]}`);
//     }
//     if(chosen === 3){
//         console.log(`${obj[2].title}`);
//         console.log(`${obj[2].age}`);
//         if(obj[2].available === true){
//         console.log("available");
//         }
//         else{
//             console.log('not available');
//         }
//         console.log(`${obj[2].skills[0]} and ${obj[2].skills[1]}`);
//     }

// }

// let mydata = [1,1,1,2,3,"I"];
// let myUniquedata = new Set(mydata);

// console.log(mydata);
// console.log(myUniquedata);
// console.log(myUniquedata.size);
// myUniquedata.add(3).add(4).add(5);

// console.log(myUniquedata);

// // myUniquedata.delete(3);
// console.log(myUniquedata.delete(3));
// console.log(myUniquedata.size);

// console.log(myUniquedata.has(2));

// myUniquedata.clear();
// console.log(myUniquedata);

//set vs weakset and garbage collector :

// let mySet = new Set([1,1,1,2,3,"A","A"]);

// console.log(mySet);
// console.log(mySet.size);

// let iterator = mySet.keys();
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next());

// let mywekset =new WeakSet([{A:1,B:2}]);

// // let iter = mywekset.keys();
// // console.log(iter.next().value);

// console.log(mywekset);

//Map Data type Vs Object : 

let myObject = {};
let mymap = new Map();

console.log(myObject);
console.log(mymap);


