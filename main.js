/*console.log ("Hello world");
 let manager;
 let name;*/
 let currentUser;

/* name = 'Вася';
 manager = name;
 currentUser = manager;*/

 console.log (currentUser);

let name = "Вася";
console.log( `hello ${1}` );
console.log( `hello ${"name"}` );
console.log( `hello ${name}` );


console.log(" \n \n" - 2);
console.log(true + false);
console.log(false + false);
console.log(6 / "3");
console.log("2" * "3");
console.log (7 / 0); //ааааа матанализзззз
console.log(4 + 5 + "px");
console.log(" " + 3 + 0); // почему 30 ? это 3+0 и ничего = 30 или 3+0=3, а 3+ничего=0? или перевод слева направо?
console.log(" " - 4 + 0);
console.log("!" + 2 + 5); // почему всё переводит в строку? потому что ! на первом месте?
console.log("1" - 2);
console.log("3px" - 2);
console.log("  -9  " + 5);
console.log("  -9  " - 5);
console.log(null + 1);
console.log(undefined + 1); // почему Nan
console.log();
" \n \n" - 2; // ??? /n /n-2?  nan NO
; // 1 it's ok
; //0 it's ok
6 / "3"; // 2 it's ok
"2" * "3"; //6 it's ok
7 / 0; // ??? 0? NO
4 + 5 + "px";  //9px it's ok
" " + 3 + 0; //3 NO
" " - 4 + 0; //-4?yes nan-no
"!" + 2 + 5; //7! NO
"1" - 2; //  -1  it's ok
"3px" - 2; //nan it's ok
"  -9  " + 5; // -95 it's ok
"  -9  " - 5; // -14  it's ok
null + 1; // 1?? it's ok
undefined + 1; // 1? NO


console.log(2 > 4);
console.log(undefined == null);
console.log(undefined === null);
console.log(false == 0);
console.log(false == "");
console.log(false === "");

2 > 4 //false it's ok
undefined == null // true it's ok
undefined === null // false it's ok
false == 0 // true it's ok
false == "" // true it's ok
false === "" // false it's ok


let animal= {
    type:"dog",
    weight:40,
    color: "green",
    speed: 10,
};

delete animal.weight;
console.log (animal);







