var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
var is_explorer = navigator.userAgent.indexOf('MSIE') > -1;
var is_firefox = navigator.userAgent.indexOf('Firefox') > -1;
var is_safari = navigator.userAgent.indexOf("Safari") > -1;
var is_Opera = navigator.userAgent.indexOf("Presto") > -1;
if ((is_chrome)&&(is_safari)) {is_safari=false;}


if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {

$(document).ready(function() {
 
 $("#dial1").css({ top: "-2909px" });
 $("#dialcan").css({ top: "-3092px" });
   
 });




//alert('Its Safari');

}

