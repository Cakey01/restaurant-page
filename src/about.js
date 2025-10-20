export function displayAbout() {
    const content = document.getElementById('content');

    const div = document.createElement('div');
    const title = document.createElement('h1');

    div.id = 'aboutContent';
    title.classList.add('title');
    title.textContent = 'Contact Us';
    div.appendChild(title);

    const info = [
        {
            type: 'Phone Number: ',
            contact: '(555)555-5555'
        },
        {
            type: 'Email: ',
            contact: 'Ninospizzaria@email.com'
        },
        {
            type: 'Address: ',
            contact: '101 Pizza Ln.'
        }
    ];

    info.forEach(data => {
        const group = document.createElement('div');
        group.classList.add('conGroup');

        const h3 = document.createElement('h3');
        const h5 = document.createElement('h5');
        h3.textContent = data.type;
        group.appendChild(h3);
        h5.textContent = data.contact;
        group.appendChild(h5);

        div.appendChild(group);
    });

    content.appendChild(div);
}