// Loader function
document.onreadystatechange = function() {
  if (document.readyState !== "complete") {
      document.querySelector(".mainPage").classList.add('d-none');
      document.querySelector(".loader").classList.remove('d-none');
  } else {
      document.querySelector(".loader").classList.add('d-none');
      document.querySelector(".mainPage").classList.remove('d-none');
  }
};

// Slide Animation JS codesd
var links = document.querySelectorAll(".navbar-nav .nav-item .nav-link");
var sections = document.querySelectorAll(".sections");
var slideBg = document.querySelector(".slideBg");
var closeBtn = document.querySelectorAll(".closeSection");

links.forEach(link => {
  link.addEventListener('click',function(e){
    document.onreadystatechange = function() {
    e.preventDefault();
    var nav = link.getAttribute('href').slice(1);
    for(var i = 0; i < sections.length; i++){
      var sectionName = sections[i].getAttribute("id");
      if(nav == sectionName){
        document.body.style.cssText = "overflow:hidden; background-color:#111";
        document.getElementById("home").classList.add('d-none');
        slideBg.classList.add('slideRight');
        setTimeout(function(){
          document.getElementById(sectionName).classList.remove('d-none');
        },800)
        setTimeout(function(){
            slideBg.classList.remove('slideRight'); 
            document.body.style.cssText = "overflow:visible; background-color:unset";
          }, 1500);
          return;
      }
    }
  })
});

closeBtn.forEach(btn => {
  btn.addEventListener('click',function(){
    document.body.style.cssText = "overflow:hidden; background-color:#111";
    var sectionName = btn.parentElement.getAttribute("id");
    document.getElementById(sectionName).classList.add("d-none");
    slideBg.classList.add('slideLeft');
    setTimeout(function(){
      document.getElementById("home").classList.remove("d-none");
    },800)
    setTimeout(function(){
        slideBg.classList.remove('slideLeft');  
        document.body.style.cssText = "overflow:visible; background-color:unset";
    }, 1500);
  })
});

// Projects
var titles = document.querySelectorAll(".projectTitle ul li a");
var projects = document.querySelectorAll(".project");

titles.forEach(title => {
  title.addEventListener('click',function(e){
    e.preventDefault();
    var titleName = title.getAttribute('href').slice(1);
    for(var i = 0; i < projects.length; i++){
      var activeTitle = document.querySelector(".projectTitle ul li.active");
      if(activeTitle != null){
        activeTitle.classList.remove('active');
      }
      if(titleName == projects[i].getAttribute("id")){
        projects[i].classList.remove('d-none');
      }else{
        projects[i].classList.add('d-none');
      }
      if(titleName == "allProjects"){
        projects[i].classList.remove('d-none');
      }
    }
    title.parentElement.classList.add('active');
  })
});
