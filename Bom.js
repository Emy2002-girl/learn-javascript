// // window.alert("Have a Good day !");
// // alert("Have a good day ");

// // let confirmMesg = confirm("Are you sure ?");

// // console.log(confirmMesg);

// // if(confirmMesg === true){
// //     console.log("Action fais");
// // }
// // else{
// //     console.log("essayer");
// // }

// // let PromptMesg = prompt("choice a day :","enter par 3 caractère");

// //siteTimeout and clearTimeout :
 
// // let counter = setTimeout(sayMsg,2000,"Imane",22);

// // function sayMsg(user,age){
// //     console.log(`Hello From tangier I'm ${user} ${age} years old`);
// // }

// // let mybtn = document.querySelector("button");

// // mybtn.onclick = function(){
// //     clearTimeout(counter);
// // }

// // setInterval(function(){
// //    console.log("Have a good day");
// // },1000)

// // function sayGood(){
// //     console.log("Have a good day Imane ");
// // }

// // setInterval(sayGood,1000);

// // let mydiv=document.querySelector("div");

// // function na9es(){
// //     mydiv.innerHTML -= 1;
// //     if(mydiv.innerHTML === "0"){
// //         clearTimeout(counter);
// //     }
// // };
// //  let counter =setInterval(na9es,1000);

// //Open and close window :
  
// // setTimeout(function(){
// //    window.open("https://www.google.com","_blank","width=200,height= 40");
// // },2000);


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

// //Remove All :
// // window.localStorage.clear();
// // document.body.style.backgroundColor=  window.localStorage["backgroundColor"]="green";
// // console.log(window.localStorage.key(0));

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

// // mydiv.forEach((element)=>{
// //     element.onclick=function(){
// //         element.style.display="none";
// //     }
// // })

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

// // window.localStorage.setItem=("color","black");
// // window.sessionStorage.setItem=("color","black");  //valeur a éte svegarder dans la session 

// // let myinput=document.querySelector(".name");

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

// // let myFriends=["Ahmed","Sayed","Ali",["Shady","Amr",["Mohamed","Gamal"]]];
// // // console.log(myFriends[3][2][0]);

// // let [, , ,[a, ,[,b]]] =myFriends;
// // console.log(a);
// // console.log(b);

// //Swap Variables :
// // let book="Video";
// // let video = "book";

// // let stash = book; //Video

// // book=video; //book
// // video=stash;

// // console.log(book);
// // console.log(video);

// // [book,video]=[video,book];
// // console.log(book);
// // console.log(video);

// //destructing objects :

// // const user={
// //     theName : "IMANE",
// //     theAge: 22,
// //     theTitle:"Developpeuse",
// //     theCountry: "Tangier",
// // };
// // console.log(user.theName);
// // console.log(user.theAge);
// // console.log(user.theCountry);
// // console.log(user.theTitle);

// // let theName = user.theName;
// // let theAge = user.theAge;
// // let theCountry = user.theCountry;
// // let theTitle = user.theTitle;

// // console.log(theName);
// // console.log(theAge);
// // console.log(theCountry);
// // console.log(theTitle);

// // ({theName, theAge,theCountry,theTitle} = user);
// // console.log(theTitle);

// // let {theName, theAge,theCountry,theTitle} = user;
// // const user={
// //     theName : "IMANE",
// //     theAge: 22,
// //     theTitle:"Developpeuse",
// //     theCountry: "Tangier",
// //     skills :{
// //         html:70,
// //         css:80,
// //     }
// // };

// // let {theName, theAge, theTitle,theCountry, skills :{html:h,css:c}} = user;

// // console.log(`${c}`);

// // let{html:skillOne,css:skillTwo}=user.skills;

// // console.log(skillOne);

// //Destructuring Function :

// // showDetails(user); //Appel function 

// // function showDetails({theName:a,theAge,theCountry,skills:{html}}=user){
// //    console.log(`Your Name is ${a}`);
// //    console.log(`Your age is ${theAge}`);
// //    console.log(`Your Name is ${theCountry}`);
// //    console.log(`Your Skills progress  is ${html}`);
// // }

// // const use={
// //     theName : "Imane",
// //     theAge: 22,
// //     skills:["html", "Css","Javascript"],
// //     adresses : {
// //         morocco : "tangier",
// //         france : "paris",
// //     }
// // };

// // let {theName:name,theAge:age,skills:[,,js],adresses:{morocco:moro}}=use;

// // console.log(name);
// // console.log(age);
// // console.log(js);
// // console.log(moro);

