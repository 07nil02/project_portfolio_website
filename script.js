var typed=new Typed(".input",{
  strings:["Nilay Choudhary","a Web Developer"],
  typeSpeed:65,
  backSpeed:55,
  loop:true
})

let menuicon=document.querySelector(".menu-icon");
let navbar=document.querySelector(".navbar");
let icon=document.querySelector(".menu-icon i");

menuicon.addEventListener("click",function(){
  navbar.classList.toggle("open");
  if(icon.classList.contains("fa-bars")){
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  }
  else{
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
})
