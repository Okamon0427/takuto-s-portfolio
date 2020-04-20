$(function() {
  
  // 読み込み時のタイトルとサブタイトルの動き
  $('#top-title').css({opacity:'0'});
  setTimeout(function() {
    $('#top-title').animate({opacity:'1'},1500)
  },700);

  setTimeout(function () {
    $('#top-subtitle').addClass('scrollin');
  });

    // トグルを押した際のサイドバーの開閉とボタン画像変更
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

//   トグル内のメニューを押した際のサイドバーの開閉とボタン画像変更
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

    //   トグル内のメニュー、またはグローバルメニューを押した際のページ内リンク
  $('.menu-item').click(function() {
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate( {'scrollTop':position}, 700);
    return false;
  });

//   SUBMITボタンまたは一番下のボタンを押した際のトップへの移動
  $('.scrolltop a, .btn-contact').click(function() {
    $('html, body').animate( {'scrollTop':0}, 'slow');
    return false;
  });

});

