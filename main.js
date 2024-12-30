// // // // // // // // // // //strings methods
// // // // // // // // // // // let a="Elzero web school";
// // // // // // // // // // // console.log(a);
// // // // // // // // // // // console.log(a.slice(2,3).toUpperCase()+a.slice(3,6).toLowerCase());

// // // // // // // // // // // console.log(a.slice(13,14).toUpperCase().repeat(8));
// // // // // // // // // // // console.log(a.split(" ",1));
// // // // // // // // // // // console.log(a.slice(0,7)+a.slice(11));

// // // // // // // // // // // console.log(a.slice(0,2).toLowerCase()+a.slice(2).toUpperCase());
// // // // // // // // // // // conditional if else
// // // // // // // // // // let price= 100;
// // // // // // // // // // let discount= false;
// // // // // // // // // // let discountAmount= 30;
// // // // // // // // // // let country="Syria";

// // // // // // // // // // if(discount==true){
// // // // // // // // // //     price-= discountAmount;
// // // // // // // // // // }
// // // // // // // // // // else if(country=="maroc"){
// // // // // // // // // //   price-= 45;
// // // // // // // // // // }
// // // // // // // // // // else if(country=="Syria"){
// // // // // // // // // //     price-= 60;
// // // // // // // // // // }
// // // // // // // // // // else{
// // // // // // // // // //     price-= 50;
// // // // // // // // // // }
// // // // // // // // // // console.log(price);

// // // // // // // // // // //conditional Ternary
// // // // // // // // // // let theName="Imane";
// // // // // // // // // // let theGender="Female";

// // // // // // // // // // if(theGender=="Female"){
// // // // // // // // // //     console.log("Mrs");
// // // // // // // // // // }
// // // // // // // // // // else{
// // // // // // // // // //     console.log("Mr");
// // // // // // // // // // }

// // // // // // // // // // theGender == "Female" ? console.log("mrs") :console.log("mr") ;
// // // // // // // // // // let result = theGender== "Female" ? "mrs" : "mr";
// // // // // // // // // // console.log(result);


// // // // // // // // // // //if condition challenge
// // // // // // // // // // let st="Elzero Web School";
// // // // // // // // // // if( typeof "st"===typeof"34"){
// // // // // // // // // //     console.log("Good");
// // // // // // // // // // }
// // // // // // // // // // if(st.slice(7,8)==="W"){
// // // // // // // // // //     console.log("Good");
// // // // // // // // // // }
// // // // // // // // // // if(typeof length!=="string"){
// // // // // // // // // //     console.log("Good")
// // // // // // // // // // }
// // // // // // // // // // if(st.slice(0,6)+st.slice(0,6)==="ElzeroElzero"){
// // // // // // // // // //     console.log("Good");
// // // // // // // // // // }
// // // // // // // // // // if( typeof st=== typeof"number"){
// // // // // // // // // //     console.log("Good");
// // // // // // // // // // }

// // // // // // // // // // //switch statement :

// // // // // // // // // // let day=3;

// // // // // // // // // // switch(day){
// // // // // // // // // //     case 0:
// // // // // // // // // //         console.log("Saturday");
// // // // // // // // // //         break;
// // // // // // // // // //     case 1:
// // // // // // // // // //         console.log("sunday");
// // // // // // // // // //         break;
// // // // // // // // // //     case 2:
// // // // // // // // // //     case 3:
// // // // // // // // // //         console.log("Monday");
// // // // // // // // // //         break;
// // // // // // // // // //         default:
// // // // // // // // // //             console.log("Unknown day")
// // // // // // // // // // }
// // // // // // // // // // //switch and if condition challenge
// // // // // // // // // // let job="Support" ;
// // // // // // // // // // let money= 0;
// // // // // // // // // // switch(job){
// // // // // // // // // //     default:
// // // // // // // // // //         money=4000;
// // // // // // // // // //         console.log(money);
// // // // // // // // // //         break;
// // // // // // // // // //     case "manager":
// // // // // // // // // //         money=8000;
// // // // // // // // // //         console.log(money);
// // // // // // // // // //         break;
// // // // // // // // // //     case "IT" :
// // // // // // // // // //     case "Support" :
// // // // // // // // // //      money=6000;
// // // // // // // // // //      console.log(money);
// // // // // // // // // //      break;
    
// // // // // // // // // //     case "Developer" :
// // // // // // // // // //     case "Designer"  :
// // // // // // // // // //       money=7000;
// // // // // // // // // //       console.log(money);
// // // // // // // // // // }

// // // // // // // // // // let holidays= 2;
// // // // // // // // // // let salary= 0;
// // // // // // // // // // if(holidays==0){
// // // // // // // // // //     console.log("my money is 5000")
// // // // // // // // // // }
// // // // // // // // // // else if(holidays==1||holidays==2){
// // // // // // // // // //     console.log("my Money is 3000");
// // // // // // // // // // }
// // // // // // // // // // else if(holidays==3){
// // // // // // // // // //     console.log("my money is 2000");
// // // // // // // // // // }
// // // // // // // // // // else{
// // // // // // // // // //     console.log("entrer un nombre logique")
// // // // // // // // // // }


