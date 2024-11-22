const header = document.querySelector("#sticky_head");
const sticky = header.offsetTop;
// console.log(sticky);


window.addEventListener('scroll', () => {
     if(window.pageYOffset > sticky){
        header.classList.add('sticky');
     }else{
        header.classList.remove('sticky');
     }
});
