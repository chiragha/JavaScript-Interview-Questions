const menuToggle = document.querySelector('.menu1');
const menuList = document.querySelector('#menu-list');

menuToggle.addEventListener('click', function(){
    menuList.classList.toggle('active');
})