// hambergerMenu
let hambergerIcon = document.getElementById('hambergerIcon');
let mobileMenu = document.getElementById('mobileMenu')

hambergerIcon.addEventListener('click', function () {
    mobileMenu.classList.toggle('open');
})

// open list
let select1=document.getElementById('select1');
let select2=document.getElementById('select2');

let list1=document.getElementById('list1');
let list2=document.getElementById('list2');

let arrow1=document.getElementById('arrow1');
let arrow2=document.getElementById('arrow2');

select1.addEventListener('click',function () {
    list1.classList.toggle('open');
    arrow1.classList.toggle('active');
})
select2.addEventListener('click',function () {
    list2.classList.toggle('open');
    arrow2.classList.toggle('active');
})


