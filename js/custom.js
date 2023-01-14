$(function(){
    $('#bar-icon').click(function(){
        $(this).toggleClass('fa-times');
        $('.home-navNprofile').toggleClass('toggle');
    });
});
let changeIcon = function (icon) {
    icon.classList.toggle('fa-xmark')
}