// // // // // // // // // // //Arrays
// // // // // // // // // // let myFriends = ["Safae","Salma","fati",["marwan","ali"]];

// // // // // // // // // // console.log(`hello ${myFriends[2]}`);
// // // // // // // // // // console.log(`hello ${myFriends[0][2]}`);

// // // // // // // // // // console.log(`hello ${myFriends[3]}`);
// // // // // // // // // // console.log(`hello ${myFriends[3][1]}`);
// // // // // // // // // // console.log(`hello ${myFriends[3][1][2]}`);
// // // // // // // // // // console.log(myFriends)
// // // // // // // // // // myFriends[1]="ROKAYA";
// // // // // // // // // // console.log(myFriends);
// // // // // // // // // // myFriends[3]=["Imane","safae","khadija"];
// // // // // // // // // // console.log(myFriends[3][2]);

// // // // // // // // // // console.log(Array.isArray(myFriends));

// // // // // // // // // // //Array methods :lenght
// // // // // // // // // // // Index start From 0 [0,1,2]
// // // // // // // // // // let myFriend=["Imane","safae","salma"];
// // // // // // // // // // console.log(myFriend.length);

// // // // // // // // // // // myFriend[2]="fati";
// // // // // // // // // // console.log(myFriend);
// // // // // // // // // // console.log(myFriend.length); //3

// // // // // // // // // //  myFriend[myFriend.length-1]="Rokaya"; //changer le contenue de dernier element de tableau 
// // // // // // // // // // console.log(myFriend);
// // // // // // // // // // // myFriend.length=1; //redeclare length of array to 1 element 
// // // // // // // // // // console.log(myFriend);
// // // // // // // // // // myFriend[myFriend.length-1]="Kaoutar" ; //length kisba9 index b 1
// // // // // // // // // // console.log(myFriend);


// // // // // // // // // // //******** Add and remove From Array */

// // // // // // // // // // let myArray=["Imane","kaoutar","khadija","med said","mohammed"];
// // // // // // // // // // console.log(myArray);
// // // // // // // // // // //unshift("","") Add Element To the First :
// // // // // // // // // // myArray.unshift("Rahma","imane");
// // // // // // // // // // console.log(myArray);
// // // // // // // // // // //push ("","") add element to the end :
// // // // // // // // // // myArray.push("Said");
// // // // // // // // // // console.log(myArray);
// // // // // // // // // // //remove the first element by shift :

// // // // // // // // // // console.log(myArray);
// // // // // // // // // // let first = myArray.shift();
// // // // // // // // // // console.log(myArray);
// // // // // // // // // // console.log(`first name is ${first}`);
// // // // // // // // // // //remove the last element and return the value 
// // // // // // // // // // let last=myArray.pop();
// // // // // // // // // // console.log(myArray);
// // // // // // // // // // console.log(`the last element is ${last}`);

// // // // // // // // // // //searching Array :
// // // // // // // // // // // --indexOf(search element, From Index[Option])
// // // // // // // // // // // --LastIndex(search element, From Index[Option])
// // // // // // // // // // // --includes(valuesToFind, fromIndex) // the value is execte or no true of false 

// // // // // // // // // // let T=["Imane","kaoutar","khadija","med said","mohammed"];
// // // // // // // // // // console.log(T);
// // // // // // // // // // console.log(T.indexOf("med said", 1)); //afficher l'index de position 
// // // // // // // // // // console.log(T.lastIndexOf("kaoutar",-2));
// // // // // // // // // // console.log(T.includes("mohammed"));
// // // // // // // // // // console.log(T.includes("kaoutar",2));

// // // // // // // // // // console.log(T.indexOf("nadir"));
// // // // // // // // // // console.log(T.lastIndexOf("nadir"));

// // // // // // // // // // if(T.indexOf("Imane")==-1){
// // // // // // // // // //     console.log("Not Found");
// // // // // // // // // // }
// // // // // // // // // // else{
// // // // // // // // // //     console.log("Found");
// // // // // // // // // // }

// // // // // // // // // // //Sorting Array :
// // // // // // // // // // let Tab=[10,"Sayed","khadija","90",9000, 100,20,"10",-20,-10];
// // // // // // // // // //  console.log(Tab);
// // // // // // // // // //  console.log(Tab.sort()); //tri des elements
// // // // // // // // // //  console.log(Tab.reverse()); //reverse the sorting value 

// // // // // // // // // //  //slicing Array
// // // // // // // // // //  let Aray=["Imane","kaoutar","khadija","med said","mohammed"];
// // // // // // // // // //  console.log(Aray);
// // // // // // // // // //  console.log(Aray.slice());
// // // // // // // // // //  console.log(Aray.slice(0,2)); //not incloding the end 
// // // // // // // // // //  console.log(Aray.slice(1));
// // // // // // // // // //  console.log(Aray.slice(-2));
// // // // // // // // // //  console.log(Aray.slice(-4,-2));

