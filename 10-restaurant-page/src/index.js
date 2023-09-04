const nav = document.querySelector('nav');
const line = nav.querySelector('.line');
const navLinks = nav.querySelectorAll('ul li');

navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    
    // Remove the 'active' class from all nav items
    navLinks.forEach(item => item.classList.remove('active'));
    
    // Add the 'active' class to the clicked li
    this.classList.add('active');
    
    // Position the line under the clicked li with a transition
    const position = this.getBoundingClientRect();
    const navPosition = nav.getBoundingClientRect();
    line.style.transition = 'transform 0.3s ease-in-out';
    line.style.transform = `translateX(${position.left - navPosition.left}px)`;
    
    // After the transition is complete, remove the transform and set the width
    setTimeout(() => {
      line.style.transition = '';
      line.style.width = position.width + 'px';
    }, 300);
  });
});
