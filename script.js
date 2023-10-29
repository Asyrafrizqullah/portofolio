// script.js

// Efek smooth scroll untuk tautan di navbar
$('nav a').on('click', function (event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function () {
            window.location.hash = hash;
        });
    }
});

// Efek parallax pada header
$(window).scroll(function () {
    const scrollTop = $(this).scrollTop();
    $('.jumbotron').css('background-position-y', -(scrollTop / 3) + 'px');
});

// Efek hover pada gambar profil
$('.img-fluid').hover(function () {
    $(this).css('transform', 'scale(1.1)');
}, function () {
    $(this).css('transform', 'scale(1)');
});