// // showinfo(use);
// // function showinfo(obj){
// //     console.log(`your name is ${obj.theName}`);
// //     console.log(`your name is ${obj.theAge}`);
// //     console.log(`your name is ${obj.skills[0]}`);
// //     console.log(`your adresse is ${obj.adresses.morocco}`);
// // }

// // showinfo(use);
// // function showinfo({theName, theAge, skills:[html,css,js],adresses:{morocco,france}}=use){
// //     console.log(`your name is ${theName}`);
// //     console.log(`your name is ${theAge}`);
// //     console.log(`your name is ${css}`);
// //     console.log(`your adresse is ${morocco}`);
// // }

// /*
//   Destructuring
//   - Challenge
// */

// // let chosen = 2;

// // let myFriends = [
// //   { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
// //   { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
// //   { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
// // ];

// // showinfo(myFriends);

// // function showinfo(obj){
// //     if(chosen === 1){
// //         console.log(`${obj[0].title}`);
// //         console.log(`${obj[0].age}`);
// //         if(obj[0].available === true){
// //         console.log("available");
// //         }
// //         else{
// //             console.log('not available');
// //         }
// //         console.log(`${obj[0].skills[0]} and ${obj[0].skills[1]}`);
// //     }
// //     if(chosen === 2){
// //         console.log(`${obj[1].title}`);
// //         console.log(`${obj[1].age}`);
// //         if(obj[1].available === true){
// //         console.log("available");
// //         }
// //         else{
// //             console.log("not available");
// //         }
// //         console.log(`${obj[1].skills[0]} and ${obj[1].skills[1]}`);
// //     }
// //     if(chosen === 3){
// //         console.log(`${obj[2].title}`);
// //         console.log(`${obj[2].age}`);
// //         if(obj[2].available === true){
// //         console.log("available");
// //         }
// //         else{
// //             console.log('not available');
// //         }
// //         console.log(`${obj[2].skills[0]} and ${obj[2].skills[1]}`);
// //     }

// // }

// // let mydata = [1,1,1,2,3,"I"];
// // let myUniquedata = new Set(mydata);

// // console.log(mydata);
// // console.log(myUniquedata);
// // console.log(myUniquedata.size);
// // myUniquedata.add(3).add(4).add(5);

// // console.log(myUniquedata);

// // // myUniquedata.delete(3);
// // console.log(myUniquedata.delete(3));
// // console.log(myUniquedata.size);

// // console.log(myUniquedata.has(2));

// // myUniquedata.clear();
// // console.log(myUniquedata);

// //set vs weakset and garbage collector :

// // let mySet = new Set([1,1,1,2,3,"A","A"]);

// // console.log(mySet);
// // console.log(mySet.size);

// // let iterator = mySet.keys();
// // console.log(iterator.next().value);
// // console.log(iterator.next().value);
// // console.log(iterator.next().value);
// // console.log(iterator.next().value);
// // console.log(iterator.next());

// // let mywekset =new WeakSet([{A:1,B:2}]);

// // // let iter = mywekset.keys();
// // // console.log(iter.next().value);

// // console.log(mywekset);

// //Map Data type Vs Object : 

// // let myObject = {};
// // let mymap = new Map();

// // console.log(myObject);
// // console.log(mymap);

// //Array.every Method : 

// // const locations = {
// //   20:"Place1 ",
// //   30:"Place2",
// //   10:"Place3",
// //   40:"Place 4",
// // };

// // let mainLocation = 15;

// // let myArraylocations=Object.keys(locations);  //Astuce pour transformer l'object a un array 

// // console.log(myArraylocations);

// // let mynumbers = myArraylocations.map(function(n){ //function map pour transformer string as a number
// //   return +n;
// // });
// // console.log(mynumbers);

// // let mytest = mynumbers.every(function(element){
// //   return element>this;
// // },mainLocation);  //method array.every return true is the condition are true for every element  and return false if a element dont have the condition

// // console.log(mytest);


// //Spread Syntax And use Cases : (...) //intichar 

// // console.log("Imane");
// // console.log(..."Imane");
// // console.log([..."Imane"]);

// // let myarray1=[1,2,3];
// // let myarray2=[2,3,4];

// // console.log([...myarray1,...myarray2]);
// // let mynewarray = [...myarray1];
// // console.log(mynewarray);

// // let myFriend = ["SALMA","Rokaya","Safae","Fati"];
// // let mynewfriend = ["Imane","kaoutar"];

// // myFriend.push(...mynewfriend);

// // console.log(myFriend);

// // //merge objects : 

// // let Object1={
// //   a:1,
// //   b:2,
// // };
// // let Object2={
// //   c:3,
// //   d:4,
// // };

