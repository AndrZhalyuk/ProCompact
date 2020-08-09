$('.accordeon').on('click', '.accordeon__item-link', f_acc);

function f_acc(e){  
    e.preventDefault();      
    let $this = $(this);
    
    $('.accordeon .accordeon__submenu').not($this.toggleClass('accordeon__active').next()).slideUp(500).prev().removeClass('accordeon__active'); 
   
    $this.next().slideToggle(1000);

    }
