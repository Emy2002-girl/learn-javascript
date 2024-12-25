// //strings methods
// // let a="Elzero web school";
// // console.log(a);
// // console.log(a.slice(2,3).toUpperCase()+a.slice(3,6).toLowerCase());

// // console.log(a.slice(13,14).toUpperCase().repeat(8));
// // console.log(a.split(" ",1));
// // console.log(a.slice(0,7)+a.slice(11));

// // console.log(a.slice(0,2).toLowerCase()+a.slice(2).toUpperCase());
// console.log(typeof "Imane"== typeof "oussama");
// // conditional if else
// let price= 100;
// let discount= false;
// let discountAmount= 30;
// let country="Syria";

// if(discount==true){
//     price-= discountAmount;
// }
// else if(country=="maroc"){
//   price-= 45;
// }
// else if(country=="Syria"){
//     price-= 60;
// }
// else{
//     price-= 50;
// }
// console.log(price);

// //conditional Ternary
// let theName="Imane";
// let theGender="Female";

// if(theGender=="Female"){
//     console.log("Mrs");
// }
// else{
//     console.log("Mr");
// }

// theGender == "Female" ? console.log("mrs") :console.log("mr") ;
// let result = theGender== "Female" ? "mrs" : "mr";
// console.log(result);


// //if condition challenge
// let st="Elzero Web School";
// if( typeof "st"===typeof"34"){
//     console.log("Good");
// }
// if(st.slice(7,8)==="W"){
//     console.log("Good");
// }
// if(typeof length!=="string"){
//     console.log("Good")
// }
// if(st.slice(0,6)+st.slice(0,6)==="ElzeroElzero"){
//     console.log("Good");
// }
// if( typeof st=== typeof"number"){
//     console.log("Good");
// }

// //switch statement :

// let day=3;

// switch(day){
//     case 0:
//         console.log("Saturday");
//         break;
//     case 1:
//         console.log("sunday");
//         break;
//     case 2:
//     case 3:
//         console.log("Monday");
//         break;
//         default:
//             console.log("Unknown day")
// }
// //switch and if condition challenge
// let job="Support" ;
// let money= 0;
// switch(job){
//     default:
//         money=4000;
//         console.log(money);
//         break;
//     case "manager":
//         money=8000;
//         console.log(money);
//         break;
//     case "IT" :
//     case "Support" :
//      money=6000;
//      console.log(money);
//      break;
    
//     case "Developer" :
//     case "Designer"  :
//       money=7000;
//       console.log(money);
// }

// let holidays= 2;
// let salary= 0;
// if(holidays==0){
//     console.log("my money is 5000")
// }
// else if(holidays==1||holidays==2){
//     console.log("my Money is 3000");
// }
// else if(holidays==3){
//     console.log("my money is 2000");
// }
// else{
//     console.log("entrer un nombre logique")
// }


// //Arrays
// let myFriends = ["Safae","Salma","fati",["marwan","ali"]];

// console.log(`hello ${myFriends[2]}`);
// console.log(`hello ${myFriends[0][2]}`);

// console.log(`hello ${myFriends[3]}`);
// console.log(`hello ${myFriends[3][1]}`);
// console.log(`hello ${myFriends[3][1][2]}`);
// console.log(myFriends)
// myFriends[1]="ROKAYA";
// console.log(myFriends);
// myFriends[3]=["Imane","safae","khadija"];
// console.log(myFriends[3][2]);

// console.log(Array.isArray(myFriends));

// //Array methods :lenght
// // Index start From 0 [0,1,2]
// let myFriend=["Imane","safae","salma"];
// console.log(myFriend.length);

// // myFriend[2]="fati";
// console.log(myFriend);
// console.log(myFriend.length); //3

//  myFriend[myFriend.length-1]="Rokaya"; //changer le contenue de dernier element de tableau 
// console.log(myFriend);
// // myFriend.length=1; //redeclare length of array to 1 element 
// console.log(myFriend);
// myFriend[myFriend.length-1]="Kaoutar" ; //length kisba9 index b 1
// console.log(myFriend);


// //******** Add and remove From Array */

// let myArray=["Imane","kaoutar","khadija","med said","mohammed"];
// console.log(myArray);
// //unshift("","") Add Element To the First :
// myArray.unshift("Rahma","imane");
// console.log(myArray);
// //push ("","") add element to the end :
// myArray.push("Said");
// console.log(myArray);
// //remove the first element by shift :

