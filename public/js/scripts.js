//@prepros-prepend instantclick.min.js
//@prepros-prepend convertkit.min.js
//@prepros-prepend scrollreveal.min.js


// Clicky Menu Action

menuToggle();

function menuToggle() {
    var $toggle = document.querySelector('.menu-toggle');

    if (!$toggle.offsetParent) {
        return;
    }

    var $body = document.querySelector('body');

    $toggle.addEventListener('click', function() {
        $body.classList.toggle('noscroll');
    });
}

/* Lazyload Youtube https://webdesign.tutsplus.com/tutorials/how-to-lazy-load-embedded-youtube-videos--cms-26743 */
(function() {

    var youtube = document.querySelectorAll( ".youtube" );

    for (var i = 0; i < youtube.length; i++) {

        var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg";

        var image = new Image();
        image.src = source;
        image.alt = "Sam Killermann Gender TED Talk"

        image.addEventListener( "load", function() {
            youtube[ i ].appendChild( image );
        }( i ) );

        youtube[i].addEventListener( "click", function() {

            var iframe = document.createElement( "iframe" );

            iframe.setAttribute( "frameborder", "0" );
            iframe.setAttribute( "allowfullscreen", "" );
            iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );

            this.innerHTML = "";
            this.appendChild( iframe );

        } );

    };

} )();

// Scrolly Header Action

function changeHeaderOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
    shrinkOn = 60,
    body = document.body,
    headerEl = document.getElementById('main-header');

    if (distanceY > shrinkOn) {
        body.classList.add("scrolled");
    } else {
        body.classList.remove("scrolled");
    }
}

// Scrolly Revealy Action

window.addEventListener('scroll', changeHeaderOnScroll);
window.sr = ScrollReveal();
sr.reveal('.reveal', { duration: 800,});
sr.reveal('.reveal-2', { duration: 800, delay: 200,});
sr.reveal('.reveal-3', { duration: 800, delay: 400,});
sr.reveal('.reveal-4', { duration: 800, delay: 600,});