// // // // // // // // // //  //splice(start[obligatoire],deletecount[opt][0 no remove],the items to add[opt])

// // // // // // // // // //  console.log(Aray);
// // // // // // // // // // //  Aray.splice(0,0,"Ranbok", "mahfoud");
// // // // // // // // // // //  console.log(Aray);
// // // // // // // // // //  Aray.splice(1,2,"rhimo","assala"); //ranbda men index 1 w ransupprimer 2 w ranzid 2 f lwl 
// // // // // // // // // //  console.log(Aray);

// // // // // // // // // //  //joining Arrays :

// // // // // // // // // // let amis=["safae","salma","fati"] ;
// // // // // // // // // // document.write("<h3>Hello from tangier</h3>");
// // // // // // // // // // console.log("I'm Imane");
// // // // // // // // // // console.log("Hello from %ctangier","color:blue ;font-size:30px");

// // // // // // // // // // let d="-100";
// // // // // // // // // //  e ="20";
// // // // // // // // // //  f=30;
// // // // // // // // // //  g=true;
// // // // // // // // // //  console.log(-d *20);
// // // // // // // // // //  console.log(+e);
// // // // // // // // // //  console.log(typeof(+d));
// // // // // // // // // //  //********** string challenge */
// // // // // // // // // //  let a= "Elzero web school" ;
// // // // // // // // // //  console.log(a);
// // // // // // // // // //  console.log(a.toUpperCase());
// // // // // // // // // //  console.log(a.slice(2,6).toUpperCase());

// // // // // // // // // //  console.log(a.slice(13,14).toUpperCase().repeat(8));

// // // // // // // // // //  console.log(a.split(" ",1));
// // // // // // // // // //  console.log(a.substr(0,6));
// // // // // // // // // //  console.log(a.slice(0,2).toLowerCase()+a.slice(2).toUpperCase());


// // // // // // // // // //  // JOINING ARRAYS
// // // // // // // // // //  let amiis=["Ahmed","Sayed","Ali","Osama","Gamal","Ameer"];
// // // // // // // // // //  let nouveau=["Samar","sameh"];
// // // // // // // // // //  let school=["Haytham","Shady"];

// // // // // // // // // //  let allFriends = amis.concat(nouveau,school,"safae","fati",[1,2]); //concat the content of array nouveau in amis 
// // // // // // // // // //  console.log(allFriends);
// // // // // // // // // //  console.log(allFriends.join()); //joining the arrays
// // // // // // // // // //  console.log(allFriends.join("  ,").toUpperCase());

// // // // // // // // // //  //challenge array :

// // // // // // // // // //  let zero=0;
// // // // // // // // // //  let counter =3;
// // // // // // // // // //  let my=["ahmed","mazero","elham","osama","gamal","ameer"];

// // // // // // // // // //  console.log(my.slice(length-2));
// // // // // // // // // //  //LOOP -For And :
// // // // // // // // // // // syntaxe:
// // // // // // // // // // //for ([1] [2] [3]){
// // // // // // // // // // //  block of code }
 
// // // // // // // // // // for(i=0; i<10; i++){
// // // // // // // // // //     console.log(i);
// // // // // // // // // // }

// // // // // // // // // // //looping On sequences  "العناصر":
// // // // // // // // // //  let myFrends=[ 12,3,"osama","ahmed","sayed","ali","amira",1000];

// // // // // // // // // // //  console.log(myFriends[0]);
// // // // // // // // // // //  console.log(myFriends[1]);
// // // // // // // // // // //  console.log(myFriends[2]);
// // // // // // // // // // //  console.log(myFriends[3]);
// // // // // // // // // // //  console.log(myFriends[4]);

// // // // // // // // // //  for(i=0; i<myFriends.length;i++){
// // // // // // // // // //     console.log(myFriends[i]);
// // // // // // // // // //  }
// // // // // // // // // //  let OnlyNames =[];

// // // // // // // // // //  for(i=0; i<myFriends.length;i++){
// // // // // // // // // //     if(typeof myFriends[i]==="string"){
// // // // // // // // // //         OnlyNames.push(myFriends[i]);
// // // // // // // // // //     }
// // // // // // // // // //  }
 
// // // // // // // // // //  console.log(OnlyNames);

// // // // // // // // // //  for(i=0;i<OnlyNames.length; i++){
// // // // // // // // // //     console.log(OnlyNames[i]);
// // // // // // // // // //  }

// // // // // // // // // //  //looping On :
// // // // // // // // // // //   Nested Loops :loop in loop
// // // // // // // // // // //  
// // // // // // // // // // // let products= ["Keyboard","mouse","pen","pad","monitor"];
// // // // // // // // // // // let colors=["Red","Green","Black"];
// // // // // // // // // // // let models=[2020, 2021];

