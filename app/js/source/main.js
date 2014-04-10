(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#btn').click(doStuff);
    $('#btn2').click(doStuffAgain);
    $('#btn3').click(doStuff3);
    $('#btn4').click(doStuff4);
    $('#btn5').click(doStuff5);
    $('#btn6').click(doStuff6);
    $('#btn7').click(doStuff7);
  }

  function doStuff(){
    $('h2').css('color', 'green');
    $('h3').text('Jason');
  }

  function doStuffAgain(){
    $('#btn').text('Ahh');
    $('#btn').css('border-radius', '50%');
  }

  function doStuff3(){
    $('body').addClass('alert');
  }

  function doStuff4(){
    $('body').removeClass('alert');
  }

  function doStuff5(){
    $('body').toggleClass('alert');
  }

  function doStuff6(){
    var x = $('#tb1').val();
    $('h1').text(x.toUpperCase());
  }

  function doStuff7(){
    var x = $('#tb1').val();
    $('h3').css('background-color', x);
  }

})();
