$(document).ready(function() {


$('.burger').click(function(){
    $('.nav-menu').addClass('nav-menu-active');
    $('body').addClass('hidden');
});
$('.close').click(function(){
    $('.nav-menu').removeClass('nav-menu-active');
    $('body').removeClass('hidden');
});


$('.fanboxy').each(function() {
    $(this).attr('href', $(this).children('img').attr('src'));
});

let scrolling = function (ancker){
    $(ancker).click(function() {
        if($(window).width() < 992) {
            $('.nav-menu').removeClass('nav-menu-active');
            $('body').removeClass('hidden');
        }
		
        let elementClick = $(ancker).attr("href");
        let destination = $(elementClick).offset().top;
        
        jQuery("html:not(:animated), body:not(:animated)").animate({
            scrollTop: destination
        }, 800);
        return false;
    });
};


$('.nav-menu-link').each((i,item)=>{
    
    scrolling(item);
});

let myHeightStyle = $('.about-us-img').prop('naturalHeight');
let myWidthStyle = $('.about-us-img').prop('naturalWidth');

if(myHeightStyle == myWidthStyle){
    if(myWidthStyle > 600){
        $('.about-us-img').css({'width':'50%'});
    }
}
if(myHeightStyle > myWidthStyle){
    if(myHeightStyle < 2000 && myHeightStyle > 700){
        $('.about-us-img').css({'width':'25%'});
    }
    if(myHeightStyle < 700 && myHeightStyle > 500){
        $('.about-us-img"').css({'width':'50%'});
    }
}
if(myHeightStyle < myWidthStyle){
    if(myWidthStyle < 600){
        $('.about-us-img').css({'width':'500px'});
    }
}

});