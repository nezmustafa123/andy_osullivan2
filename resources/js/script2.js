 $(document).ready(function(){
    

var iconMenu = document.querySelector('.menu_toggler');
 var menu = document.querySelector('.main-nav');


iconMenu.addEventListener('click', function(){
        this.classList.toggle('active');

        menu.classList.toggle('active');
        menu.slideToggle(200);
  });
 
});