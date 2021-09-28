// Slide Animation JS codesd
var links = document.querySelectorAll(".navbar-nav .nav-item .nav-link");
var sections = document.querySelectorAll(".sections");
var slideBg = document.querySelector(".slideBg");
var closeBtn = document.querySelectorAll(".closeSection");

links.forEach(link => {
  link.addEventListener('click',function(e){
    e.preventDefault();
    var nav = link.getAttribute('href').slice(1);
    for(var i = 0; i < sections.length; i++){
      var sectionName = sections[i].getAttribute("id");
      if(nav == sectionName){
        document.body.style.overflow = "hidden";
        document.getElementById("home").classList.add('d-none');
        slideBg.classList.add('slideRight');
        sections[i].classList.remove('d-none');
        setTimeout(function(){
            slideBg.classList.remove('slideRight'); 
            document.body.style.overflow = "visible";
        }, 1500);
      }
    }
  })
});

closeBtn.forEach(btn => {
  btn.addEventListener('click',function(){
    document.body.style.overflow = "hidden";
    var sectionName = btn.parentElement.getAttribute("id");
    document.getElementById(sectionName).classList.add("d-none");
    document.getElementById("home").classList.remove("d-none");
    slideBg.classList.add('slideLeft');
    setTimeout(function(){
        slideBg.classList.remove('slideLeft');  
        document.body.style.overflow = "visible";
    }, 1500);
  })
});
