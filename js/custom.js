$(function () {
    $('#bar-icon').click(function () {
        $(this).toggleClass('fa-times');
        $('.home-navNprofile').toggleClass('toggle');
    });
});

$(document).ready(function () {
    var mixer = mixitup('.grid')
})

let changeIcon = function (icon) {
    icon.classList.toggle('fa-xmark')
}

let home = document.querySelector('.home-navNprofile');
let toggleBtn = document.querySelector('.toggle-menu')

toggleBtn.addEventListener('click', () => {
    home.classList.toggle('toggle')
});

// counter up
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 500,
        offset: 70,
        beginAt: 5,
        formatter: function (n) {
            return n.replace(/,/g, '.');
        }
    });
})
