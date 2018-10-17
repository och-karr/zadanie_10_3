$(function(){
    var carouselList = $('#carousel ul');
    setInterval(function changeSlide(){
        carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide); //ostatni parametr animacji - funkcja, która zadziała po zakończeniu animacji
    }, 4000);

    

    function moveFirstSlide(){
        var firstItem = carouselList.find('li:first');
        var lastItem = carouselList.find('li:last');
        $(lastItem).after(firstItem); //dodaje za ostatnim elementem pierwszy element (metoda after)
        $(carouselList).css({marginLeft:0}); //resetuje lewy margines z powrotem na wartość 0 (metoda css)
    };

    $(function nextPhoto(){
        var nextButton = $('#next');
        nextButton.click(function(){
            carouselList.animate({'marginLeft':0}, 0, moveFirstSlide);
        });
    });
});

