$(".header .header-menu li a").hover(
    function() {
      $('.drop-down').addClass('drop_active');
    }, function() {
      $('.drop-down').hover(function() {}, function() {
        $('.drop-down').removeClass('drop_active')
      });
    }
  );