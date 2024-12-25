
$(document).ready(function(){

     $('.menu-btn').click(function(){
     $('.navbar .menu').toggleClass("active");
     $('.menu-btn i').toggleClass("active");
     });
}); 
$(document).ready(function(){

    $('.arrow').click(function(){
    $('.navbar .dropdown').toggleClass("active");
    $('.arrow i').toggleClass("active");
    });
}); 
let next=document.querySelector('.next');
let prev=document.querySelector('.prev');
let slider=document.querySelector('.slider');
next.addEventListener('click', function(){
    let slide=document.querySelectorAll('.slide');
    slider.appendChild(slide[0]);
})
prev.addEventListener('click', function(){
    let slide=document.querySelectorAll('.slide');
    slider.prepend(slide[slide.length - 1]);
})
document.addEventListener("DOMContentLoaded", function(event){
let circle=document.querySelectorAll('.circle');
circle.forEach(function(progress){
    let degree=0;
    var targetDegree=parseInt(progress.getAttribute('data-degree'));
   let color=progress.getAttribute('data-color' ) ;
    let number=progress.querySelector('.number');
    var interval=setInterval(function(){
        degree += 1;
        if (degree > targetDegree){
            clearInterval(interval);
            return;
        }
        progress.style.background = `conic-gradient( ${degree}%, #08f9ff 0%)`;
        progress.style.background = `conic-gradient(${color}, #08f9ff 0%)`;
        number.innerHTML =  degree  ;
      //  number.style.color=color
    },50)
})
});

function sendEmail(){
Email.send({
    Host : "smtp.gmail.com",
    Username:"rahelbirihanu07@gmail.com",
    Password:"",
    To:'rahelbirihanu07@gmail.com',
    From:document.getElementById("email").value,
    Subject:"Contact form",
    Body:"And this is the body",

}).then(
    message => alert(message)
);
}

/*function sendEmail(){
Email.send({
    Host : "smtp.gmail.com",
    Username : "rahelbirihanu07@gmail.com",
    Password : "@rich21@",
    To : 'rahelbirihanu07@gmail.com',
    From : document.getElementById("email").value,
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);}*/