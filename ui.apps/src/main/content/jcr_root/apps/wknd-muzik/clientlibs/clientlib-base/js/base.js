
$(document).ready(function(){

    $("#back-to-top").click(function () {
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });


    $("#wkend-search-icon .cmp-button__icon.cmp-button__icon--fa-search").click(function () {
        $('#wkend-search').toggle('slow');
    });

    $("#wkend-language-icon .cmp-button__icon.cmp-button__icon--fa-globe").hover(function () {
        $('#wkend-language-nav').show('slow');
    });


    $(".languagenavigation").mouseleave(function () {
        $('#wkend-language-nav').hide('slow');
    });

    if(window.matchMedia("(max-width: 768px)").matches){
        $("#wkend-top-nav").click(function () {
            $('#wkend-top-nav').toggleClass('hamburger-nav');
        });
    }

    $("#wkend-social a").attr('target', 'blank')

	 $( ".wkend-teaser-music-list" ).each(function() {
      	imageUrl = $(this).find('.cmp-teaser .cmp-teaser__image div').attr('data-asset');
        $(this).find('.cmp-teaser').css("background-image", "url(" + imageUrl + ")");
	});
});
