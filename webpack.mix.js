const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

<!-- Bootstrap CSS File -->
mix.styles([

        'resources/views/back/css/vendors/iconfonts/mdi/css/materialdesignicons.min.css',
        'resources/views/back/css/vendors/iconfonts/ionicons/dist/css/ionicons.css',
        'resources/views/back/css/vendors/iconfonts/flag-icon-css/css/flag-icon.min.css',
        'resources/views/back/css/vendors/css/vendor.bundle.base.css',
        'resources/views/back/css/vendors/css/vendor.bundle.addons.css',
        'resources/views/back/css/css/shared/style.css',
        'resources/views/back/css/css/demo_1/style.css',

    ],

    'public/back/css/app.css')





mix.scripts([

    'resources/views/back/js/vendors/js/vendor.bundle.base.js',
    'resources/views/back/js/vendors/js/vendor.bundle.addons.js',
    'resources/views/back/js/js/shared/off-canvas.js',
    'resources/views/back/js/js/shared/misc.js',
    'resources/views/back/js/js/demo_1/dashboard.js',



],'public/back/js/app.js')





mix.styles([

        'resources/views/front/css/lib/animate/animate.min.css',
        'resources/views/front/css/lib/ionicons/css/ionicons.min.css',
        'resources/views/front/css/lib/owlcarousel/assets/owl.carousel.min.css',
        'resources/views/front/css/lib/lightbox/css/lightbox.min.css',
        'resources/views/front/css/lib/bootstrap/css/bootstrap.min.css',
        'resources/views/front/css/css/style.css',

    ],



    'public/front/css/app.css')


mix.scripts([

    'resources/views/front/js/lib/jquery/jquery.min.js',
    'resources/views/front/js/lib/jquery/jquery-migrate.min.js',
    'resources/views/front/js/lib/bootstrap/js/bootstrap.bundle.min.js',
    'resources/views/front/js/lib/easing/easing.min.js',
    'resources/views/front/js/lib/mobile-nav/mobile-nav.js',
    'resources/views/front/js/lib/wow/wow.min.js',
    'resources/views/front/js/lib/waypoints/waypoints.min.js',
    'resources/views/front/js/lib/counterup/counterup.min.js',
    'resources/views/front/js/lib/owlcarousel/owl.carousel.min.js',
    'resources/views/front/js/lib/isotope/isotope.pkgd.min.js',
    'resources/views/front/js/lib/lightbox/js/lightbox.min.js',

    'resources/views/front/js/contactform/contactform.js',
    'resources/views/front/js/js/main.js',

],'public/front/js/app.js')
