import bbqIcon from './bbq.png';


export default function() {
    const content = document.getElementById('content');

    const h1 = document.createElement('h1');
    h1.textContent = '"Kaon Ta, Bai!"  ';
    content.appendChild(h1);

    const iconBbq = document.createElement('img');
    iconBbq.src = bbqIcon;
    iconBbq.style.width = '38px';
    iconBbq.style.height = '38px';
    iconBbq.style.position = 'absolute';
    iconBbq.style.top = '72px';
    h1.appendChild(iconBbq);

    const about = document.createElement('div');
    about.classList.add('about-section');
    content.appendChild(about);

    const para1 = document.createElement('p');
    para1.textContent = "Where Dabawenyos satisfy their BBQ cravings, one skewer at a time.\nA casual and homey eatery serving well-loved Filipino BBQ, pastil, and rice bowls. Perfect for barkada hangouts or solo meals with lutong-bahay feels."
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