// let myId = document.getElementById("my_div");
// let myTagname = document.getElementsByTagName("h1");
// let myclass = document.getElementsByClassName("span");
// let myQuerySelector = document.querySelector(".span");
// let myQuerySelectorr = document.querySelectorAll(".span");

// console.log(myId);
// console.log(myTagname);
// console.log(myclass);
// console.log(myQuerySelector);
// console.log(myQuerySelectorr);
// console.log(document.links[0]);
// console.log(document.forms);
// console.log(document.body);


// //Get Sel Elements content and attributes :

// let myElement = document.querySelector(".js");

// console.log(myElement.innerHTML);
// console.log(myElement.textContent);
// myElement.innerHTML = "Text From <span>main.js</span> file";
// myElement.textContent = myElement.innerHTML = "Text From <span>main.js</span> file";


// document.images[0].src="https://www.google.com";
// document.images[0].alt="Picture";
// document.images[0].title="pic";
// document.images[0].id="pict";
// document.images[0].className="pictu";


// let mylink=document.querySelector(".link");

// console.log(mylink.getAttribute("class"));
// console.log(mylink.getAttribute("href"));


// mylink.setAttribute("href","https://twitter.com");
// mylink.setAttribute("title", "picture");


//dom [check Attributes] :

// console.log(document.getElementsByTagName("p")[0].attributes);

// let myP = document.getElementsByTagName("p")[0];

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
// //     console.log("not found");
// // }
// // console.log(myP);
//Creat and append elements :

// let myElement = document.createElement("div");
// let myAttr = document.createAttribute("data-custom");
// let myText=document.createTextNode("Product One");
// let myComment = document.createComment("this is div");
// myElement.className = "product";
// myElement.setAttributeNode(myAttr);
// myElement.setAttribute("data-custom","test");
// console.log(myElement);

// //Append element to element :
// myElement.appendChild(myComment);  //in the beginnig

// document.body.appendChild(myComment);

// //Append (insert) text to element :

// myElement.appendChild(myText);
// //Append element to boody :
// document.body.appendChild(myElement);


// let myElement = document.createElement("div");
// let mytitle = document.createElement("h3");
// let mypara = document.createElement("p");
// let text1 = document.createTextNode("PRODUCT ONE");
// let text2 = document.createTextNode("product one");

// myElement.className = "product"; // Set class for the element

// mytitle.appendChild(text1);
// mypara.appendChild(text2);

// myElement.appendChild(mytitle);
// myElement.appendChild(mypara);

// let i = 0; // Initialize i

// while (i < 100) { // Loop will run 100 times
//     let clone = myElement.cloneNode(true); // Clone the element to make a new one each time
//     document.body.appendChild(clone); // Append the cloned element to the body
//     i++; // Increment to avoid infinite loop
// }

// Deal with  children's:

// let myElement = document.querySelector("div");

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

let cases = document.querySelectorAll(".case");  // Sélectionne toutes les cases

window.onload = function() {
    cases[0].focus();  // Le focus commence sur la première case

    // Écoute l'événement input sur chaque case
    cases.forEach((caseElement, index) => {
        caseElement.addEventListener("input", function() {
            // Si l'utilisateur entre un chiffre et que ce n'est pas la dernière case
            if (caseElement.value.length === 1 && index < cases.length - 1) {
                cases[index + 1].focus();  // Déplace le focus vers la case suivante
            }
        });
    });
};












