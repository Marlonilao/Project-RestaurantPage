export default function() {
    const content = document.getElementById('content');

    const about = document.createElement('div');
    about.classList.add('about-section');
    content.appendChild(about);

    const h1 = document.createElement('h1');
    h1.textContent = "Davao's Finest Pastil";
    about.appendChild(h1);

    const para1 = document.createElement('p');
    para1.textContent = "Davao's Finest Pastil serves the authentic taste of Mindanao’s beloved street food. Enjoy fragrant rice topped with savory shredded meat, wrapped in banana leaves for that signature aroma and flavor.\nRooted in Davao’s rich food culture, our pastil is freshly made, affordable, and full of heart. Experience the true flavor of Davao—one delicious wrap at a time."
    about.appendChild(para1);

    const hoursSection = document.createElement('div');
    hoursSection.classList.add('hours-section');
    content.appendChild(hoursSection);

    const openHours = document.createElement('h3');
    openHours.textContent = 'Opening Hours';
    hoursSection.appendChild(openHours);

    const ul = document.createElement('ul');
    hoursSection.appendChild(ul);

    const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    const time = '10:30AM - 2PM, 5PM - 10PM';

    days.forEach(day => {
        const li = document.createElement('li');
        li.textContent = `${day}: ${time}`;
        ul.appendChild(li);
    })

    const locationSection = document.createElement('div');
    locationSection.classList.add('location-section');
    content.appendChild(locationSection)

    const location = document.createElement('h3');
    location.textContent = 'Location';
    locationSection.appendChild(location);

    const para2 = document.createElement('p');
    para2.textContent = 'Sizzling Corner, Uling avenue, Davao City';
    locationSection.appendChild(para2);
};