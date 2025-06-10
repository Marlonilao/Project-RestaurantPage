export default function() {
    const content = document.getElementById('content');


    const h1 = document.createElement('h1');
    h1.textContent = 'Menu';
    content.appendChild(h1);

    const menu = document.createElement('div');
    menu.classList.add('menu');
    content.appendChild(menu);


    const div1 = document.createElement('div');
    menu.appendChild(div1);

    const h31 = document.createElement('h3');
    h31.textContent = 'BBQ & Sugba'
    div1.appendChild(h31);
    
    const ul1 = document.createElement('ul');
    div1.appendChild(ul1);

    const bbqMeals = ['Chicken BBQ','BBQ Skewers(3pcs)','Sugba Liempo','Sugba Bangus'];
    bbqMeals.forEach(element => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        if (element == 'Chicken BBQ') {
            span.textContent = 'PHP120.00';
            li.textContent = `${element} `;
        } else if (element == 'BBQ Skewers(3pcs)') {
            span.textContent = 'PHP90.00';
            li.textContent = `${element} `;
        } else if (element == 'Sugba Liempo') {
            span.textContent = 'PHP140.00';
            li.textContent = `${element} `;
        } else if (element == 'Sugba Bangus') {
            span.textContent = 'PHP140.00';
            li.textContent = `${element} `;
        };
        li.appendChild(span);
        ul1.appendChild(li);
    });


    const div2 = document.createElement('div');
    menu.appendChild(div2);

    const h32 = document.createElement('h3');
    h32.textContent = 'Pastil Specials'
    div2.appendChild(h32);

    const ul2 = document.createElement('ul');
    div2.appendChild(ul2);

    const pastils = [{name: 'Chicken Pastil', price: 'PHP40.00'},{name: 'Spicy Chicken Pastil', price: 'PHP45.00'},{name: 'Beef Pastil', price: 'PHP40.00'},{name: 'Spicy Beef Pastil', price: 'PHP45.00'}]
    pastils.forEach(element => {
        const li = document.createElement('li');
        const span = document.createElement('span')
        span.textContent = `${element.price}`;
        li.textContent = `${element.name} `
        li.appendChild(span);
        ul2.appendChild(li);
    });


    const div3= document.createElement('div');
    menu.appendChild(div3);

    const h33 = document.createElement('h3');
    h33.textContent = 'Extras';
    div3.appendChild(h33);

    const ul3 = document.createElement('ul');
    div3.appendChild(ul3);

    const extras = [{name: 'Plain Rice', price: 'PHP20.00'},{name: 'Egg', price: 'PHP15.00'},{name:'Atchara', price: 'PHP15.00'}];
    extras.forEach(element => {
        const li = document.createElement('li');
        const span = document.createElement('span')
        span.textContent = `${element.price}`;
        li.textContent = `${element.name} `
        li.appendChild(span);
        ul3.appendChild(li);
    });

    const div4= document.createElement('div');
    menu.appendChild(div4);

    const h34 = document.createElement('h3');
    h34.textContent = 'Beverages'
    div4.appendChild(h34);

    const ul4 = document.createElement('ul');
    div4.appendChild(ul4);

    const beverages = [{name: 'Bottled Water', price: 'PHP20.00'},{name:'Soft Drinks (Coke/Sprite/Royal)', price: 'PHP30.00', name: 'Ice Tea', price: 'PHP25.00'}, {name:'San Mig Light', price: 'PHP70.00'},{name: 'San Miguel Pilsen', price: 'PHP70.00'},{name: 'Red Horse Stalion', price: 'PHP70.00'}];
    beverages.forEach(element => {
         const li = document.createElement('li');
        const span = document.createElement('span')
        span.textContent = `${element.price}`;
        li.textContent = `${element.name} `
        li.appendChild(span);
        ul4.appendChild(li);
    });
}