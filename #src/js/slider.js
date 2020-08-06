$(document).ready(function(){

let $sliderProduct = $('.product-slider');

if ($sliderProduct.length) {
  let currentSlide;
  let slidesCount;
  let sliderCounter = document.createElement('span');
  sliderCounter.classList.add('current_slider');
  
  let updateSliderCounter = function(slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1;
    slidesCount = slick.slideCount;
    if(currentIndex>9){
      $(sliderCounter).text(currentSlide + '/' +slidesCount)
    }
    else{
      $(sliderCounter).text('0'+currentSlide + ' / ' + '0' + slidesCount)
    }
    
  };

  $sliderProduct.on('init', function(event, slick) {
    $sliderProduct.append(sliderCounter);
    updateSliderCounter(slick);
  });

  $sliderProduct.on('afterChange', function(event, slick, currentSlide) {
    updateSliderCounter(slick, currentSlide);
  });

  $sliderProduct.slick({
    arrows: true,
    dots: true,  
});
}
    $(".product-sale__wrap").slick({
        arrows: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,           
                
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }           
          ]

    })  
    
})  
  $(window).on("load resize", function(){
    var width = $(document).width();
     
    if (width > 992 || width < 430) {        
        $('.product-baner').filter('.slick-initialized').slick('unslick');
    } else { 
        $('.product-baner').not('.slick-initialized').slick({
            
        })
    }
    if(width < 576){       
        $(".product-slider").filter('.slick-initialized').slick('unslick');                
    } else {
        $(".product-slider").not('.slick-initialized').slick();
    }    
  });
    
    
 

    
  
   

