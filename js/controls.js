/*
<!--
Filename: control.js
Project: RADIONICS RADIO
Type: javascript
Author: SALVO NOSTRATO
Initial Version: April 2014

© Salvo Nostrato 2014 

Changelog:
-->
*/

$(document).ready(function () {
    $("#start").click(function () {

        $(".light").toggleClass("lighton");
        $(".can").toggleClass("canvas");

    });
});

$(document).ready(function () {
    $(".demo").click(function () {

        $(".demo").css({
            display: "none"
        });
        $("#circle").css({
            opacity: "0"
        });

        $(".inf-knob").css({
            opacity: "1"
        });
        $(".inf-knob1").css({
            opacity: "1"
        });
        $(".inf-knob2").css({
            opacity: "1"
        });
        $(".inf-knob3").css({
            opacity: "1"
        });
        $("#container").css({
            opacity: "1"
        });
        $("#start").css({
            opacity: "1"
        });
        $("#box-thought").css({
            opacity: "1",
            pointerEvents: "auto"
        });
        $("#box-thought").keypress(function () {
            return this
        });
        $("#freqmain").css({
            opacity: "1"
        });
        $(".rot-knob").css({
            opacity: "1"
        });
        $(".black").css({
            opacity: "1"
        });
        $("#frequency-chart").css({
            opacity: "1"
        });
        $("#container-dial").css({
            opacity: "1"
        });
        
    });
});

$(document).ready(function () {
    $("#start-button").click(function () {
        $("#container-start").fadeOut(1500, function () {
            $(this).remove()
        });
        $(".pace").remove();
        $("#start").css({
            pointerEvents: "auto"
        });
    });
});

$(document).ready(function () {

    $('#start').toggle(function () {

        $("#start").css({
            backgroundImage: "url(img/onoff.png)"
        });
        $(".inf-knob").css({
            opacity: "1",
            pointerEvents: "auto"
        });
        $("#freqmain").css({
            opacity: "1",
            pointerEvents: "auto"
        });
        $(".rot-knob").css({
            opacity: "1",
            pointerEvents: "auto"
        });
        $(".black").css({
            opacity: "1",
            pointerEvents: "auto"
        });
        $("#frequency-chart").css({
            opacity: "1",
            pointerEvents: "auto"
        });
        //oscillator.connect(gainNode);
        play(50);

        $("#box-thought").keypress(function (event) {
            var keycode = (event.keyCode ? event.keyCode : event.which);

            if (keycode == '13') {
                $("#box-thought").blur();
                return false;
            }

            //keypress "1"
            if (keycode == '49') {
                return false;
            } else if (keycode == '50') {
                return false;
            }

        });


        $(document).keypress(function (event) {
            var keycode = (event.keyCode ? event.keyCode : event.which);
            //keypress "1"

            if (keycode == '49') {

                $(".demo").css({
                    display: "block"
                });
                $("#circle").css({
                    opacity: "1"
                });

                $(".inf-knob").css({
                    opacity: "0"
                });
                $(".inf-knob1").css({
                    opacity: "0"
                });
                $(".inf-knob2").css({
                    opacity: "0"
                });
                $(".inf-knob3").css({
                    opacity: "0"
                });
                $("#start").css({
                    opacity: "0.6"
                });
                $("#box-thought").css({
                    opacity: "0.6"
                });
                $("#freqmain").css({
                    opacity: "0.6"
                });
                $(".rot-knob").css({
                    opacity: "0.6"
                });
                $(".black").css({
                    opacity: "0.6"
                });
                $("#frequency-chart").css({
                    opacity: "0.6"
                });
                $("#container-dial").css({
                    opacity: "0.6"
                });



            } else if (keycode == '50') {

                $(".demo").css({
                    display: "none"
                });
                $("#circle").css({
                    opacity: "0"
                });

                $(".inf-knob").css({
                    opacity: "1"
                });
                $(".inf-knob1").css({
                    opacity: "1"
                });
                $(".inf-knob2").css({
                    opacity: "1"
                });
                $(".inf-knob3").css({
                    opacity: "1"
                });
                $("#container").css({
                    opacity: "1"
                });
                $("#start").css({
                    opacity: "1"
                });
                $("#box-thought").css({
                    opacity: "1",
                    pointerEvents: "auto"
                });
                $("#box-thought").keypress(function () {
                    return this
                });
                $("#freqmain").css({
                    opacity: "1"
                });
                $(".rot-knob").css({
                    opacity: "1"
                });
                $(".black").css({
                    opacity: "1"
                });
                $("#frequency-chart").css({
                    opacity: "1"
                });
                $("#container-dial").css({
                    opacity: "1"
                });
            }

        });


    }, function () {

        $("#start").css({
            backgroundImage: "url(img/offon.png)"
        });
        $(".inf-knob").css({
            opacity: "0.7",
            pointerEvents: "none"
        });
        $("#freqmain").css({
            opacity: "0.7",
            pointerEvents: "none"
        });
        $(".rot-knob").css({
            opacity: "0.7",
            pointerEvents: "none"
        });
        $(".black").css({
            opacity: "0.7",
            pointerEvents: "none"
        });
        $("#frequency-chart").css({
            opacity: "0.7",
            pointerEvents: "none"
        });
        stop();

    });
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



    //$(".infinite").knob().click($(boxes), function (e) {
    $(slider).click($(boxes), function (e) {

        $(".clicked")
            .val("       " + $(".clicked").data("clicked") + " = " + $(slider).val())

        $('.clicked').removeClass('clicked').css({
            backgroundImage: "url(img/lightoff-box.png)"
        }).next().next('.freqbox').addClass('clicked').css({
            backgroundImage: "url(img/lighton-box.png)"
        });

    });
});

