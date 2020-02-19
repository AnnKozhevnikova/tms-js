(async function () {
    const products = [
        {
            id: '7df3f04b-0ee0-4a8a-bda8-e2931e68860d',
            title: 'MacBook Pro 16-inch',
            description: '2.3GHz 8-Core Processor<br>1TB Storage<br>AMD Radeon Pro 5500M',
            price: {
                value: 2799.00,
                currency: 'USD',
            },
            imageLink: 'https://www.apple.com/v/mac/home/am/images/overview/hero/macbook_pro_16__ni9nkbyq2dm6_large.jpg'
        },
        {
            id: '69d8b82e-1bc6-45a7-bcb0-ba205c91b8bd',
            title: 'MacBook Pro 13-inch',
            description: '2.4GHz Quad-Core Processor with Turbo Boost up to 4.1GHz<br>256GB Storage<br>Touch Bar and Touch ID',
            price: {
                value: 1799.00,
                currency: 'USD',
            },
            imageLink: 'https://www.apple.com/v/mac/home/am/images/overview/hero/macbook_pro_16__ni9nkbyq2dm6_large.jpg'
        },
        {
            id: '9c56a489-5581-4552-802a-6e56249b0056',
            title: 'Mac Pro',
            description: '3.5GHz 8‑core Intel Xeon W processor, Turbo Boost up to 4.0GHz<br>256GB Storage<br>Radeon Pro 580X with 8GB of GDDR5 memory',
            price: {
                value: 5999.00,
                currency: 'USD',
            },
            imageLink: 'https://www.apple.com/v/mac/home/am/images/overview/hero/mac_pro__bn92faz71k6a_large.jpg'
        },
        {
            id: 'e325ae53-ba9b-4b9e-b443-20db05f95c2e',
            title: 'MacBook Air',
            description: '2-core Intel Core i5 processor<br>1TB storage<br>12 hours battery life',
            price: {
                value: 1099.00,
                currency: 'USD',
            },
            imageLink: 'https://www.apple.com/v/mac/home/am/images/overview/compare/macbook_air__csdfieli984m_large.jpg'
        },
        {
            id: '4f50005d-b422-4adf-b1f6-3b6551862500',
            title: 'iPhone 11 Pro Max',
            description: 'Midnight Green<br>521GB Storage<br>20 hours of video playback',
            price: {
                value: 1449.00,
                currency: 'USD',
            },
            imageLink: 'https://www.apple.com/v/iphone/home/af/images/overview/compare/compare_iphone_11_pro__fvqwhr4dkhiu_large.jpg'
        }
    ];

    const currency = await fetch('http://www.nbrb.by/api/exrates/rates/145')
        .then(response=>response.json())
        .then(data=>data);
    console.log(currency);

    let contents = products.concat();

    let sortingDesc = (arr) => {
        arr.sort(function (a, b) {
            if (a.price.value > b.price.value) {
                return -1;
            }
            if (a.price.value < b.price.value) {
                return 1;
            }
            return 0;
        });
    };

    sortingDesc(contents);

    let sortingAsc = (arr) => {
        arr.sort(function (a, b) {
            if (a.price.value > b.price.value) {
                return 1;
            }
            if (a.price.value < b.price.value) {
                return -1;
            }
            return 0;
        });
    };

    const amount = document.getElementById("amount");
    const circle = document.getElementById("orange_circle");
    const input = document.getElementById("input");

    const addToBasket = (id) => event=>{
        event.preventDefault();
        const product = products.find(item => item.id===id);
        event.target.classList.toggle('active');

        if ( event.target.classList.contains('active')) {
            event.target.textContent = 'Remove from Basket';
            let loc_array = JSON.parse(localStorage.getItem("ID"));
            loc_array.push(id);
            localStorage.setItem('ID', JSON.stringify(loc_array));
            amount.textContent = (Number(amount.textContent)+product.price.value).toFixed(2);
            circle.textContent = loc_array.length;
        }
        else {
            event.target.textContent = 'Add to Basket';
            let loc_array = JSON.parse(localStorage.getItem("ID"));
            loc_array.splice(loc_array.indexOf(id),1);
            localStorage.setItem('ID', JSON.stringify(loc_array));
            amount.textContent-= (product.price.value).toFixed(2);
            circle.textContent = loc_array.length;
        }

    };

    let section = document.getElementById("section");

    let content = (arr) => {
        section.innerHTML = '';

        for (let i = 0; i < arr.length; i++) {
            let newDiv = document.createElement('div');
            newDiv.classList.add('row');
            newDiv.classList.add('main');
            let valuta;
            if (arr[i].price.currency === 'USD') {
                valuta = '$';
            }

            newDiv.innerHTML = `
<div class = "image">
                <img src = "${arr[i].imageLink}" alt = "image">
            </div>
    
            <div class = "properties">
                <p>${arr[i].title}</p>
                <p class = "characteristics">${arr[i].description}</p>
            </div>
            
            <div class = "product_price">
                <p class = "price">${valuta} ${arr[i].price.value.toFixed(2)}</p>
                <a class = "button" href = "#">Add to Basket</a>
            </div>
`;
            let a = newDiv.querySelector('.button');
            a.addEventListener('click',addToBasket(arr[i].id));

            if (localStorage.getItem("ID").includes(arr[i].id)) {
                a.classList.add('active');
                a.textContent = 'Remove from Basket';
            }

            section.appendChild(newDiv);
        }
    };
    content(contents);

    let current = JSON.parse(localStorage.getItem("ID")) || [];
    circle.textContent = current.length;

    const sum = products.reduce((acc, product) => {
        if (current.includes(product.id)) {
            acc+= product.price.value;
        }
        return acc;
    }, 0);
    amount.textContent = sum.toFixed(2);

    let DescAsc = document.getElementById("Desc");
    let flag = 0;
    DescAsc.addEventListener('click', ()=> {

        if(flag===0) {
            DescAsc.textContent = "Asc";
            sortingAsc(contents);
            content(contents);
            flag++;
        }
        else {
            DescAsc.textContent = "Desc";
            sortingDesc(contents);
            content(contents);
            flag = 0;
        }
    });

    input.addEventListener('input', (event) => {

        let search = products.filter(product => {
            let reg = new RegExp(`${event.target.value}`, 'i');
            return reg.test(product.title);
        });
        contents = search;
        if (flag===0) {
            sortingDesc(contents);
            content(contents);
        }

        else {
            sortingAsc(contents);
            content(contents);
        }

        if (contents.length===0) {
            section.innerHTML = `<p> No results found for your request </p>`;
        }
    });
})();