// // let myObject = ({...Object1,...Object2,e:5});
// // console.log(myObject);

// //Map And set challenge :

// // let n1 = [10,30,10,20]; //210  
// // let n2 = [30,20,10];

// // let newarray = ([...n1,...n2]);

// // console.log(Math.max(...n2)*newarray.length);

// //Regular Expression : 

// // let myexpression = "Hello IMANE  my name is imane";

// // let Regexp = /IMANE/ig;

// // console.log(myexpression.match(Regexp));

// //Regular Expressions : 
// // let numbr = "12345678910";
// // let Regnumb = /[^0-4]/g;  //Range return numbers between 0 and 4 
// // console.log(numbr.match(Regnumb));

// // let special = "#1§2!3?4@5$678910";
// // let Regspecial = /[^0-9]/g;  //Range return numbers between 0 and 4 
// // console.log(special.match(Regspecial));

// // let practice = "Os1 Os1Os Os2 Os8 Os8Os";
// // let practiveRe = /Os[5-9]Os/g;
// // console.log(practice.match(practiveRe));

// // let myString = "AaBbcdefG123!234%^&*";
// // let mysmall = /[a-z]/g;
// // let myCapitall = /[A-Z]/g;
// // let myCapital = /[^a-z]/g;
// // let aAndcAnde = /[ace]/g;
// // let notaAndcAnde = /[^ace]/g;
// // let letterAndCapital =/[a-z]/ig;
// // let specials = /[^a-z1-9]/ig;
// // console.log(myString.match(mysmall));
// // console.log(myString.match(myCapital));
// // console.log(myString.match(myCapitall));
// // console.log(myString.match(aAndcAnde));
// // console.log(myString.match(notaAndcAnde));
// // console.log(myString.match(letterAndCapital));
// // console.log(myString.match(specials));

// /*
//   Regular Expression
//   Character Classes
//   . => matches any character, except newline or other line terminators.
//   \w => matches word characters. [a-z, A-Z, 0-9 And Underscore]
//   \W => matches Non word characters //the specifique character 
//   \d => matches digits from 0 to 9.
//   \D => matches non-digit characters.
//   \s => matches whitespace character. / /;
//   \S => matches non whitespace character.
// */

// // let email = 'O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com';
// // let dot = /./g;
// // let word = /\w/g;
// // let valid = /\D@\w.(com|net)/g;
// // let s=/\S/g;
// // console.log(email.match(dot));
// // console.log(email.match(word));
// // console.log(email.match(valid));
// // console.log(email.match(s));
// // let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";
// // let re = /(\bspam|spam\b)/ig;
// // console.log(names.match(re));

// // console.log(re.test(names));
// // console.log( /(\bspam|spam\b)/ig.test("Imane"));

// // let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All Emails
// // let valid=/\w+@\w+.(com|net)/g;
// // console.log(mails.match(valid));

// // let nums = "0110 10 150 05120 0560 350 00";
// // let numsRe =/0\d*0/g;
// // console.log(nums.match(numsRe));

// // let urls = "https://google.com http://www.website.net web.com"; // http + https
// // let urlRe=/(https?:\/\/)?(www.)?\w+.(com|net)/g;
// // console.log(urls.match(urlRe));


// /*
//   Regular Expression

//   Quantifiers
//   n{x}   => Number of
//   n{x,y} => Range
//   n{x,}  => At Least x
// */

// // let serials = "S100S S3000S S50000S S950000S";

// // console.log(serials.match(/s\d{3}s/ig)); // S[Three Number]S
// // console.log(serials.match(/s\d{4,5}s/ig)); // S[Four Or Five Number]S
// // console.log(serials.match(/s\d{4,}s/ig)); // S[At Least Four]

// // let myString = "We Love Programming";
// // let Name = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

// // console.log(/ing$/ig.test(myString));
// // console.log(/^\d/ig.test(Name));

// // console.log(Name.match(/\d\w{8}/ig));

// // let txt ="We Love Programming And @ because @ is amazing";

// // console.log(txt.replace("@","Javascript"));
// // console.log(txt.replaceAll("@","Javascript"));

// // let reex = /@/ig;

// // console.log(txt.replaceAll(reex,"javascript"));
// // console.log(txt.replaceAll(/@/ig,"javascript"));

// //Regulat Expressions : 

// // document.getElementById("register").onsubmit = function(){
// //    let userInput = document.getElementById("phone").value;
// //    let Regexp = /\(\d{4}\)\s\d{3}-\d{4}/ig;
// //    let Validationform = Regexp.test(userInput);
// //   if(Validationform=== false){
// //       console.log(Validationform);
// //       return false;
// //   }
// //    return true;
// // }