// // // // // // // // // // // for(i=0; i<products.length;i++){
// // // // // // // // // // //     console.log("#".repeat(10));
// // // // // // // // // // //     console.log(`# ${products[i]} `);
// // // // // // // // // // //     console.log("#".repeat(10));
// // // // // // // // // // //     console.log(" -colors:");
// // // // // // // // // // //     for(j=0;j<colors.length;j++){
// // // // // // // // // // //         console.log(`${colors[j]}`);
       
// // // // // // // // // // //     }
// // // // // // // // // // //     console.log(" -Models:");
// // // // // // // // // // //     for(k=0;k<models.length;k++){
// // // // // // // // // // //         console.log(`${models[k]}`);
// // // // // // // // // // // }
// // // // // // // // // // // }
// // // // // // // // // // //loop control :
// // // // // // // // // // // let products= ["Keyboard","mouse", "pen","pad","monitor"];
// // // // // // // // // // // let colors=["Red","Green","Black"];
// // // // // // // // // // // let Onlynames=[];

// // // // // // // // // // //  for(i=0;i<products.length;i++){
// // // // // // // // // // //     if(typeof products[i]==="string"){
// // // // // // // // // // //     Onlynames.push(products[i]); //push the content products in onlynames array ;
// // // // // // // // // // //     }
// // // // // // // // // // //  };

// // // // // // // // // // //  console.log(Onlynames);

// // // // // // // // // // // for(i=0;i<products.length;i++){
// // // // // // // // // // //     if(typeof products[i]==="number"){
// // // // // // // // // // //         continue;
// // // // // // // // // // //     }
// // // // // // // // // // //     console.log(`# ${products[i]} ` );
// // // // // // // // // // // }

// // // // // // // // // // //  mainloop :for( let i=0;i<products.length;i++){
// // // // // // // // // // //     console.log(products[i]);
// // // // // // // // // // //    Nestedloop:for( let j=0;j<colors.length;j++){
// // // // // // // // // // //         console.log(`- ${colors[j]}`);
// // // // // // // // // // //         if(colors[j]== "Green"){
// // // // // // // // // // //             break Nestedloop;
// // // // // // // // // // //         }
// // // // // // // // // // //     }
// // // // // // // // // // // };

// // // // // // // // // // //Loop For Advanced exemple :
// // // // // // // // // // // let products= ["Keyboard","mouse", "pen","pad","monitor"];
// // // // // // // // // // // for(let i = 0;;){
// // // // // // // // // // //         console.log(products[i]);
// // // // // // // // // // //         i =i+2;
// // // // // // // // // // //         if(i === products.length){
// // // // // // // // // // //             break;
// // // // // // // // // // //         }
// // // // // // // // // // //     };

// // // // // // // // // // // Practice :
// // // // // // // // // // let products= ["Keyboard","mouse","pen","pad","monitor","iPhone"];
// // // // // // // // // // let colors=["Red","Green","Black"];
// // // // // // // // // // let Count= 5;
// // // // // // // // // // for(i=0 ;i<Count;i++){
// // // // // // // // // //     document.write(`<div>`);
// // // // // // // // // //     document.write((`<h4>[${i+1}]${products[i]}</h4>`));
// // // // // // // // // //     for(let j= 0;j<colors.length ;j++){
// // // // // // // // // //         // document.write(`<p> - ${colors[j]}</p>`);
// // // // // // // // // //     }
// // // // // // // // // //     document.write(`<p> - ${colors.join(" | ")}</p>`); //joining the colors
// // // // // // // // // //     document.write(`</div>`);
// // // // // // // // // // }

// // // // // // // // // // //loop while :

// // // // // // // // // // let product =["Keyboard","mouse","pen","pad","monitor","iPhone" ];
// // // // // // // // // // let index = 0;
// // // // // // // // // // while(index <product.length){
// // // // // // // // // //   console.log(product[index]);
// // // // // // // // // //   index++;
  
// // // // // // // // // // };

// // // // // // // // // // //loop do/while :

// // // // // // // // // // let produit=["Keyboard","mouse","pen","pad","monitor","iPhone" ];
// // // // // // // // // // let ind=0;
// // // // // // // // // // do{
// // // // // // // // // //     console.log(ind);
// // // // // // // // // //     ind++;  //la diff entre while et do while  hia kanfdo l'intruction 9bl men la condition 
// // // // // // // // // // }while(false);

// // // // // // // // // // console.log(ind);


// // // // // // // // // // //loop challenge :

// // // // // // // // // // let myAdmins=["Ahmed","Osama","Sayed","Stop","Samera"];
// // // // // /// // // // let myEmployees = ["Amgad","Samah","Ameer","Omar","Othman","Amany","Samia"];
// // // // // // // // // // let count = 0;
// // // // // // // // // // let i =0;
// // // // // // // // // // let s = 0 , n=0, r=0;
// // // // // // // // // // for(i=0; i<myAdmins.length ; i++){
// // // // // // // // // //     if(myAdmins[i] != "Stop" && myAdmins[i] != "Samera"){
// // // // // // // // // //         count++;
// // // // // // // // // //     }
// // // // // // // // // // };

