
const header = document.querySelector('.main_bar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 120) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(link.getAttribute('href'))
        ?.scrollIntoView({ behavior: 'smooth' });
    });
});

const tabs = document.querySelectorAll('.bestseller_tabs .tab');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});

document.querySelectorAll('.color_swatches').forEach(group => {
    const swatches = group.querySelectorAll('.swatch');
  
    swatches.forEach(swatch => {
      swatch.addEventListener('click', () => {
        swatches.forEach(s => s.classList.remove('active'));
        swatch.classList.add('active');
      });
    });
});
  
const giftingCards = document.querySelectorAll('.gifting_card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2
});

giftingCards.forEach(card => observer.observe(card));

  