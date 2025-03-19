/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  let x = document.getElementById("mytab");
  if (x.className === "tab") {
    x.className += " responsive";
  } else {
    x.className = "tab";
  }
}

/* slideshow script */
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

/* form script */
function validateForm() {
  const checkboxes = document.getElementsByName('opleiding');
  let checked = false;

  // Controleer of er minstens één checkbox is geselecteerd
  for (let checkbox of checkboxes) {
      if (checkbox.checked) {
          checked = true;
          break;
      }
  }

  // Bepaal welke foutmelding zichtbaar moet zijn
  const errorMessage = window.innerWidth <= 1081 
      ? document.getElementById('errorMessage2') 
      : document.getElementById('errorMessage');

  if (!checked) {
      errorMessage.innerText = 'Selecteer minimaal één opleiding om verder te gaan.';
      return false; // Formulier wordt niet verzonden
  } else {
      errorMessage.innerText = ''; // Foutmelding wissen
  }

  return true; // Formulier wordt verzonden
}

/* google maps script */
function myMap() {
  let mapProp= {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
  };
  let map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
  }

/* Footer script */
n =  new Date();
y = n.getFullYear();
document.getElementById("year").innerHTML = y;