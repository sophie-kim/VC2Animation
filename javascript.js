function showText(id,delay){
    var elem=document.getElementById(id);
    setTimeout(function(){elem.style.opacity=1;},delay*1000)
  }
window.onload = function () {
    showText('1', 1);
    showText('2', 2);
    showText('3', 3);
    showText('4', 4);
    showText('5', 5);
    showText('6', 6);
    showText('7', 7);
    showText('8', 8);
};
$("#btn2").click(function () {
    showText('9', 1);
    showText('10', 2);
    showText('11', 3);
    showText('12', 4);
    showText('13', 5);
    showText('14', 6);
});
$("#btn3").click(function () {
    showText('15', 1);
    showText('16', 2);
    showText('17', 3);
    showText('18', 4);
    showText('19', 5);
});
$("#btn4").click(function () {
    showText('20', 1);
    showText('21', 2);
    showText('22', 3);
    showText('23', 4);
    showText('24', 5);
});
$("#btn5").click(function () {
    showText('25', 1);
    showText('26', 2);
    showText('27', 3);
});
$("#btn6").click(function () {
    showText('28', 1);
    showText('29', 2);
    showText('30', 3);
    showText('31', 4);
    showText('32', 5);
});
$("#btn7").click(function () {
    showText('33', 1);
    showText('34', 2);
    showText('35', 3);
    showText('36', 4);
    showText('37', 5);
});