//DATA CLICKED SEND

$(document).ready(function () {
    $("#close").click(function () {
        $("#container-send").fadeOut(1500, function () {
            $(this).css({
                display: "none"
            });
        });
    });
});


$(document).ready(function () {
    $("#send").click(function () {
        $("#container-send").fadeIn(1500, function () {
            $(this).css({
                display: "block"
            });
        });
        document.getElementById("tought").value = $("#box-thought").val();
        document.getElementById("frequencies").value = $("#freqbox").val() + $("#freqbox1").val() + $("#freqbox2").val() + $("#freqbox3").val() + $("#freqbox4").val() + $("#freqbox5").val();

    });
});

$(document).ready(function () {
    $("#help").click(function () {
        $("#container-thankyou").fadeOut(0, function () {
            $(this).css({
                display: "none"
            });
        });
        $("#container-help").fadeIn(1500, function () {
            $(this).css({
                display: "block"
            });
        });
    });
});

$(document).ready(function () {
    $("#help2").click(function () {
        $("#container-send").fadeOut(1000, function () {
            $(this).css({
                display: "none"
            });
            $("#container-help").fadeIn(1500, function () {
                $(this).css({
                    display: "block"
                });
            });
        });
    });
});

$(document).ready(function () {
    $("#sendall").click(function () {

        $("#container-send").fadeOut(0, function () {
            $(this).css({
                display: "none"
            });
        });
        $("#container-thankyou").fadeIn(1500, function () {
            $(this).css({
                display: "block"
            });

        });
    });
});


$(document).ready(function () {
    $("#help3").click(function () {
        $("#container-thankyou").fadeOut(0, function () {
            $(this).css({
                display: "none"
            });
        });
        $("#container-send").fadeOut(0, function () {
            $(this).css({
                display: "none"
            });
        });
        $("#container-help").fadeIn(1500, function () {
            $(this).css({
                display: "block"
            });
        });
    });
});


$(document).ready(function () {
    $("#exit").click(function () {

        $("#container-help").fadeOut(1500, function () {
            $(this).css({
                display: "none"
            });
        });
    });
});

$(document).ready(function () {
    $("#info").click(function () {
        
                $("#container-help").fadeIn(1500, function () {
            $(this).css({
                display: "block"
            });
        });
    });
});
