$(document).ready(() => {
    $('header-logo_link, .header-menu_link').click(function(){
        const ID = $(this).attr('href');
        const OFFSET = $(ID).offset().top;
        $('html').animate({
             scrollTop: OFFSET }, 
             1000);
    })
})