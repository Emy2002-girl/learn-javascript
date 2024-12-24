//strings methods
// let a="Elzero web school";
// console.log(a);
// console.log(a.slice(2,3).toUpperCase()+a.slice(3,6).toLowerCase());

// console.log(a.slice(13,14).toUpperCase().repeat(8));
// console.log(a.split(" ",1));
// console.log(a.slice(0,7)+a.slice(11));

// console.log(a.slice(0,2).toLowerCase()+a.slice(2).toUpperCase());
console.log(typeof "Imane"== typeof "oussama");
// conditional if else
let price= 100;
let discount= false;
let discountAmount= 30;
let country="Syria";

if(discount==true){
    price-= discountAmount;
}
else if(country=="maroc"){
  price-= 45;
}
else if(country=="Syria"){
    price-= 60;
}
else{
    price-= 50;
}
console.log(price);

//conditional Ternary
let theName="Imane";
let theGender="Female";

if(theGender=="Female"){
    console.log("Mrs");
}
else{
    console.log("Mr");
}

theGender == "Female" ? console.log("mrs") :console.log("mr") ;
let result = theGender== "Female" ? "mrs" : "mr";
console.log(result);


//if condition challenge
let st="Elzero Web School";
if( typeof "st"===typeof"34"){
    console.log("Good");
}
if(st.slice(7,8)==="W"){
    console.log("Good");
}
if(typeof length!=="string"){
    console.log("Good")
}
if(st.slice(0,6)+st.slice(0,6)==="ElzeroElzero"){
    console.log("Good");
}
if( typeof st=== typeof"number"){
    console.log("Good");
}

//switch statement :

let day=3;

switch(day){
    case 0:
        console.log("Saturday");
        break;
    case 1:
        console.log("sunday");
        break;
    case 2:
    case 3:
        console.log("Monday");
        break;
        default:
            console.log("Unknown day")
}
//switch and if condition challenge
let job="Support" ;
let money= 0;
switch(job){
    default:
        money=4000;
        console.log(money);
        break;
    case "manager":
        money=8000;
        console.log(money);
        break;
    case "IT" :
    case "Support" :
     money=6000;
     console.log(money);
     break;
    
    case "Developer" :
    case "Designer"  :
      money=7000;
      console.log(money);
}

let holidays= 2;
let salary= 0;
if(holidays==0){
    console.log("my money is 5000")
}
else if(holidays==1||holidays==2){
    console.log("my Money is 3000");
}
else if(holidays==3){
    console.log("my money is 2000");
}
else{
    console.log("entrer un nombre logique")
}


//Arrays
let myFriends = ["Safae","Salma","fati",["marwan","ali"]];

console.log(`hello ${myFriends[2]}`);
console.log(`hello ${myFriends[0][2]}`);

console.log(`hello ${myFriends[3]}`);
console.log(`hello ${myFriends[3][1]}`);
console.log(`hello ${myFriends[3][1][2]}`);
console.log(myFriends)
myFriends[1]="ROKAYA";
console.log(myFriends);
myFriends[3]=["Imane","safae","khadija"];
console.log(myFriends[3][2]);

console.log(Array.isArray(myFriends));

//Array methods :lenght
// Index start From 0 [0,1,2]
let myFriend=["Imane","safae","salma"];
console.log(myFriend.length);

// myFriend[2]="fati";
console.log(myFriend);
console.log(myFriend.length); //3

 myFriend[myFriend.length-1]="Rokaya"; //changer le contenue de dernier element de tableau 
console.log(myFriend);
// myFriend.length=1; //redeclare length of array to 1 element 
console.log(myFriend);
myFriend[myFriend.length-1]="Kaoutar" ; //length kisba9 index b 1
console.log(myFriend);


//******** Add and remove From Array */

let myArray=["Imane","kaoutar","khadija","med said","mohammed"];
console.log(myArray);
//unshift("","") Add Element To the First :
myArray.unshift("Rahma","imane");
console.log(myArray);
//push ("","") add element to the end :
myArray.push("Said");
console.log(myArray);
//remove the first element by shift :

console.log(myArray);
let first = myArray.shift();
console.log(myArray);
console.log(`first name is ${first}`);
//remove the last element and return the value 
let last=myArray.pop();
console.log(myArray);
console.log(`the last element is ${last}`);

//searching Array :
// --indexOf(search element, From Index[Option])
// --LastIndex(search element, From Index[Option])
// --includes(valuesToFind, fromIndex) // the value is execte or no true of false 

let T=["Imane","kaoutar","khadija","med said","mohammed"];
console.log(T);
console.log(T.indexOf("med said", 1)); //afficher l'index de position 
console.log(T.lastIndexOf("kaoutar",-2));
console.log(T.includes("mohammed"));
console.log(T.includes("kaoutar",2));

console.log(T.indexOf("nadir"));
console.log(T.lastIndexOf("nadir"));

if(T.indexOf("Imane")==-1){
    console.log("Not Found");
}
else{
    console.log("Found");
}

//Sorting Array :
let Tab=[10,"Sayed","khadija","90",9000, 100,20,"10",-20,-10];
 console.log(Tab);
 console.log(Tab.sort()); //tri des elements
 console.log(Tab.reverse()); //reverse the sorting value 

 //slicing Array
 let Aray=["Imane","kaoutar","khadija","med said","mohammed"];
 console.log(Aray);
 console.log(Aray.slice());
 console.log(Aray.slice(0,2)); //not incloding the end 
 console.log(Aray.slice(1));
 console.log(Aray.slice(-2));
 console.log(Aray.slice(-4,-2));

 //splice(start[obligatoire],deletecount[opt][0 no remove],the items to add[opt])

 console.log(Aray);
//  Aray.splice(0,0,"Ranbok", "mahfoud");
//  console.log(Aray);
 Aray.splice(1,2,"rhimo","assala"); //ranbda men index 1 w ransupprimer 2 w ranzid 2 f lwl 
 console.log(Aray);

 //joining Arrays :

 let amis=["safae","salma","fatij"]
 







