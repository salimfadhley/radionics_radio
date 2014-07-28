/*
   if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) {
	 if (document.cookie.indexOf("iphone_redirect=false") == -1) window.location = "indexChrome.html";}

*/

    if (navigator.userAgent.indexOf('MSIE') !=-1)
    {
        // Using IE
window.location = "browserError.html"
    }


    if (navigator.userAgent.indexOf('Firefox') !=-1)
    {
        // Using Firefox
window.location = "browserError.html"
 
    }