// // // // // // // // // // document.write(`<div> We Have ${count} Admins</div>`);
// // // // // // // // // // for(let i=0; i<myAdmins.length-2 ;i++){
// // // // // // // // // //     document.write(`<hr>`);
// // // // // // // // // //     if(myAdmins[i] != "Stop" && myAdmins[i] != "Samera"){
// // // // // // // // // //         document.write(`<div> The Admin For Team  -${i+1} is ${myAdmins[i]}</div>`);
// // // // // // // // // //         document.write(`<div> Team Members</div>`);
// // // // // // // // // //     };
    
    
// // // // // // // // // //     for( let j=0;j<myEmployees.length;j++){
// // // // // // // // // //         if(myAdmins[i] == "Ahmed"){
// // // // // // // // // //             if(myEmployees[j].startsWith("A") == true){
// // // // // // // // // //                         s++;
// // // // // // // // // //                      document.write(`<div> ${s} - ${myEmployees[j]}</div>`);
// // // // // // // // // //                 }
// // // // // // // // // //         }
// // // // // // // // // //         else if(myAdmins[i] == "Osama"){
// // // // // // // // // //             if(myEmployees[j].startsWith("O") == true){
// // // // // // // // // //                 n++;
// // // // // // // // // //              document.write(`<div> ${n} - ${myEmployees[j]}</div>`);
// // // // // // // // // //         }    
// // // // // // // // // // }
// // // // // // // // // // else{
// // // // // // // // // //     if(myEmployees[j].startsWith("S") == true){
// // // // // // // // // //         r++;
// // // // // // // // // //      document.write(`<div> ${r} - ${myEmployees[j]}</div>`);
// // // // // // // // // // }
// // // // // // // // // // }
// // // // // // // // // // }
// // // // // // // // // // };

// // // // // // // // // //function :intro 
// // // // // // // // //  function changer(value){
// // // // // // // // //     console.log(`the car is  ${value}`);  
// // // // // // // // //  };
// // // // // // // // // console.log(changer(500));


// // // // // // // // // //function Advanced exemple 

// // // // // // // // // // function sayhello(username, age){
// // // // // // // // // //    if(age>20){
// // // // // // // // // //       console.log(`hello ${username} your age is ${age}`);
// // // // // // // // // //    }
// // // // // // // // // //    else{
// // // // // // // // // //       console.log("App is not Suitable For you ");
// // // // // // // // // //    }
// // // // // // // // // // }
// // // // // // // // // // sayhello("safae benmouna", 22);

// // // // // // // // // function generateYears(start, end, exclude){
// // // // // // // // //    for(i=start; i<=end; i++){
// // // // // // // // //       if(i === exclude){
// // // // // // // // //          continue;
// // // // // // // // //       }
// // // // // // // // //       console.log(i);
// // // // // // // // //    }
// // // // // // // // // };
// // // // // // // // // generateYears(2002,2024,2020);

// // // // // // // // // //function Return And Use :
// // // // // // // // // function changer(value){
// // // // // // // // //   return `the car is  ${value}`;  // makanemlochi console 
// // // // // // // // // };
// // // // // // // // // let result = changer(400);
// // // // // // // // // console.log(result);

// // // // // // // // // function addition(num1, num2){
// // // // // // // // //    return num1 + num2;
// // // // // // // // // };

// // // // // // // // // let resul = addition(12, 20);
// // // // // // // // // console.log(`the result is ${resul}`);

// // // // // // // // // function generate(start,end){
// // // // // // // // //    for(i=start; i<=end ;i++){
// // // // // // // // //       if(i === 15){
// // // // // // // // //          return `Interruptting`; //Interruptting va breaker la boucle 
// // // // // // // // //       }  console.log(i);
// // // // // // // // //    }
// // // // // // // // // };
// // // // // // // // // generate(12,20);

// // // // // // // // // //function Default Parameters :
// // // // // // // // // function sayhello(username = "unkown", age = "unknown"){
// // // // // // // // //    // if(age == undefined){
// // // // // // // // //    //    age = "unknown";
// // // // // // // // //    // }
// // // // // // // // //    // age = age || "Unkonwn";
// // // // // // // // //    console.log(`hello ${username} Your age is ${age}`);
// // // // // // // // // }
// // // // // // // // //  sayhello();

// // // // // // // // // //  function Name(First, last){
// // // // // // // // // //    console.log(`the Name is ${First} ${last}`);
// // // // // // // // // //  }
// // // // // // // // // // Name("Imane", "Ranbok");

// // // // // // // // // //function Rest Parameters :

