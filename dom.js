// // let myId = document.getElementById("my_div");
// // let myTagname = document.getElementsByTagName("h1");
// // let myclass = document.getElementsByClassName("span");
// // let myQuerySelector = document.querySelector(".span");
// // let myQuerySelectorr = document.querySelectorAll(".span");

// // console.log(myId);
// // console.log(myTagname);
// // console.log(myclass);
// // console.log(myQuerySelector);
// // console.log(myQuerySelectorr);
// // console.log(document.links[0]);
// // console.log(document.forms);
// // console.log(document.body);


// // //Get Sel Elements content and attributes :

// // let myElement = document.querySelector(".js");

// // console.log(myElement.innerHTML);
// // console.log(myElement.textContent);
// // myElement.innerHTML = "Text From <span>main.js</span> file";
// // myElement.textContent = myElement.innerHTML = "Text From <span>main.js</span> file";


// // document.images[0].src="https://www.google.com";
// // document.images[0].alt="Picture";
// // document.images[0].title="pic";
// // document.images[0].id="pict";
// // document.images[0].className="pictu";


// // let mylink=document.querySelector(".link");

// // console.log(mylink.getAttribute("class"));
// // console.log(mylink.getAttribute("href"));


// // mylink.setAttribute("href","https://twitter.com");
// // mylink.setAttribute("title", "picture");


// //dom [check Attributes] :

// // console.log(document.getElementsByTagName("p")[0].attributes);

// // let myP = document.getElementsByTagName("p")[0];

// // if(myP.hasAttribute("data-src")){
// //     if(myP.getAttribute("data-src")=== ""){
// //    myP.removeAttribute("data-src");
// //     }
// // }
// if(myP.hasAttribute("data-src")){
//     if(myP.getAttribute("data-src")=== ""){
//    myP.removeAttribute("data-src");
//     }
// }
// else{
//    myP.setAttribute("data-src","New Value");
// };

// if(myP.hasAttributes){
//     console.log("has attributes");
// }

// if(document.getElementsByTagName("div")[0].hasAttributes()){
//     console.log("has attributes")
// }
// else{
//     console.log(" div has no attributes");
// };
// // else{
// //    myP.setAttribute("data-src","New Value"); 
// // };

// // if(myP.hasAttributes){
// //     console.log("has attributes");
// // }

// // if(document.getElementsByTagName("div")[0].hasAttributes()){
// //     console.log("has attributes")
// // }
// // else{
// //     console.log(" div has no attributes");
// // };
// // // else{
// // //     console.log("not found");
// // // }
// // // console.log(myP);
// //Creat and append elements :

// // let myElement = document.createElement("div");
// // let myAttr = document.createAttribute("data-custom");
// // let myText=document.createTextNode("Product One");
// // let myComment = document.createComment("this is div");
// // myElement.className = "product";
// // myElement.setAttributeNode(myAttr);
// // myElement.setAttribute("data-custom","test");
// // console.log(myElement);

// // //Append element to element :
// // myElement.appendChild(myComment);  //in the beginnig

// // document.body.appendChild(myComment);

// // //Append (insert) text to element :

// // myElement.appendChild(myText);
// // //Append element to boody :
// // document.body.appendChild(myElement);


// // let myElement = document.createElement("div");
// // let mytitle = document.createElement("h3");
// // let mypara = document.createElement("p");
// // let text1 = document.createTextNode("PRODUCT ONE");
// // let text2 = document.createTextNode("product one");

// // myElement.className = "product"; // Set class for the element

// // mytitle.appendChild(text1);
// // mypara.appendChild(text2);

// // myElement.appendChild(mytitle);
// // myElement.appendChild(mypara);

// // let i = 0; // Initialize i

// // while (i < 100) { // Loop will run 100 times
// //     let clone = myElement.cloneNode(true); // Clone the element to make a new one each time
// //     document.body.appendChild(clone); // Append the cloned element to the body
// //     i++; // Increment to avoid infinite loop
// // }

// // Deal with  children's:

// // let myElement = document.querySelector("div");

// console.log(myElement);
// console.log(myElement.children[1]);
// console.log(myElement.childNodes);

