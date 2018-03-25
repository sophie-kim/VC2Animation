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