// // // // // // // // // function calc(...numbers){
// // // // // // // // //    let result= 0;
// // // // // // // // //   for(let i=0; i<numbers.length;i++){
// // // // // // // // //    result+=numbers[i];
// // // // // // // // //   }
// // // // // // // // //    return `the final result is ${result} `;
// // // // // // // // // }
// // // // // // // // // console.log(calc(10, 20, 30, 40));

// // // // // // // // // //function Advanced Practice :

// // // // // // // // // function ShowInfo(us="Un",ag="Un",rt= 0,show="yes",...sk){
// // // // // // // // // document.write(`<div>`);
// // // // // // // // // document.write(`<h3>Hello ${us}</h3>`);
// // // // // // // // // document.write(`<p>Your age is ${ag} years</p>`);
// // // // // // // // // document.write(`<p>your HOUR RATE : $${rt}</p>`);
// // // // // // // // // if(show==="yes"){
// // // // // // // // //    document.write(`<p>show the skills :</p>`);
// // // // // // // // //    if(sk.length>0){
// // // // // // // // //       document.write(`the skills is: `);
// // // // // // // // //       for(let i=0;i<sk.length;i++){
// // // // // // // // //          document.write(`${sk[i]},  `);
// // // // // // // // //       }
// // // // // // // // //    }else{
// // // // // // // // //       document.write(`skills:no skills`);
// // // // // // // // //    }
// // // // // // // // // }else{
// // // // // // // // //    document.write(`<p>skills hidden</p>`);
// // // // // // // // // };
// // // // // // // // // document.write(`</div>`);
// // // // // // // // // }
// // // // // // // // // ShowInfo("Imane",22,20,"yes",);
// // // // // // // // //function challenge :
// // // // // // // //Methode 1 :

// // // // // // // // function showDetails(a="Un",b="Un",c="Un"){
// // // // // // // //    document.write(`<div>`);
// // // // // // // //    if(typeof a === "string"){
// // // // // // // //       document.write(` Hello ${a}`);
// // // // // // // //    }else if(typeof a === "number"){
// // // // // // // //       document.write(`<p> Your Age is ${a}</p>`);
// // // // // // // //    }else if(typeof a === "boolean"){
// // // // // // // //       if(bool=true){
// // // // // // // //          document.write(`<p>You are Available For Hire</p>`);
// // // // // // // //       }else{
// // // // // // // //          document.write(`<p>You are nt Available For Hire</p>`);
// // // // // // // //       }
// // // // // // // //    };
// // // // // // // //    if(typeof b === "string"){
// // // // // // // //       document.write(` Hello ${b}`);
// // // // // // // //    }else if(typeof b === "number"){
// // // // // // // //       document.write(`<p>Your Age is ${b}</p>`);
// // // // // // // //    }else if(typeof b === "boolean"){
// // // // // // // //       if(bool=true){
// // // // // // // //          document.write(`<p>You are Available For Hire</p>`);
// // // // // // // //       }else{
// // // // // // // //          document.write(`<p>You are nt Available For Hire</p>`);
// // // // // // // //       }
// // // // // // // //    };
// // // // // // // //    if(typeof c === "string"){
// // // // // // // //       document.write(` Hello ${c}`);
// // // // // // // //    }else if(typeof c === "number"){
// // // // // // // //       document.write(` Your Age is ${c}`);
// // // // // // // //    }else if(typeof c === "boolean"){
// // // // // // // //       if(bool=true){
// // // // // // // //          document.write(`<p>You are Available For Hire</p>`);
// // // // // // // //       }else{
// // // // // // // //          document.write(`<p>You are nt Available For Hire</p>`);
// // // // // // // //       }
// // // // // // // //    };
// // // // // // // // };
// // // // // // // // showDetails(20,"Imane",false);
// // // // // // // // document.write(`</div>`);

// // // // // // // //methode 2 :
// // // // // // // function showDetails(a, b , c){
// // // // // // // document.write(`<div>`);
// // // // // // // typeof a ==="string"? document.write(`Hello ${a},`):typeof a === "number"?document.write(`Your Age is ${a},`):  a === true ? document.write("You are Available For Hire,"): a === false ? document.write("You are not  Available For Hire,"):document.write("Unkown") ;
// // // // // // // typeof b ==="string"? document.write(`Hello ${b},`):typeof b === "number"?document.write(`Your Age is ${b},`):  b === true ? document.write("You are Available For Hire,"): b === false ? document.write("You are not  Available For Hire,"):document.write("Unkown") ;
// // // // // // // typeof c ==="string"? document.write(`Hello ${c},`):typeof c === "number"?document.write(`Your Age is ${c},`):  c === true ? document.write("You are Available For Hire,"): c === false ? document.write("You are not  Available For Hire,"):document.write("Unkown") ;
// // // // // // // document.write(`</div>`);
// // // // // // // };
// // // // // // // showDetails(false, "Imane" , 22);
// // // // // // // showDetails("IMANE", false , 22);
// // // // // // // showDetails(22, "Imane" , true);

// // // // // // //function AnonYmous :