/*
  DOM [Events]
  - Use Events On HTML
  - Use Events On JS
  --- onclick
  --- oncontextmenu
  --- onmouseenter
  --- onmouseleave

  --- onload
  --- onscroll
  --- onresize

  --- onfocus
  --- onblur
  --- onsubmit
*/

// let myBtn= document.getElementById("btn");

// myBtn.onclick = function(){
//     console.log("clicked");
// };
// let myinp = document.getElementById("inp");

// myinp.onfocus = function(){
//     console.log("focus");
// }
// let userInput = document.querySelector("[name = 'username']");
// let ageInput = document.querySelector("[name = 'age']");

// document.forms[0].onsubmit = function(e){
//     let uservalid = false;
//     let agevalid = false;

//     console.log(userInput.value);
//     console.log(userInput.value.length);

//     if(userInput.value !== "" && userInput.value.length <= 10){
//         uservalid = true;
//     }
//     if(ageInput.value !== ""){
//         agevalid = true;
//     }
// if(uservalid === false ||agevalid === false ) {
//     e.preventDefault();
// }
// };


// document.links[0].onclick = function(event){
//     console.log(event);
//     event.preventDefault();
// }

// let cases = document.querySelectorAll(".case");  // Sélectionne toutes les cases

// window.onload = function() {
//     cases[0].focus();  // Le focus commence sur la première case

//     // Écoute l'événement input sur chaque case
//     cases.forEach((caseElement, index) => {
//         caseElement.addEventListener("input", function() {
//             // Si l'utilisateur entre un chiffre et que ce n'est pas la dernière case
//             if (caseElement.value.length === 1 && index < cases.length - 1) {
//                 cases[index + 1].focus();  // Déplace le focus vers la case suivante
//             }
//         });
//     });
// };
//  add
//  remove
//  toggle


let myElement = document.getElementById("my-div");

// console.log(myElement.classList);
// console.log( typeof myElement.classList);

// console.log(myElement.classList.length);
// console.log(myElement.classList.contains("one"));
// console.log(myElement.classList.item("1"));

// myElement.onclick = function(){
//     myElement.classList.toggle("show","two");
// }

// myElement.style.color = "black";
// myElement.style.backgroundColor = "lightgray";

// myElement.style.cssText="font-size: 30px; padding:30px; color:black";

// myElement.style.setProperty("font-size","40px");
// myElement.style.removeProperty("padding");

// document.styleSheets[0].rules[0].style.removeProperty("background-color");

// let creatP = document.createElement("p");


// myElement.before("hello from js");
// // myElement.before(creatP);

// myElement.prepend("Hello world");
// myElement.remove(creatP);

//traversing dom :


// console.log(myElement);
// let span = document.querySelector(".two");

// console.log(span.nextSibling);
// console.log(span.nextElementSibling);
// console.log(span.previousSibling);
// console.log(span.previousElementSibling);
// console.log(span.parentElement);

// span.onclick = function(){
//     span.previousElementSibling.remove();
// };

// -DOM Cloning : 
// let myP = document.querySelector("p").cloneNode(true);
// let mydiv = document.querySelector("div");
// myP.id=`${myP.id} -clone`;
// console.log(myP);
// mydiv.appendChild(myP);

//Addeventlistener :
// let myP = document.querySelector("p");

// myP.onclick = function(){
//   let clone = document.querySelector("p").cloneNode(true);
//   document.body.appendChild(clone);
//   // console.log("message from onclick");
// }

// function one(){
//   console.log("cloning from One");
// }
// function two(){
//   console.log("cloning from two");
// }
// myP =one();
// myP = two();
// document.addEventListener("click",one);
// document.addEventListener("click",two);

// myP.onclick =function(){
//   let newP = document.querySelector("p").cloneNode(true);
//   document.body.appendChild(newP);
//   newP.className = "clone";
// }

// // let cloned = document.querySelector(".clone");
// // cloned.onclick = function(){
// //   console.log("I'm cloned");
// // }; //Error 

// document.addEventListener("click",function(e){
//   if(e.target.className=== "clone"){
//     console.log("i'M cloned !");
//   }
// });
































