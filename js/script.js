$(function() {
  
  // Title fade-in when reloading
  $('#top-title').css({opacity:'0'});
  setTimeout(function() {
    $('#top-title').animate({opacity:'1'},1500)
  },700);

  setTimeout(function () {
    $('#top-subtitle').addClass('scrollin');
  });

  // nav open and close by toggle (in Smartphone)
  $('#menu-toggle').click(function() {
      $(this).toggleClass('active');
      if ($(this).hasClass('active')) {
          $('#sidebar-wrapper').addClass('active');
          $('#menu-toggle i').removeClass('fa-bars').addClass('fa-times');
      } else {
          $('#sidebar-wrapper').removeClass('active');
          $('#menu-toggle i').removeClass('fa-times').addClass('fa-bars');
      }
  });

  // nav open and close when nav menu is selected
  $('#sidebar-nav a').click(function() {
      $('#menu-toggle').toggleClass('active');
      if ($('#menu-toggle').hasClass('active')) {
        $('#sidebar-wrapper').addClass('active');
        $('#menu-toggle i').removeClass('fa-bars').addClass('fa-times');
    } else {
        $('#sidebar-wrapper').removeClass('active');
        $('#menu-toggle i').removeClass('fa-times').addClass('fa-bars');
      }
  });

  // pagenation
  $('.menu-item').click(function() {
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate( {'scrollTop':position}, 700);
    return false;
  });

  // scroll back top button by SUBMIT button and top scroll button bottommost
  $('.scrolltop a, .btn-contact').click(function() {
    $('html, body').animate( {'scrollTop':0}, 'slow');
    return false;
  });
});

