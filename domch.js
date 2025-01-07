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
let foot = document.createElement("footer");
let contentfooter = document.createTextNode("Copyright 2024");

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
foot.appendChild(contentfooter);
let container = document.createElement("div");
container.className = "containe";
document.body.appendChild(container);

for (let i = 1; i <= 15; i++) {
    let div1 = document.createElement("div");
    div1.className = "div1";
    let mypara = document.createElement("p");
    let myspan = document.createElement("span");
    let mytext = document.createTextNode(`${i}`);
    let mycontent = document.createTextNode("Product");
    myspan.appendChild(mytext);
    mypara.appendChild(mycontent);
    div1.appendChild(myspan);
    div1.appendChild(mypara);
    container.appendChild(div1);
    div1.style.cssText="background-color:white;border:2px solid gray;text-align:center;padding:5px;font-size:23px";
}
document.body.appendChild(foot);

myhaid.style.cssText = "display: flex; justify-content: space-between; align-items: center; padding: 10px;background-color:lightgray";


mylist.style.cssText = "list-style-type: none; margin: 0; display: flex; justify-content: flex-end; font-size: 20px;border:2px solid gray;padding:7px;border-radius:2px";


mylist1.style.cssText = "display: inline; margin-right: 10px;";
mylist2.style.cssText = "display: inline; margin-right: 10px;";
mylist3.style.cssText = "display: inline; margin-right: 10px;";
mylist4.style.cssText = "display: inline; margin-right: 10px;";

myelement1.style.cssText = "font-size: 20px;color:green";

container.style.cssText = "display: grid; grid-template-columns: auto auto auto; background-color: lightgrey; padding: 10px; gap: 20px; margin-top: 20px;";
foot.style.cssText="display:flex;background-color:green;padding:20px;font-size:24px;justify-content:center;border-radius:5px";

