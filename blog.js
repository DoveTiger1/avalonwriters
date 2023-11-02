const links = document.querySelectorAll('.links a');

links.forEach((link) => {
  link.addEventListener('click', () => {
    document.location.href = '#' + link.textContent;
  });
});
