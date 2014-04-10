(function(){
  'use strict';

  $(document).ready(initialize);
  function initialize(){
    $('#add').click(add);
    $('#sub').click(sub);
    $('#mult').click(mult);
    $('#div').click(quot);
    $('#expo').click(expo);
    $('#sqr').click(sqr);
    $('#fac').click(fac);
  }

  function add(){
    var dat = getInput();

    var sum = dat.num1 + dat.num2;
    printR(sum);
  }

  function sub(){
    var dat = getInput();

    var dif = dat.num1 - dat.num2;
    printR(dif);
  }

  function mult(){
    var dat = getInput();

    var prod = dat.num1 * dat.num2;
    printR(prod);
  }

  function quot(){
    var dat = getInput();

    var q = dat.num1 / dat.num2;
    printR(q);
  }

  function expo(){
    var dat = getInput();

    var e = Math.pow(dat.num1, dat.num2);
    printR(e);
  }

  function sqr(){
    var dat = getInput();

    var s = Math.sqrt(dat.num1);
    printR(s);
  }

  function fac(){
    var dat = getInput();

    var i = 1;
    var max = dat.num1;
    dat.num1 = 1;
    while(i <= max){
      dat.num1 *= i;
      i++;
      printR(dat.num1);
    }
    printR(dat.num1);
  }

  function printR(x){
      $('#result').text(x);
  }

  function getInput(){
    var x = $('#num1').val()*1;
    var y = $('#num2').val()*1;
    return { 'num1':x, 'num2':y };
  }
})();
