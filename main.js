//HOMEWORK 1
// const sum = (a) => {
//
//     return function (b) {
//         return a+b;
//     };
// };
//
// console.log(sum(5)(2));


//HOMEWORK2 криво

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

const text1=document.getElementById('text1');
const text2=document.getElementById('text2');
const text3=document.getElementById('text3');



 let f1=() => {
 let i=0;
 return () => {
  text1.style.color = colors[i];
  i++;
  if (i==colors.length){i=0};
 }
}
text1.addEventListener('click',f1());


text2.addEventListener('click', event => {
 event.preventDefault();
 text2.style.color = 'magenta';
});

text3.addEventListener('click', event => {
 event.preventDefault();
 text3.style.color = 'skyblue';
});
