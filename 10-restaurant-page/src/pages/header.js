export function createHeader() {
  const header = document.createElement('header');
  
  const logoImg = document.createElement('img');
  logoImg.classList.add('logo-img');
  logoImg.src = '../src/images/logo.png';
  logoImg.alt = 'logo';

  const nav = document.createElement('nav');
  
  const ul = document.createElement('ul');
  
  const homeLi = document.createElement('li');
  homeLi.classList.add('active');
  const homeLink = document.createElement('a');
  homeLink.href = '';
  homeLink.textContent = 'Home';
  homeLi.appendChild(homeLink);
  
  const menuLi = document.createElement('li');
  const menuLink = document.createElement('a');
  menuLink.href = '';
  menuLink.textContent = 'Menu';
  menuLi.appendChild(menuLink);
  
  const contactLi = document.createElement('li');
  const contactLink = document.createElement('a');
  contactLink.href = '';
  contactLink.textContent = 'Contact Us';
  contactLi.appendChild(contactLink);

  ul.appendChild(homeLi);
  ul.appendChild(menuLi);
  ul.appendChild(contactLi);

  const line = document.createElement('div');
  line.classList.add('line');

  nav.appendChild(ul);
  nav.appendChild(line);

  header.appendChild(logoImg);
  header.appendChild(nav);

  return header;
}