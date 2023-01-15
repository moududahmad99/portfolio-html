$(function(){
    $('#bar-icon').click(function(){
        $(this).toggleClass('fa-times');
        $('.home-navNprofile').toggleClass('toggle');
    });
});
let changeIcon = function (icon) {
    icon.classList.toggle('fa-xmark')
}

let home = document.querySelector('.home-navNprofile');
let toggleBtn = document.querySelector('.toggle-menu')

toggleBtn.addEventListener('click', () => {
    home.classList.toggle('toggle')
});