// // // // // // //   console.log(calculator(10,20));  cannot acces a calculator before initiliase

// // // // // //  let calculator= function (num1,num2){
// // // // // //    return num1+num2;
// // // // // // }
// // // // // // console.log(calculator(10,20));
// // // // // // function sayhello(){
// // // // // //    console.log("Hello Ossama");
// // // // // // }
// // // // // // document.addEventListener('DOMContentLoaded', function() {

// // // // // //    document.getElementById("show").onclick= sayhello()
// // // // // // // document.getElementById("show").onclick = function(){
// // // // // // //   console.log("Show");
// // // // // // // };
// // // // // // });
// // // // // // setTimeout(function(){
// // // // // //    console.log("Good");
// // // // // // },2000);
// // // // // //function Nested :  function Inside function
// // // // // //exemple 1 :
// // // // // // function sayMessage(Fname, Lname){
// // // // // //    let message =`hello`;
// // // // // //    function ConcatMes(){
// // // // // //       message = `${message} ${Fname} ${Lname} `;  //Nested Function 
// // // // // //    }
// // // // // //    ConcatMes();
// // // // // //    return message ;
// // // // // // };
// // // // // // console.log(sayMessage("Imane","Ranbok"));

// // // // // // exemple 2:
// // // // // // function sayMessage(Fname, Lname){
// // // // // //    let message =`hello`;
// // // // // //    function ConcatMes(){

// // // // // //       function fullName(){
// // // // // //          return `${Fname} ${Lname}`;
// // // // // //       }
// // // // // //      return `${message} ${fullName()} `;  //Nested Function 
// // // // // //    };
// // // // // //    return ConcatMes();
   
// // // // // // };
// // // // // // console.log(sayMessage("Imane","Ranbok"));

// // // // // //Arrow function :
 
// // // // // // let print = () => 10;  //for one instructor and ()= _

// // // // // // let print =(num) =>num;

// // // // // // console.log(print(100));

// // // // // // let print =function(num1,num2){
// // // // // // return num1+num2;
// // // // // // }
// // // // // // console.log(print(20,30));  //rugular syntaxe 

// // // // // // let print = (num1,num2) => num1+num2;
// // // // // // console.log(print(20,20));

// // // // // //scope local and global :

// // // // // var a = 12; //global scope 
// // // // // let b =10;

// // // // // function showtext(){
// // // // //    var a = 12;
// // // // //    let b =10;
// // // // //    console.log(`${a} && ${b}`);  //local scope 
// // // // // };
// // // // // console.log(`global scope ${a}`);
// // // // // console.log(`global scope ${b}`);

// // // // // showtext();

// // // // //scope block :

// // // // //higher order functions 

// // // // let numbers =[1,2,3,4,5];
// // // // let newnum= [];

// // // // // for(i=0;i<numbers.length;i++){
// // // // //     newnum.push(numbers[i]+numbers[i]);
// // // // // };

// // // // // console.log(newnum);

// // // // // let addself= numbers.map((element) =>element +element);
// // // // // // console.log(`element ${element}`);
// // // // //     // console.log(`index ${index}`);
// // // // //     // console.log(`element ${array}`);
// // // // //     // console.log(`this ${this}`);
// // // // // console.log(addself);

// // // // function addition(a){
// // // //     return a+a;
// // // // }
// // // // let add =numbers.map(addition);   

// // // // console.log(add);

// // // //Higher order functions practice :

// // // let swappingCases = "elZERo";
// // // let invertedNumbers = [1, -10,-20, 15, 100, -30];
// // // let ignoreNumbers = "Elz123er4o";

// // // let sw = swappingCases
// // // .split("")
// // // .map((el)=>el == el.toUpperCase()? el.toLowerCase() :el.toUpperCase())
// // // .join("");

// // // console.log(sw);

// // // let inv = invertedNumbers.map((a)=>a =-a);
// // // console.log(inv);

// // // let ig = ignoreNumbers.split("").map((element)=>isNaN(parseInt(element))? element : "")  //if true element if false remove it 
// // // .join("");
// // // console.log(ig);

// // //Filter :

// //  let friends = ["AHmed","Smeh","Sayed","ASmma","AMgad","israa"];
// //  let friendfilter = friends.filter(function(el){
// //     return el.startsWith("A")? true : false ;
// //   })
// //   console.log(friendfilter);
// //  let numbers = [11,20,2,5,17,10];

// //  let num = numbers.filter(function(element){
// //     return element % 2 === 0 ;
// //  })

// //  console.log(num);

// let sentence = "I love Foood code too playing Much";
// //filter Words More than 4 characters
// let sent = sentence.split(" ").filter(function(el){
//    return el.length<=4 ;
// }).join(" ");
// console.log(sent);
//  //ignore Numbers :

//  let ignoreNumbers = "Elz123er4o";

//  let ignore = ignoreNumbers.split("").filter(function(el){
//   return isNaN(parseInt(el))? el: "";
//  }).join("");
//  console.log(ignore);

