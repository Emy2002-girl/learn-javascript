let myhaid = document.createElement("header");
let myelement1 = document.createElement("div");
let myelement3 = document.createElement("div");
let mylist = document.createElement("ul");
let mylist1 = document.createElement("li");
let mylist2 = document.createElement("li");
let mylist3 = document.createElement("li");
let mylist4 = document.createElement("li");
let content1 = document.createTextNode("Elzero");
let content2 = document.createTextNode("Home");
let content3 = document.createTextNode("About");
let content4 = document.createTextNode("Service");
let content5 = document.createTextNode("Contact");
let container = document.createElement("div");
let product = document.createElement("div");
product.className="product";
let myspan=document.createElement("span");
let i =1;
let mytext = document.createTextNode(`${i}`);
let mypara = document.createElement("p");
let mycontent = document.createTextNode("Product");

product.appendChild(myspan);
myspan.appendChild(mytext);
mypara.appendChild(mycontent);
product.appendChild(mypara);
container.appendChild(product);
myhaid.appendChild(myelement1);
myelement1.appendChild(content1);
myhaid.appendChild(myelement3);
myelement3.appendChild(mylist);
mylist1.appendChild(content2);
mylist2.appendChild(content3);
mylist3.appendChild(content4);
mylist4.appendChild(content5);
mylist.appendChild(mylist1);
mylist.appendChild(mylist2);
mylist.appendChild(mylist3);
mylist.appendChild(mylist4);
document.body.appendChild(myhaid);
document.body.appendChild(product);
//    while(i<=15){
//     let clone = document.querySelector(".product").cloneNode(true);
//     document.body.appendChild(clone);
//     i++;
//    };
// for(let i = 0){

// }
// // for(let i=0;i<=15;i++){
//    let case[i] =
// }

product.style.cssText="text-align:center";
myelement1.style.cssText="position:absolute;color:green;font-size:20px";
mylist.style.cssText = "list-style-type:none;margin:0px;float:right;padding:0;font-size:20px";
mylist1.style.cssText = "display:inline;margin-right:10px";
mylist2.style.cssText = "display:inline;margin-right:10px";
mylist3.style.cssText = "display:inline;margin-right:10px";
mylist4.style.cssText = "display:inline;margin-right:10px";
myhaid.style.cssText ="color:gray";

