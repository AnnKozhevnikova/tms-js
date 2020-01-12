                 //HOME WORK 1
let minNo=function (a,b) {
    if (a<b) {
        return a;
    }
    else if(a===b) {
        return ('Введите разные значения');
    }
    else
    {
        return b;
    }
    }



console.log(minNo(6,-8));


let maxNo=function (a,b) {
    if (a>b) {
        return a;
    }
    else if(a===b) {
        return ('Введите разные значения');
    }
    else
    {
        return b;
    }
}



console.log(maxNo(-8,-8));

let MinNo=function(a,b) {
    return a>b?a:b;
};

console.log(MinNo(17,1));

                //CLASS WORK

 let word='мяу';
     let arr= word.split('');
     console.log(arr);
     let arrR= arr.reverse();
     console.log(arrR);
     if (word===arrR.join('')) {
         console.log('Полиндром!');}
                 else {
                      console.log('Не полиндром!');
                     };



 let pol= function (Word) {
     let Arr=Word.split('');
     console.log(Arr);
     let ArrR= Arr.reverse();
     console.log(ArrR);
     if (Word===ArrR.join('')) {
         return 'Полиндром!'
     } else {
         return 'Не полиндром!'
     }
 }

console.log(pol('шабаш'));

                 //HOMEWORK 2

let change=function(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 10 === 0) {
            array[i] = array[i].toString();
            array[i] = array[i].replace(/0/g, 'zero');
        }
    }
    return array;
};
let array = [5, 86, 20, 4, 100, 66, 890, 33, 80, 9];
console.log(array);

console.log(change(array));














