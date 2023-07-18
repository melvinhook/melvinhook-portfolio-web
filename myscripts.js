function getRandomImage() {
    // Replace 'YOUR_ACCESS_KEY' with your actual Unsplash API access key
    const accessKey = 'xY1NfK5wMCFR6NC31mOUMxokWcJETvkT2pQa-BTjogo';
    const count = 8; // Number of random images to fetch

    const apiUrl = `https://api.unsplash.com/photos/random?client_id=${accessKey}&count=${count}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const imageGrid = document.querySelector('.image-grid');
            data.forEach(photo => {
                const img = document.createElement('img');
                img.classList.add('image');
                img.src = photo.urls.regular;
                imageGrid.appendChild(img);
            });
        })
        .catch(error => console.log(error));
} 
window.addEventListener('load', function() {
    var logo = document.querySelector('.logo');
    logo.classList.add('fade-in');
}); 
function myFunction(){
    document.getElementById("dropdown_menu").classList.toggle("show");
} 
window.onclick = function(event) {
    if (!event.target.matches('.more-more-button')) {
      var dropdowns = document.getElementsByClassName("dropdown_menu");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  } 
function hover(img)
{
 img.src = "more-1.png"
} 
function hoverOut(img) 
{
  img.src = "more.png"
} 
function reveal() {
  var reveals = document.querySelectorAll(".roller1 div");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}  
function reveal2() {
  var reveals = document.querySelectorAll(".roller2 div");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}  
function reveal3() {
  var reveals = document.querySelectorAll(".roller3 div");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
} 

window.addEventListener("scroll", reveal); 
window.addEventListener("scroll", reveal2); 
window.addEventListener("scroll", reveal3); 

function igLink(){
  window.open(
    "https://www.instagram.com/net.hunt/", "_blank");
} 
function ldLink(){
  window.open("https://www.linkedin.com/in/axel-pradana-3b07371a9/","_blank");
}
