export function createMenuSection() {
  const menuPage = document.createElement('div');
  menuPage.classList.add('menu-page');

  // Sample menu items data
  const menuItemsData = [
    {
      imgSrc: '../src/images/pngegg.png',
      imgAlt: '',
      title: 'Bacon cheeseburger',
      description: 'A classic American favorite, this burger combines a grilled beef patty, crispy bacon, and melted cheese for a savory delight.',
    },
    {
      imgSrc: '../src/images/ham2.png',
      imgAlt: '',
      title: 'Salad cheeseburger',
      description: 'A timeless classic, this sandwich features a succulent burger patty paired with melted cheese, fresh lettuce, and ripe tomato slices. A harmonious blend of flavors and textures.',
    },
    {
      imgSrc: '../src/images/ham3.png',
      imgAlt: '',
      title: 'Whooper cheeseburger',
      description: 'Twice the indulgence! This burger boasts not one but two juicy beef patties, each topped with creamy melted cheese, all nestled between a soft bun.',
    },
    {
      imgSrc: '../src/images/ham4.png',
      imgAlt: '',
      title: 'Chicken burger',
      description: 'A tantalizing fusion of flavors! This burger brings together the best of both worlds with a juicy beef patty and a seasoned chicken patty.',
    },
    {
      imgSrc: '../src/images/ham5.png',
      imgAlt: '',
      title: 'Triple Cheeseburger',
      description: "An epic burger experience! This masterpiece features three mouthwatering beef patties, each layered with creamy melted cheese, all sandwiched between a soft bun. It's a carnivore's dream.",
    },
    {
      imgSrc: '../src/images/ham6.png',
      imgAlt: '',
      title: 'Smokey Burger',
      description: "Get ready for a flavor adventure! The Sizzlin' Smokey Mountain Burger is a mouthwatering delight that combines a perfectly grilled beef patty, smoky bacon, melted cheddar cheese, and a touch of tangy barbecue sauce.",
    },
  ];

  // Create menu items
  menuItemsData.forEach(itemData => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const img = document.createElement('img');
    img.src = itemData.imgSrc;
    img.alt = itemData.imgAlt;
    img.classList.add('item-img');

    const itemDescription = document.createElement('div');
    itemDescription.classList.add('item-description');

    const title = document.createElement('h1');
    title.textContent = itemData.title;

    const description = document.createElement('p');
    description.textContent = itemData.description;

    const orderButton = document.createElement('button');
    const boxSpan = document.createElement('span');
    boxSpan.classList.add('box');
    boxSpan.textContent = 'Order now!';
    orderButton.appendChild(boxSpan);

    itemDescription.appendChild(title);
    itemDescription.appendChild(description);
    itemDescription.appendChild(orderButton);

    menuItem.appendChild(img);
    menuItem.appendChild(itemDescription);

    menuPage.appendChild(menuItem);
  });

  return menuPage;
}