//  let mix = "A13BS2ZX";
//  let mixx = mix.split("").filter(function(el){
//    return isNaN(parseInt(el)) ? "" : el;
//  }).map(function(el){
//    return el*el;
//  }).join(" ");
//  console.log(mixx);


// let numbers = [1,2,3,4,5];
// function addition(el){
//   return el + el;
// }

// let add = numbers.map(addition);

// let swappingCases = "elZERo";
// let inveredNumbers = [1,-10,-20,15,100,-30];
// let ignoreBooleans = "Elz123er4o";
// let sw = swappingCases.split("").map(function(el){
//    return el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase();
// }).join("");

// console.log(sw);

// let inv = inveredNumbers.map(function(el){
// return el = -el ;
// });
// console.log(inv);

// let ig = ignoreBooleans.split("").map(function(el){
//    return isNaN(parseInt(el)) ? el : "";
// }).join("");

// console.log(ig);

// let sentence = "I LOVE FOOOD CODE TOO PLAYING MUCH";

// let sen = sentence.split(" ").filter(function(element){
//     return element.length<=4 ;
// }).join(" ");
// console.log(sen);

// let mix = "A13BS2ZX";

// let m = mix.split("").filter(function(ele){
//   return isNaN(parseInt(ele)) ? "": ele ;
// }).
// map(function(ele){
//   return ele*ele;
// })
// .join("");

// console.log(m);

// ######## Reduce :
// let nums = [10,20,15,30];

// let add = nums.reduce(function(acc, current, index, array){
//  console.log(`accumulator : =>${acc}`);
//  console.log(`current element : =>${current}`);
//  console.log(`currenet element index : =>${index}`);
//  console.log(`array : =>${array}`);
//   return acc + current ;
// }, 12); //12 is the initialaz value 

// console.log(add);

// Reduce Practice :

// let theBiggest = ["Bla", "Propaganda", "Other", "AAA","Battery", "Test"];

// let check = theBiggest.reduce(function(acc, current){

//   console.log(`the Accumulator : ${acc}`);
//   console.log(`the currenet Value ${current}`);

//   return acc.length > current.length ? acc : current;
// });
// console.log(check);

// let removeChars = ["E", "@", "@", "L", "Z", "@","@","E","R","@","O"];

// let finalString= removeChars.filter(function(el){
//   return el.includes("@") ? "" : el;
// }).reduce(function(acc, current){ //n9dro n3mlo join b reduce
//   return acc+current;
// });
// console.log(finalString);

// #############ForEach ####### :

let myString = "1,2,3,E,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0";
let solution = myString.split(",").filter(function(element){
   return isNaN(parseInt(element)) ? element : "";
}).map(function(element){
  return element.includes("_") ? "" : element;
})
.reduce(function(acc, current){
  return acc + current ;
});
console.log(solution);

// ####### Object :

// let user = {
//   //Properties 
//   theName : "Imane",
//   theAge : 22,
//   city: "Tangier",
//   //methode   
//   sayhello :function(){  //the name of the methode fiha function katruturner hello 
//     return `hello`;
//   }
// };

// console.log(user.theName);

//Dot notation vs Bracket Notation  
// let thecity = "city";
// let user ={
//   theName : "Imane Ranbok" ,
//   "the Age" : 22,
//   city : "tangier",
// }
// console.log(user["the Age"]);  //bracket notation 
// console.log(user.theName); //dote notation
// console.log(user[thecity]);  //dynamique notation


//Nested Object Advanced object in a other object

// let user = {
//   name:"Imane",
//   age: 22,
//   skills : ["HTML","CSS","Jasascript"],
//   available : false ,
//   adresses :{
//     ksa : "Riyadh",
//     egypte : {
//       one: "Cairo",
//       two: "Giza",
//     },
//   },
//   checkAv : function(){
//     if(user.available == true){
//       return `Free for work`;
//     }
//     else{
//       return `not free`;
//     }
//   }
// };

// console.log(user.adresses.egypte.one);
// console.log(user.checkAv()); 
// console.log(user["adresses"].egypte.two);
// console.log(user["adresses"]["egypte"]["two"]);


// ####### Create Object with new keyword :
// let user ={
//   name : "Imane",
//   age : 20,
// };
// let user = new Object({    //the new keyword 
//   name : "Imane Ranbok",
// });

// user.age = 22;
// user.country = "Tangier";
// user.sayHello = function(){
//   return `hello word`;
// }
// console.log(user.age);
// console.log(user.name);
// console.log(user.sayHello());

// //this Keyword :
// console.log(this);

// myVar = 100;
// console.log(this.myVar);

// function sayhello(){
//   return this ;
// };
// console.log(sayhello());
// document.getElementById("show").onclick = function(){
//   console.log(this);
// };

let user = {
  age : 22 ,
  ageInDays : function(){
    return user.age*365;
  }
};
console.log(user.ageInDays());