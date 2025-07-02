// Script File

// Home Section Starts
var menuBtn = document.querySelector('.main-navbar .menu-btn');
var menuList = document.querySelector('.main-navbar .nav-list');
var menuListItems = document.querySelectorAll('.nav-list li a');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menuList.classList.toggle('active');
});

for(var i = 0; i < menuListItems.length; i++){
	menuListItems[i].addEventListener('click', menuItemClicked);
}
function menuItemClicked(){
	menuBtn.classList.remove('active');
	menuList.classList.remove('active');
}

var homeSection = document.querySelector('.home');
window.addEventListener('scroll', pageScrollFunction);
window.addEventListener('load', pageScrollFunction);

function pageScrollFunction(){
	if(window.scrollY > 120){
		homeSection.classList.add('active');
	}
	else{
		homeSection.classList.remove('active');
	}
}
// Home Section Ends

// Partners Section Starts 
$('.partners-slider').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>",
             "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        500:{
            items:2
        },
        700:{
            items:3
        },
        1000:{
        	items:5
        }
    }
})
// Partners Section Ends 

// Testimonials Section Starts
$('.testimonials-slider').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:6000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>",
             "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        }
    }
})
function login() {
  const name = document.getElementById("name").value;
  const college = document.getElementById("college").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const photoFile = document.getElementById("profileImg").files[0];

  if (!name || !college || !email || !password) {
    alert("Please fill all fields");
    return;
  }

  const studentId = "3SKILL-" + Math.floor(1000 + Math.random() * 9000);

  if (photoFile) {
    const reader = new FileReader();
    reader.onload = function (e) {
      localStorage.setItem("studentPhoto", e.target.result);
      saveDetails();
    };
    reader.readAsDataURL(photoFile);
  } else {
    saveDetails();
  }

  function saveDetails() {
    localStorage.setItem("studentEmail", email);
    localStorage.setItem("studentId", studentId);
    localStorage.setItem("studentName", name);
    localStorage.setItem("studentCollege", college);
    window.location.href = "profile.html";
  }
}
function showSuggestions() {
    document.getElementById("courseSuggestions").style.display = "block";
  }

  function goToCourse() {
    window.location.href = "InternshipGuarantee.html";
  }

  document.addEventListener("click", function (event) {
    const searchBar = document.querySelector(".search-bar");
    const suggestionBox = document.getElementById("courseSuggestions");

    if (!searchBar.contains(event.target) && !suggestionBox.contains(event.target)) {
      suggestionBox.style.display = "none";
    }
  });
   document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const navList = document.querySelector(".nav-list");

    menuBtn.addEventListener("click", function () {
      navList.classList.toggle("active");
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const navList = document.querySelector(".nav-list");

    menuBtn.addEventListener("click", function () {
      navList.classList.toggle("active");
    });
  });
// Testimonials Section Ends