// console.log(myArray);
// let first = myArray.shift();
// console.log(myArray);
// console.log(`first name is ${first}`);
// //remove the last element and return the value 
// let last=myArray.pop();
// console.log(myArray);
// console.log(`the last element is ${last}`);

// //searching Array :
// // --indexOf(search element, From Index[Option])
// // --LastIndex(search element, From Index[Option])
// // --includes(valuesToFind, fromIndex) // the value is execte or no true of false 

// let T=["Imane","kaoutar","khadija","med said","mohammed"];
// console.log(T);
// console.log(T.indexOf("med said", 1)); //afficher l'index de position 
// console.log(T.lastIndexOf("kaoutar",-2));
// console.log(T.includes("mohammed"));
// console.log(T.includes("kaoutar",2));

// console.log(T.indexOf("nadir"));
// console.log(T.lastIndexOf("nadir"));

// if(T.indexOf("Imane")==-1){
//     console.log("Not Found");
// }
// else{
//     console.log("Found");
// }

// //Sorting Array :
// let Tab=[10,"Sayed","khadija","90",9000, 100,20,"10",-20,-10];
//  console.log(Tab);
//  console.log(Tab.sort()); //tri des elements
//  console.log(Tab.reverse()); //reverse the sorting value 

//  //slicing Array
//  let Aray=["Imane","kaoutar","khadija","med said","mohammed"];
//  console.log(Aray);
//  console.log(Aray.slice());
//  console.log(Aray.slice(0,2)); //not incloding the end 
//  console.log(Aray.slice(1));
//  console.log(Aray.slice(-2));
//  console.log(Aray.slice(-4,-2));

//  //splice(start[obligatoire],deletecount[opt][0 no remove],the items to add[opt])

//  console.log(Aray);
// //  Aray.splice(0,0,"Ranbok", "mahfoud");
// //  console.log(Aray);
//  Aray.splice(1,2,"rhimo","assala"); //ranbda men index 1 w ransupprimer 2 w ranzid 2 f lwl 
//  console.log(Aray);

//  //joining Arrays :

// let amis=["safae","salma","fati"] ;
// document.write("<h3>Hello from tangier</h3>");
// console.log("I'm Imane");
// console.log("Hello from %ctangier","color:blue ;font-size:30px");

// let d="-100";
//  e ="20";
//  f=30;
//  g=true;
//  console.log(-d *20);
//  console.log(+e);
//  console.log(typeof(+d));
//  //********** string challenge */
//  let a= "Elzero web school" ;
//  console.log(a);
//  console.log(a.toUpperCase());
//  console.log(a.slice(2,6).toUpperCase());

//  console.log(a.slice(13,14).toUpperCase().repeat(8));

//  console.log(a.split(" ",1));
//  console.log(a.substr(0,6));
//  console.log(a.slice(0,2).toLowerCase()+a.slice(2).toUpperCase());


//  // JOINING ARRAYS
//  let amiis=["Ahmed","Sayed","Ali","Osama","Gamal","Ameer"];
//  let nouveau=["Samar","sameh"];
//  let school=["Haytham","Shady"];

//  let allFriends = amis.concat(nouveau,school,"safae","fati",[1,2]); //concat the content of array nouveau in amis 
//  console.log(allFriends);
//  console.log(allFriends.join()); //joining the arrays
//  console.log(allFriends.join("  ,").toUpperCase());

//  //challenge array :

//  let zero=0;
//  let counter =3;
//  let my=["ahmed","mazero","elham","osama","gamal","ameer"];

//  console.log(my.slice(length-2));
//  //LOOP -For And :
// // syntaxe:
// //for ([1] [2] [3]){
// //  block of code }
 
// for(i=0; i<10; i++){
//     console.log(i);
// }

// //looping On sequences  "العناصر":
//  let myFrends=[ 12,3,"osama","ahmed","sayed","ali","amira",1000];

// //  console.log(myFriends[0]);
// //  console.log(myFriends[1]);
// //  console.log(myFriends[2]);
// //  console.log(myFriends[3]);
// //  console.log(myFriends[4]);

//  for(i=0; i<myFriends.length;i++){
//     console.log(myFriends[i]);
//  }
//  let OnlyNames =[];

//  for(i=0; i<myFriends.length;i++){
//     if(typeof myFriends[i]==="string"){
//         OnlyNames.push(myFriends[i]);
//     }
//  }
 
//  console.log(OnlyNames);

//  for(i=0;i<OnlyNames.length; i++){
//     console.log(OnlyNames[i]);
//  }

//  //looping On :
// //   Nested Loops :loop in loop
// //  
// // let products= ["Keyboard","mouse","pen","pad","monitor"];
// // let colors=["Red","Green","Black"];
// // let models=[2020, 2021];

