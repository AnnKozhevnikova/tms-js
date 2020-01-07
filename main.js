const data = [
    {
        firstName: 'Ashton',
        lastName: 'Kutcher',
        age: 40,
    },
    {
        firstName: 'Bradley',
        lastName: 'Pitt',
        age: 54,
    },
    {
        firstName: 'Hannah',
        lastName: 'Dakota',
        age: 24,
    },
];

function checkInf(lastName) {
    if (lastName === 'KUTCHER') {
        return data[0];
    } else
        if (lastName === 'BRADLEY') {
            return data[1];}
            else
            if (lastName === 'DAKOTA') {
                return data[2];
            } else {
                console.log('No results found for your request');
                   }
         }
let lastName='kutcher'.toUpperCase();
let result = checkInf(lastName);
console.log (result);
