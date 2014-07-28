$(function () {
    $(".knob").knob();


    // infinite knob
    var slider = $('#inf-knob').val();

    var val,
    up = 1,
        down = 1,
        i = 0,
        $ival = $("div.ival"),

        incr = function () {
            i++;

            oscillator.frequency.value = ($("#freqmain2").val() * 1) + (i / 10);

            document.getElementById('freqmain').value = ($("#freqmain2").val() * 1) + (i / 10) + " Hz";
            

/*

            if (($("#freqmain2").val() * 1) + (i / 10) < 200) {


                $(".infinite").trigger(
                    'configure', {
                    "max": 240
                });
            }


            if (($("#freqmain2").val() * 1) + (i / 10) > 200) {


                $(".infinite").trigger(
                    'configure', {
                    "max": 500
                });
            }

            if (($("#freqmain2").val() * 1) + (i / 10) > 350) {


                $(".infinite").trigger(
                    'configure', {
                    "max": 1000
                });
            }

*/

        },
        decr = function () {
            i--;

            oscillator.frequency.value = ($("#freqmain2").val() * 1) + (i / 10);
            document.getElementById('freqmain').value = ($("#freqmain2").val() * 1) + (i / 10) + " Hz";

/*
            if (($("#freqmain2").val() * 1) + (i / 10) < 200) {


                $(".infinite").trigger(
                    'configure', {
                    "max": 240
                });
            }


            if (($("#freqmain2").val() * 1) + (i / 10) > 200) {


                $(".infinite").trigger(
                    'configure', {
                    "max": 500
                });
            }

            if (($("#freqmain2").val() * 1) + (i / 10) > 350) {


                $(".infinite").trigger(
                    'configure', {
                    "max": 1000
                });
            }
*/

        };

    func = function (v) {
        if (val > v) {
            if (up) {
                decr();
                up = 0;
            } else {
                up = 1;
                down = 0;
            }
        } else {
            if (down) {
                incr();
                down = 0;
            } else {
                down = 1;
                up = 0;
            }
        }
        val = v;
    }



    $(document).keypress(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '51', '49', '50') {
            //do nothing       
            i = 0;																	//CHANGED
        }

        //else {i = 0;}


    });

    var dialCenter = [260, 287];
    var needleCenter = [66, 195];
    var dial = new Image,
        needle = new Image;

    window.onload = function () {
        var c = document.getElementsByName('dialcan')[0];
        var ctx = c.getContext('2d');

        setInterval(function () {
            ctx.save();
            ctx.clearRect(0, 0, c.width, c.height);

            // Center the dial on the canvas.
            ctx.translate(c.width / 2, c.height / 1.8);
            ctx.drawImage(dial, -dialCenter[1], -dialCenter[0]);

            var delay2 = ($("#freqmain2").val() / 1000) + (i / 1000) - 1.53;
            //console.log(delay2);
            if (delay2 > 1.9) {
                ctx.rotate(1.9);
            }
            if (delay2 < -1.9) {
                ctx.rotate(-1.9);
            } else {
                ctx.rotate(delay2);
            }

            //if (delay2 < -1.9){console.log('ok');}

            //console.log(i)

            // assign slider here.
            ctx.drawImage(needle, -needleCenter[0], -needleCenter[1]);

            ctx.restore();
        }, 50);
    };
    //dial.src = 'img/dial2.png';
    needle.src = 'img/needle4.png';


    $("input.infinite").knob({


        'change': func
    });



    $(".infinite").knob().mouseenter(function () {
        $(".infinite").knob().children("canvas").trigger("mousedown");
    }).mouseleave(function () {
        $(".infinite").knob().children("canvas").trigger("mouseup");
    });


    //DATA CLICKED FREQ BOX
    $(document).ready(function () {
        var slider = $("#freqmain");
        var boxes = $("[data-clicked]");
        $(slider).eq(0).focus();


        $(boxes).on("click clicked.freqbox", function (e) {
            $(boxes).removeClass("clicked");
            $(e.target).addClass("clicked");
            $(boxes).css({
                backgroundImage: "url(img/lightoff-box.png)"
            });
            $(e.target).css({
                backgroundImage: "url(img/lighton-box.png)"
            });
            $(e.target).off("clicked.freqbox");
        }).eq(0).trigger("clicked.freqbox")



        $(".infinite").knob().click($(boxes), function (e) {
            //$(slider).click($(boxes), function (e) {

            $(".clicked")
                .val("       " + $(".clicked").data("clicked") + " = " + $(slider).val());


            $('.clicked').removeClass('clicked').css({
                backgroundImage: "url(img/lightoff-box.png)"
            }).next().next('.freqbox').addClass('clicked').css({
                backgroundImage: "url(img/lighton-box.png)"
            });

        });
    });


}); 


