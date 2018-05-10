$(function(){
    var carouselList = $('#carousel ul');
    setInterval(changeSlide(){
        $(carouselList).animate({'marginLeft':-400}, 500, moveFirstSlide);
    }, 3000),
});

moveFirstSlide(){
    var firstItem = carouselList.find('li:first');
    var lastItem = carouselList.find('li:last');
    $(lastItem).after(firstItem);
    $(carouselList).css({marginLeft:0});
}