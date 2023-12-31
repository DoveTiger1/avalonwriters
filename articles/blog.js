const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

const navbar = document.getElementById('nav');
const listLinks = document.querySelectorAll('.links a');
const topLink = document.querySelector('.top-link');

const avatarHere = document.querySelector('.logo');
avatarHere.addEventListener('click', (e) => {
  e.preventDefault();
  document.location.pathname = '/';
});

listLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.location.pathname = '/';
    if (link.textContent === 'blog') {
      document.location.href = '/blog.html';
    }
  });
});

const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
  // linksContainer.classList.toggle("show-links");

  const linksHeight = links.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

window.addEventListener('scroll', function () {
  const scrollHeight = window.scrollY;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add('fixed-nav');
  } else {
    navbar.classList.remove('fixed-nav');
  }
  // setup back to top link

  if (scrollHeight > 500) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
});

topLink.addEventListener('click', (e) => {
  // prevent default
  e.preventDefault();
  // navigate to specific spot
  const id = e.currentTarget.getAttribute('href').slice(1);
  const element = document.getElementById(id);

  const navHeight = navbar.getBoundingClientRect().height;
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const fixedNav = navbar.classList.contains('fixed-nav');
  let position = element.offsetTop - navHeight;

  if (!fixedNav) {
    position = position - navHeight;
  }
  if (navHeight > 82) {
    position = position + containerHeight;
  }

  window.scrollTo({
    left: 0,
    top: position,
  });
  // close
  linksContainer.style.height = 0;
});