// // for(i=0; i<products.length;i++){
// //     console.log("#".repeat(10));
// //     console.log(`# ${products[i]} `);
// //     console.log("#".repeat(10));
// //     console.log(" -colors:");
// //     for(j=0;j<colors.length;j++){
// //         console.log(`${colors[j]}`);
       
// //     }
// //     console.log(" -Models:");
// //     for(k=0;k<models.length;k++){
// //         console.log(`${models[k]}`);
// // }
// // }
// //loop control :
// // let products= ["Keyboard","mouse", "pen","pad","monitor"];
// // let colors=["Red","Green","Black"];
// // let Onlynames=[];

// //  for(i=0;i<products.length;i++){
// //     if(typeof products[i]==="string"){
// //     Onlynames.push(products[i]); //push the content products in onlynames array ;
// //     }
// //  };

// //  console.log(Onlynames);

// // for(i=0;i<products.length;i++){
// //     if(typeof products[i]==="number"){
// //         continue;
// //     }
// //     console.log(`# ${products[i]} ` );
// // }

// //  mainloop :for( let i=0;i<products.length;i++){
// //     console.log(products[i]);
// //    Nestedloop:for( let j=0;j<colors.length;j++){
// //         console.log(`- ${colors[j]}`);
// //         if(colors[j]== "Green"){
// //             break Nestedloop;
// //         }
// //     }
// // };

// //Loop For Advanced exemple :
// // let products= ["Keyboard","mouse", "pen","pad","monitor"];
// // for(let i = 0;;){
// //         console.log(products[i]);
// //         i =i+2;
// //         if(i === products.length){
// //             break;
// //         }
// //     };

// // Practice :
// let products= ["Keyboard","mouse","pen","pad","monitor","iPhone"];
// let colors=["Red","Green","Black"];
// let Count= 5;
// for(i=0 ;i<Count;i++){
//     document.write(`<div>`);
//     document.write((`<h4>[${i+1}]${products[i]}</h4>`));
//     for(let j= 0;j<colors.length ;j++){
//         // document.write(`<p> - ${colors[j]}</p>`);
//     }
//     document.write(`<p> - ${colors.join(" | ")}</p>`); //joining the colors
//     document.write(`</div>`);
// }

// //loop while :

// let product =["Keyboard","mouse","pen","pad","monitor","iPhone" ];
// let index = 0;
// while(index <product.length){
//   console.log(product[index]);
//   index++;
  
// };

// //loop do/while :

// let produit=["Keyboard","mouse","pen","pad","monitor","iPhone" ];
// let ind=0;
// do{
//     console.log(ind);
//     ind++;  //la diff entre while et do while  hia kanfdo l'intruction 9bl men la condition 
// }while(false);

// console.log(ind);


// //loop challenge :

// let myAdmins=["Ahmed","Osama","Sayed","Stop","Samera"];
// let myEmployees = ["Amgad","Samah","Ameer","Omar","Othman","Amany","Samia"];
// let count = 0;
// let i =0;
// let s = 0 , n=0, r=0;
// for(i=0; i<myAdmins.length ; i++){
//     if(myAdmins[i] != "Stop" && myAdmins[i] != "Samera"){
//         count++;
//     }
// };

// document.write(`<div> We Have ${count} Admins</div>`);
// for(let i=0; i<myAdmins.length-2 ;i++){
//     document.write(`<hr>`);
//     if(myAdmins[i] != "Stop" && myAdmins[i] != "Samera"){
//         document.write(`<div> The Admin For Team  -${i+1} is ${myAdmins[i]}</div>`);
//         document.write(`<div> Team Members</div>`);
//     };
    
    
//     for( let j=0;j<myEmployees.length;j++){
//         if(myAdmins[i] == "Ahmed"){
//             if(myEmployees[j].startsWith("A") == true){
//                         s++;
//                      document.write(`<div> ${s} - ${myEmployees[j]}</div>`);
//                 }
//         }
//         else if(myAdmins[i] == "Osama"){
//             if(myEmployees[j].startsWith("O") == true){
//                 n++;
//              document.write(`<div> ${n} - ${myEmployees[j]}</div>`);
//         }    
// }
// else{
//     if(myEmployees[j].startsWith("S") == true){
//         r++;
//      document.write(`<div> ${r} - ${myEmployees[j]}</div>`);
// }
// }
// }
// };

//function :intro 
 function sayhello(username){
    console.log(`hello ${username}`);  
 };

 sayhello("Imane");


