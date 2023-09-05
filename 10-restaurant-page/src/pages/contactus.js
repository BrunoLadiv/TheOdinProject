// contact.js
export function createContactPage() {
  const contactPage = document.createElement('div');
  contactPage.classList.add('contact-page');

  const contactInfoSection = document.createElement('section');
  contactInfoSection.id = 'contact-info';

  const heading = document.createElement('h2');
  heading.textContent = 'Get in Touch';

  const paragraph = document.createElement('p');
  paragraph.textContent = "Have questions, feedback, or just want to say hello? We'd love to hear from you!";

  const address = document.createElement('address');

  const addressInfo = [
    {
      label: 'Address',
      text: '123 Burger Street, Foodville',
    },
    {
      label: 'Email',
      text: 'info@burgertime.com',
    },
    {
      label: 'Phone',
      text: '+1 (555) BURGERS',
    },
  ];

  addressInfo.forEach(info => {
    const infoParagraph = document.createElement('p');
    const strong = document.createElement('strong');
    strong.textContent = info.label + ': ';
    infoParagraph.appendChild(strong);
    infoParagraph.appendChild(document.createTextNode(info.text));
    address.appendChild(infoParagraph);
  });

  contactInfoSection.appendChild(heading);
  contactInfoSection.appendChild(paragraph);
  contactInfoSection.appendChild(address);

  contactPage.appendChild(contactInfoSection);

  return contactPage;
}