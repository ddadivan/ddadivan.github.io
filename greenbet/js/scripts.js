new Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: {
    labels: ["15:23:22","15:23:23","15:23:24","15:23:25","15:23:26"],
    datasets: [{
        data: [1211.75,1211.85,1211.80,1211.85,1211.95],
        // label: "",
        borderColor: "#00B03E",
        fill:false
      }
    ]
  },
  options: {
    title: {
      display: false,
      text: 'World population per region (in millions)'
    }
  }
});
$(document).ready(function(){
  /*Scroll*/
  fleXenv.initByClass("scrollbar");
  fleXenv.updateScrollBars();
  $('.left-nav-wrap .nav').find('a').each(function(key, item) {
    $(this).on('click', function () {
      var tempElement = $(this).attr('data-link');
      var element = '#' + tempElement;
      $('.left-nav-wrap .nav a').removeClass('active');
      $(this).addClass('active');
      $('.left-popup').removeClass('show');
      $(element).addClass('show');
      $('.game-wrap').removeClass('left-sidebar');
      $('.game-wrap').addClass('left-sidebar');
      $('.footer').removeClass('left-sidebar');
      $('.footer').addClass('left-sidebar');
      fleXenv.updateScrollBars();
    });
  });
  $('.left-popup').find('.btn-close').on('click', function () {
    $('.left-popup').removeClass('show');
    $('.game-wrap').removeClass('left-sidebar');
    $('.footer').removeClass('left-sidebar');
  });
  $('#left-banner').find('.close').on('click', function () {
    $('#left-banner').addClass('hide');
  });
  $('.right-popup-btn').on('click', function () {
    $(this).removeClass('show');
    $('.right-popup').addClass('show');
    $('.game-wrap').addClass('right-sidebar');
    fleXenv.updateScrollBars()
  });
  $('.right-popup').find('.btn-close').on('click', function () {
    $('.right-popup').removeClass('show');
    $('.game-wrap').removeClass('right-sidebar');
    $('.right-popup-btn').addClass('show');
    // $('#bet-init').removeClass('active');
  });
  $('.game-table').find('.close').on('click', function () {
    $('.game-table').addClass('hide');
  });
  $('.game-table').find('.title').on('click', function () {
    $('.game-table').removeClass('hide');
  });
  /*Full Screen*/
  $(function() {
    // $('#support').text($.fullscreen.isNativelySupported() ? 'supports' : 'doesn\'t support');
    $('.full-screen a').click(function() {
      $('body').fullscreen();
      return false;
    });
    // exit fullscreen
    $('.exit-full-screen a').click(function() {
      $.fullscreen.exit();
      return false;
    });
    // document's event
    $(document).bind('fscreenchange', function(e, state, elem) {
      // if we currently in fullscreen mode
      if ($.fullscreen.isFullScreen()) {
        $('.full-screen').removeClass('active');
        $('.exit-full-screen').addClass('active');
      } else {
        $('.exit-full-screen').removeClass('active');
        $('.full-screen').addClass('active');
      }
    });
  });
});
fleXenv.updateScrollBars();