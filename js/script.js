$(document).ready(function () {
    $('#topRow, #mainRow, #bottomBar, #copyright, #info, .arrowDown').css('display', 'none').fadeIn(3000);
  });

  $(document).ready(function () {
    $('.description, .mainWork, .circle, .leftBar').css('display', 'none').fadeIn(1500);
  });

  $(document).ready(function () {
    $('#parallelogram').css('display', 'none').fadeIn(900);
  });

  $(document).ready(function () {
    $('#parallelogram').animate({width: '1210px', height: '130px', top: '410px'}, 2000);
  }); 

  $(document).ready(function () {
    $('.circle').animate({left: '10px'}, 1000);
  }); 

  var $container = $('.arrowDown'),
      $scrollTo = $('#info');

  $container.scrollTop(
      $scrollTo.offset(10).top - $container.offset(10).top + $container.scrollTop(10)
  );