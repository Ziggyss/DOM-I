const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const anchors = document.querySelectorAll('a');
anchors[0].textContent = siteContent["nav"]["nav-item-1"];
anchors[1].textContent = siteContent["nav"]["nav-item-2"];
anchors[2].textContent = siteContent["nav"]["nav-item-3"];
anchors[3].textContent = siteContent["nav"]["nav-item-4"];
anchors[4].textContent = siteContent["nav"]["nav-item-5"];
anchors[5].textContent = siteContent["nav"]["nav-item-6"];

let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);

let middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const ctaText = document.querySelector('.cta-text');
ctaText.children[0].innerText = 'DOM \r\n Is \r\n Awesome';

const button = document.querySelector('button');
button.innerText = siteContent['cta']['button'];

const paragraphs = document.getElementsByTagName('p');
paragraphs[0].innerText = siteContent['main-content']['features-content'];

paragraphs[1].innerText = siteContent['main-content']['about-content'];

paragraphs[2].innerText = siteContent['main-content']['services-content'];

paragraphs[3].innerText = siteContent['main-content']['product-content'];

paragraphs[4].innerText = siteContent['main-content']['vision-content'];

paragraphs[5].innerText = '123 Way 456 Street \r\n Somewhere, USA';

paragraphs[6].innerText = siteContent['contact']['phone'];

paragraphs[7].innerText = siteContent['contact']['email'];

paragraphs[8].innerText = siteContent['footer']['copyright'];

const h4s = document.getElementsByTagName('h4');
h4s[0].textContent = siteContent['main-content']['features-h4'];
h4s[1].textContent = siteContent['main-content']['about-h4'];
h4s[2].textContent = siteContent['main-content']['services-h4'];
h4s[3].textContent = siteContent['main-content']['product-h4'];
h4s[4].textContent = siteContent['main-content']['vision-h4'];
h4s[5].textContent = siteContent['contact']['contact-h4'];

anchors.forEach(element => {
  element.style.color = 'green';
});

var a = document.createElement('a');
var a2 = document.createElement('a');

let nav = document.querySelector('nav');

nav.prepend(a);
nav.appendChild(a2);

nav.children[0].innerText = 'Home';
nav.children[0].style.color = 'green';

nav.children[7].innerText = 'Search';
nav.children[7].style.color = 'green';

ctaText.style.color = "teal";
button.style.color = "red";
anchors.forEach(element => {
  element.style.color = 'teal';
});
//This is interesting - why did it only change the colour of the previously created anchors and not the newly added ones? I noticed earlier that they don't automatically inherit the style of their element.

paragraphs[0].style.fontStyle = 'italic';

var eventButton = document.createElement('button');
ctaText.appendChild(eventButton);
eventButton.innerText = 'Update Content';

eventButton.addEventListener('click', (event) => {
  alert('Updating Content');
  window.location.reload();
});






