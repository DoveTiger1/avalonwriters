// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
// select span
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// ********** close links ************
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

// ********** fixed navbar ************

const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

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

// ********** smooth scroll ************

const avatar = document.querySelector('.logo');
avatar.addEventListener('click', (e) => {
  window.scrollTo({
    left: 0,
    top: 0,
  });
});

// select links
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach((link) => {
  if (link.textContent === 'blog') return;
  link.addEventListener('click', (e) => {
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
    if (navHeight > 83.1875) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
    // close
    linksContainer.style.height = 0;
  });
});

// calculate heights

// https://www.googleadservices.com/pagead/aclk?sa=L&ai=C-d4ctic_ZYmGBKT_mLAPmM2amAOB-47Rb7WDkLeGEbCQHxABIABgt7yDhfQwggEXY2EtcHViLTYyMTk4MTE3NDcwNDkzNzGgAeTnkKoCqAMEyAMKqgSJA0_QVQKpndbd7Wge7ZaqOBLzK7K8Ow7-xRKkeSaSXlASZuILKNXN0GCqZErwz-iWxiGvi5okaHcinecSiRGvkSgNwkTWT_whzu8sfA55zjSXNPQYCB4LzeiUgq6VelukmNAPuoLweeTYoGns1gijb9mHo7pNkYYOVXiEyM-13qAbcv1NgF297iwzPIUFh-5s1C4x4fuwDDcp9lbA45p5u5fjpsifxB5P82O0dIFKYwNg01xNDUD9pdnHA1bYTeF4hWsbK8RdIhPh7WtMQrTZhFoPH60CdQuBNzzNroQP-4vsffW2tsVoriJKRYKC4Yms9dPRa0XPZT4X836LKIozv-9so-DPKfGSSOr740SKlPcuC8GZHC1C9D9AqDj1A5Hn71n6wU3On2kSwa4484CiCoDyvO3QdSybBzNNgAHZXz72e9bV7_8YZkZOYuSGVrBy1k3Ltf7q27larhKtd66Dy46QiSTG1P5wKof27PHXQxmZLynb2jAYuK9VHJqFJl9GfA2Gj5UqGCGfaJIFCggTaAJ47cm1-wGgBm6AB-CErdoBiAcBkAcCqAf5sbECqAfnnbECqAfonbECqAfqt7ECqAentbECqAfvtbECqAfwtbECqAeCqrECqAeECKgHqNIbqAe2B6gHjM0bqAex3BuoB6SasQKoB5GfsQKoB7CbsQKoB9-hsQKoB66xsQKoB6aqsQKoB_2ysQKoB_e4sQKoB_i4sQKoB4HGG6gH_K-xAqgHq8UbqAfmnbECqAfIn7ECqAe3obECqAfetbECqAfrpbECqAfKqbEC0ggdCAAQAhhaMgSAgIACOgiP0ICAgICECEjZoNI1UBTyCB9jYS15dC1ob3N0LXB1Yi0wMzQwMTIxNDk0NDU2NzUxmglPaHR0cHM6Ly90b3BpY2Fuc3dlcnMuY29tL2JlY29tZS1hLXNvZnR3YXJlLWRldmVsb3Blci1mYXN0LWFuZC1hdC1saXR0bGUtY29zdC05L7EJGNp-MUeTPM_ICQDICYoCmAsBoQst-dQMvcGgK7oLgwEIARAFGAQgCCgBMAZAAUgAWAFgAGgAcAGIAQCYAQGiAVYKHAgAIAMoA9q4BBIyEDoOCgwoMEi05sn4zROYGQFYAXAB0AEBqAIFsgIoCAMQARoMCPupsJkGELe8vpQD2rgEEjIQOg4KDCgwSLTmyfjNE5gZAcACAqgBAdgBAYACAYgCBtALEtoMHwoKEKCv2u7d76LbKBICAQMaDRjNicu5SSDNkp-BoQSaDQESqg0CTke4E____________wGIFAKwFAHAFYGAgEDQFQHYFQGYFgHiFgIIAYAXAYoXGAgDGAEgASgBMAE4AUABSAFQAVgBYAJwAaAXAakXAV7T7C7X7H26FwQoADAA&ase=2&num=1&cid=CAESD-D2ROQLRZyaXISBrFlmdA&sig=AOD64_0zcYfLoK1Mh3OddMuaACKKivW6Eg&ms=[CLICK_MS]&adurl=https://topicanswers.com/become-a-software-developer-fast-and-at-little-cost-9/&nb=8&nx=238&ny=146&dim=[DIM]&nis=6
