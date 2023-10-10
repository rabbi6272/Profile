// Get the body element of the document
var body = document.body;

// Get the anchor tag element by its id
var theme = document.getElementById("theme");
// var themeIcon = document.getElementById("theme-icon");

// Add a click event listener to the element
theme.addEventListener("click", function() {
    // Toggle the class name of the body element between "dark" and "light"
  body.classList.toggle("dark");
  body.classList.toggle("light");
});
theme.onclick = function(){
  if(body.classList.contains("dark")){
    theme.src="dark-mode.png";
  }else{
    theme.src="light-mode.png";
  }
}


// Define a CSS style for the dark and light themes
var style = document.createElement("style");
style.textContent = `
  .dark {
    --background: hsla(158, 23%, 18%, 1);
    --text:  hsla(159, 42%, 88%, 1);
    --title: hsla(160, 52%, 71%, 1);
    --nav: hsla(160, 52%, 71%, .1);
    --wbackground: #FCEDDA;
  }
  
  .light {
    --background: hsla(36, 31%, 90%, 1);
    --text: hsla(171, 15%, 35%, 1);
    --title:  hsla(172, 95%, 18%, 1);
    --nav: rgba(255, 255, 255, 0.45);
    --wbackground: #9ADFD5;
  }
`;

// Append the style to the head element of the document
document.head.appendChild(style);

// Set the initial class name of the body element to "light"
body.className = "light";



// swiper js
const swiper = new Swiper(".swiper", {
  // Optional parameters
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
