const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-sidebar");

const body = document.body;

// handle the showing and hiding of the
//mobile side bar

function sidebarToggle() {
  
  hamburger.addEventListener("click",(e)=>{
    if(!mobileNav.classList.contains('active')){
      mobileNav.classList.add("active");
      body.style.overflow = "hidden";
    } else {
      mobileNav.classList.remove("active");
      body.style.overflowY = "scroll";  
    }
    
  });
  
}
sidebarToggle();

