import pizzaImg from './pics/pizza.jpg';

export function displayHomepage() {
    const content = document.getElementById('content');
 
    // brand
    const brandDiv = document.createElement('div');
    brandDiv.id = 'brandDiv';

    const brand = document.createElement('h1');
    brand.id = 'brand';
    brand.textContent = `Nino's Pizzaria`;

    const since = document.createElement('h3');
    since.id = 'since';
    since.textContent = 'Since 1923';

    brandDiv.appendChild(brand);
    brandDiv.appendChild(since);

    content.appendChild(brandDiv);

    // authentic
    const authentic = document.createElement('h2');
    authentic.id = 'authentic';
    authentic.textContent = 'Authentic brick oven pizza!';
    content.appendChild(authentic);

    // img
    const pizza = document.createElement('img');
    pizza.src = pizzaImg;
    pizza.id = 'pizza'
    content.appendChild(pizza);

    // location div
    const locationDiv = document.createElement('div');
    locationDiv.id = 'location';
    
    const locationTitle = document.createElement('h2');
    locationTitle.classList.add('title');
    locationTitle.textContent = 'Location';
    locationDiv.appendChild(locationTitle);

    const address = document.createElement('h3');
    address.id = 'address';
    address.textContent = '101 Pizza Ln.'
    locationDiv.appendChild(address);

    content.appendChild(locationDiv);

    // hours div
    const hours = document.createElement('div');
    hours.id = 'hours';

    const hoursTitle = document.createElement('h2');
    hoursTitle.classList.add('title');
    hoursTitle.textContent = 'Hours'
    hours.appendChild(hoursTitle);

    const hoursGroups = [
        {
            days: 'Monday - Thursday:',
            times: '11:00am - 10:00pm'
        },
        {
            days: 'Friday:',
            times: '11:00am - 11:30pm'
        },
        {
            days: 'Saturday:',
            times: '11:00am - 12:30am'
        },
        {
            days: 'Sunday:',
            times: '12:30pm - 11:30pm'
        }
    ];

    hoursGroups.forEach(group => {
        const groupDiv = document.createElement('div');
        groupDiv.classList.add('group');

        const days = document.createElement('h4');
        days.classList.add('days');
        days.textContent = group.days;

        const times = document.createElement('h5');
        times.classList.add('times');
        times.textContent = group.times;

        groupDiv.appendChild(days);
        groupDiv.appendChild(times);

        hours.appendChild(groupDiv);
    });

    content.appendChild(hours);

    // photo credit
    const credit = document.createElement('p');
    credit.id = 'credit';
    credit.innerHTML = 'Photo by ' + 
        '<a href="https://unsplash.com/@iavnt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ivan Torres</a>' + 
        ' on ' + 
        '<a href="https://unsplash.com/photos/pizza-with-berries-MQUqbmszGGM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    
    content.appendChild(credit);
}
