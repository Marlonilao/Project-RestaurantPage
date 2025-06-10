export default function() {
    const content = document.getElementById('content');

    const h1 = document.createElement('h1');
    h1.textContent = 'Contact Us';
    content.appendChild(h1);

    const family = [
        {name: 'Mommy Tresha', position:'Chef', contact: '0912345678910', email: 'mommyTresha@kaontabai.com'},
        {name: 'Papa Dim', position: 'Manager', contact: '0912345678910', email: 'papaDim@kaontabai.com'},
        {name: 'Baby Patty', position: 'Waiter', contact: '0912345678910', email: 'babyPatty@kaontabai.com'}
    ];

    family.forEach (element => {
        const div = document.createElement('div');
        content.appendChild(div);

        const h3 = document.createElement('h3');
        h3.textContent = `${element.name}`;
        div.appendChild(h3);

        const p1 = document.createElement('p');
        p1.textContent = `${element.position}`;
        div.appendChild(p1);

        const p2 = document.createElement('p');
        p2.textContent = `${element.contact}`;
        div.appendChild(p2);

        const p3 = document.createElement('p');
        p3.textContent = `${element.email}`;
        div.appendChild(p3);
    })
};