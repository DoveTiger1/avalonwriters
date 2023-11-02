const links = document.querySelectorAll('.links a');

links.forEach((link) => {
  link.addEventListener('click', () => {
    document.location.pathname = '/';
    if (link.textContent === 'blog') {
      document.location.href = '/blog.html';
    } 
  });
});
