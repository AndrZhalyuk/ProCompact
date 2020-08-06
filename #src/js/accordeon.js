$('.accordeon').on('click', '.accordeon__item-link', function(){
    $('.accordeon__item-link').removeClass('accordeon__active');
    $(this).addClass('accordeon__active');
});