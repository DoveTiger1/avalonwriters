const listLinks = document.querySelectorAll('.links a');

listLinks.forEach((link) => {
  link.addEventListener('click', () => {
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