// /*
//   Regular Expression
//   - Challenge
// */

// // let url1 = 'elzero.org';
// // let url2 = 'http://elzero.org';
// // let url3 = 'https://elzero.org';
// // let url4 = 'https://www.elzero.org';
// // let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

// // let re = /(https?:\/\/)?(www.)?\w+.org(\/articles.php?id=100&cat=topics)?/;
// // console.log(url1.match(re));

// // console.log(url2.match(re));
// // console.log(url3.match(re));
// // console.log(url4.match(re));
// // console.log(url5.match(re));

// //Constructor function : 

// class User {
//   constructor(id, username, salary) {
//     this.i = id;
//     this.u = username || "Unkown";
//     this.s = salary <4000 ? salary+1000 : salary;
//      this.Msg=function(){
//         return `Hello ${this.u} Your salary is ${this.s}`
//     }
//   };
//   writeMsg(){
//     return `Hello ${this.u} Your salary is ${this.s}`
//   }
//   NewName(Newname){
//      this.u=Newname;
//   }
// };

// let userOne = new User(100,"Imane",3000);

// console.log(userOne.i);
// console.log(userOne.u);
// console.log(userOne.s);
// console.log(userOne.Msg());
// console.log(userOne.writeMsg());
// userOne.NewName("Safae");   //update Method 
// console.log(userOne.u);

// console.log(userOne instanceof User);
// console.log(userOne.constructor === User);


// let Stringg = "JAJAJA";
// let newString= new String("hahahah");  //Built in constructors  : nex String() is a constructor

// console.log(typeof Stringg);
// console.log(typeof newString);
// console.log(newString instanceof String);
// console.log(Stringg instanceof String);


// let number1 = "1234";
// let number2 = new Number("0945");

// console.log(number2 instanceof Number);

//  class Use {
//   static count = 0;
//   constructor(Num, Name, serie) {
//     this.n = Num;
//     this.N = Name;
//     this.s = serie;
//   };
//    static sayHello(){
//     return `Hello From Js `;
//   };
// };

// let UserOne = new Use(1,"Imane",9000);
// let UsertWO = new Use(2,"EMY",9001);

// console.log(UserOne.n);
// // console.log(UserOne.sayHello());
// console.log(Use.sayHello());
// console.log(UserOne.count);
// console.log(Use.count);
// console.log(UsertWO.n);


// class User {
//   constructor(Name, age, adresse) {
//     this.n = Name;
//     this.a = age;
//     this.ad = adresse;
//   };
//   sayhello(){
//     return`Hello ${n}`;
//   }
// };

// class Admin extends User{
//   constructor(Name,age,promesiss){
//     super(Name,age);
//     this.p=promesiss;
//   }
// };

// class superMan extends Admin{
//    constructor(Name,age,promesiss,id){
//     super(Name,age,promesiss);
//     this.i=id;
//    }
// }
//  let user = new User("Imane",22,"Tangier");
//  let admin = new Admin("safae",22,1);
//  let superr = new superMan("imane",22,101);

//  console.log(superr.i);
//  console.log(user.n);
//  console.log(admin.n);

// class User{
//   //Private Property :
//   #e;
//   constructor(id,username,eSalary){  //private properety we can use in methodes 
//     this.i = id;
//     this.u=username;
//     this.#e=eSalary;
//   };
//   getSalary(){
//     return parseInt(this.#e); 
//   }
// };

// class Admin extends User{
//   constructor(id,username,eSalary,promessis){
//     super(id,username,eSalary);
//     this.p=promessis;
//   };
// }

// let userOne = new User(101,"Imane",50000);
// let admin = new Admin(102,"Safae",10000,1);
// console.log(userOne.i);
// console.log(userOne.u);
// console.log(userOne.getSalary()*0.3);
// console.log(admin.i);
// console.log(admin.u);
// // console.log(admin.#e);

// console.log(admin.getSalary());

//Prototype : 

// class User{
//   constructor(id,username){
//     this.i=id;
//     this.u=username;
//   };
//   sayhello(){
//     return `Hello ${this.u}`;
//   }
// };

// User.prototype.sayWelcome = function(){  //On peut ajouter une methode (function ) a l'aide de prototype 
//   return `Welcome ${this.u}`;
// }
// let userOne = new User(100,"Imane");
// console.log(userOne);
// console.log(User.prototype);
// console.log(userOne.sayhello());
// console.log(userOne.sayWelcome());

