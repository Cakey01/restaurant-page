export function displayMenu() {
    const content = document.getElementById('content');

    // menu content div
    const menuContent = document.createElement('div');
    menuContent.id = 'menuContent';

    // menu title
    const menu = document.createElement('h1');
    menu.classList.add('title');
    menu.textContent = 'Menu'
    menuContent.appendChild(menu);

    // items
    const menuItems = [
        {
            section: 'Size',
            id: 'sizes',
            items: [
                {
                    name: 'Personal',
                    measurement: `6"`
                },
                {
                    name: 'Small',
                    measurement: `10"`
                },
                {
                    name: 'Medium',
                    measurement: `12"`
                },
                {
                    name: 'Large',
                    measurement: `15"`
                }
            ]
        },
        {
            section: 'Crust',
            id: 'crusts',
            items: [
                { name: 'Regular' }, 
                { name: 'Thin' }, 
                { name: 'New York Style' }, 
                { name: 'Deep Dish' }
            ]
        },
        {
            section: 'Sauce',
            id: 'sauces',
            items: [
                { name: 'Regular' }, 
                { name: 'Marinara' }, 
                { name: 'BBQ' }, 
                { name: 'Alfredo' }, 
                { name: 'Pesto' }, 
                { name: 'Garlic Parmesan' }
            ]
        },
        {
            section: 'Cheese',
            subsections: [
                {
                    subsection: 'Type',
                    id: 'types',
                    items: ['Mozzarella', 'Cheddar', 'Pepper Jack', 'Provologne', 'Feta']
                },
                {
                    subsection: 'Amount',
                    id: 'amounts',
                    items: ['Light', 'Normal', 'Extra']
                }
            ]
        },
        {
            section: 'Toppings',
            id: 'toppings',
            items: [
                { name: 'Black Olives' },
                { name: 'Mushrooms' },
                { name: 'Bell Peppers' },
                { name: 'Tomatoes' },
                { name: 'Spinach' },
                { name: 'Onions' },
                { name: 'Pineapple' },
                { name: 'Pepperoni' },
                { name: 'Bacon' },
                { name: 'Ham' },
                { name: 'Sausage' },
                { name: 'Hot Sauce' }
            ]
        }
    ]

    menuItems.forEach(group => {
        // create group div
        // div class='item'
        const groupDiv = document.createElement('div');
        groupDiv.classList.add('item');

        // create title
        // <h2 class='title'
        const title = document.createElement('h2');
        title.classList.add('title');
        title.textContent = group.section;
        groupDiv.appendChild(title);
        
        if (group.subsections) {
            groupDiv.classList.add('cheese');
            group.subsections.forEach(sub => {
                // subtitle
                const subTitle = document.createElement('h3');
                subTitle.classList.add('title', sub.subsection);
                subTitle.textContent = sub.subsection;
                groupDiv.appendChild(subTitle);

                //div
                const subDiv = document.createElement('div');
                subDiv.classList.add(sub.id);

                // items
                sub.items.forEach(item => {
                    const name = document.createElement('h4');
                    name.textContent = item;
                    subDiv.appendChild(name);
                });
                groupDiv.appendChild(subDiv);
            });
        }

        if (group.items) {
            // create names div
            const itemsDiv = document.createElement('div');
            itemsDiv.id = group.id;

            // create each name (and measurement)
            group.items.forEach(item => {
                // make names
                const name = document.createElement('h4');
                name.textContent = item.name;
                itemsDiv.appendChild(name);

                // if measurement exists
                if (item.measurement) {
                    const measurement = document.createElement('h5');
                    measurement.textContent = item.measurement;
                    itemsDiv.appendChild(measurement);
                }

            });
            groupDiv.appendChild(itemsDiv);
        }
        menuContent.appendChild(groupDiv);
    });
    content.appendChild(menuContent);
}