// TOGGLE NAVBAR
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
}


// ACTIVE LINKS FOR SECTIONS
let sections = document.querySelectorAll("section")
let navLinks = document.querySelectorAll("header nav a")

window.onscroll = () => {
  sections.forEach(section => {
    let top = window.scrollY
    let offset = section.offsetTop - 150
    let height = section.offsetHeight
    let id = section.getAttribute("id")

    if(top >= offset && top < offset + height){
      navLinks.forEach(link =>{
        link.classList.remove("active")
        document.querySelector("header nav a[href*= "+ id +"]").classList.add("active")
      })
    }
  })
  // REMOVE TOGGLE ICON AND NAVBAR
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
}


// SENDING EMAIL
var form = document.getElementById("contact-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.classList.add('success');
      status.innerHTML = "Successfully Sent";
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
            status.classList.add('error');
            status.innerHTML = "Oops! There was a problem submitting your form"
        }
      })
    }
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)