// Object.prototype.salary = 1000;  //built in 
// console.log(userOne);
// String.prototype.adddotBeforeendafter = function(val){
//   return `.${this}.`;
// }

// let str = "Imane";
// console.log(str.adddotBeforeendafter());
// console.log(String.prototype);

// - Object Meta Data And Descriptor : 

// const myobject = {
//   a:1,
//   b:2,
// };

// Object.defineProperty(myobject,'c',{  //cannot redifine le meme proprety
//   writable:false,
//   enumerable:true,
//   configurable:false,
//   value : 2,
// });
// myobject.c = 100;
// console.log(delete myobject.c);
// for(let prop in myobject){
//   console.log(prop,myobject[prop]);
// };
// console.log(delete myobject.c);
// console.log(myobject);

// const myObject = {
//   a:1,
//   b:2,
// };

// Object.defineProperties(myObject,{
//   c : {
//    configurable : true,
//    value : 3,
//   },
//   d:{
//     configurable : true,
//     value: 4,
//   },
//   e: {
//     configurable:true,
//     value:5,
//   },
// });

// console.log(myObject);
// console.log(Object.getOwnPropertyDescriptor(myObject,"d"));
// console.log(Object.getOwnPropertyDescriptors(myObject));

 //Date constructor 
// let dateNow = new Date();
// console.log(dateNow);

// let seconds = dateNow /1000;  // 1000mill = 1seconde 
// console.log(seconds);
// let minutes = seconds /60 ;
// console.log( `minutes ${minutes}`);

// let hours = minutes/60 ; // 1h = 60min 
// console.log(`number of hours is ${hours}`);

// let days =hours/ 24;
// console.log(`number of days is ${days}`);

// let years = days/365 ; 

// console.log(`number of years is ${years}`);

//Get Date And Time :

// let dateNow = new Date();
// let mybirthday = new Date("01 Septembre 2003");
// console.log(dateNow);
// console.log(mybirthday);
// let myAge = dateNow - mybirthday;
// console.log(myAge/1000/60/60/24/365);
// console.log(dateNow.getFullYear());
// console.log(dateNow.getDate());
// console.log(dateNow.getDay());
// console.log(dateNow.getHours());

// let dateNow = new Date();

// console.log(dateNow);
// console.log("#".repeat(32));

// dateNow.setTime(10000); //10secondes 
// console.log(dateNow);
// console.log("#".repeat(32));

// dateNow.setDate(0);
// console.log(dateNow);
// console.log("#".repeat(32));

// dateNow.setFullYear(2025,0);
// console.log(dateNow);
// console.log("#".repeat(32));


// let dateNow = new Date();

// console.log(dateNow);

// console.log(Date.parse(dateNow));

// let date1 = new Date(0);
// console.log(date1);

// let date2 = new Date("01 May 2002");
// console.log(date2);

// let date3 = new Date("01/05/2002");
// console.log(date3);

// let date4 = new Date("02");
// console.log(date4);

// let date5 = new Date(2002,4,1,7,0,0);
// console.log(date5);

// let date6 = new Date("2002-05-01T05:10:00Z");
// console.log(date6);


//Start Time : 
// let Start = new Date();
// // console.log(Start);

// //Operation : 
// for(let i = 0;i<100000;i++){
//   document.write( `<div>${i}</div>`);
// //   let div = document.createComment("div");
// //   div.textContent=i;
// //   // div.appendChild(document.createTextNode(i));
// //   document.body.appendChild(div);
// }
// //End Time : 

// let end = new Date();


// //Operation duration : 
// let duration = end - Start;
// console.log(duration);

//Generators : 

// function* generateNumbers(){
//   yield 1;
//   console.log(`hello from yield 1`);
//   yield 2;
//   yield 3;
//   yield 4;
// };
// let generator = generateNumbers();
// console.log(typeof generator);
// console.log(generator);

// // console.log(generator.next());
// // console.log(generator.next());
// // console.log(generator.next());
// // console.log(generator.next());
// // console.log(generator.next());

// // for(let value of generateNumbers()){  //fhal ila kan3mel l'appel l function plusieurs fois 
// //   console.log(value);
// // };

// for(let value of generator){ //comme une battrie chargé 
//   console.log(value);
// };


function* generateNumbers(){
yield 1;
yield 2;
yield 3;
yield 4;
}

function* generateletters(){
  yield "A";
  yield "B";
  yield "C";
  yield "D";
}
function* generateAll(){
  yield*generateNumbers();
  yield*generateletters();
  yield* [1,2,3,4];
}

let generator = generateAll();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.return("Imane"));
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());




