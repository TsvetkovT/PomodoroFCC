/**
 * Created by TT on 24.01.18 г..
 */
var i = 1;
var sess = 25*60;
var bre = 5*60;
var start = true;
var pause;
var intID;

var button = $('#control');

// /** Drawing of buttons **/
// function Button() {
//     var canvas = new fabric.Canvas('control');
//     var circle = new fabric.Circle({
//         radius: 20, fill: 'green', left: 100, top: 100
//     });
//     var triangle = new fabric.Triangle({
//         width: 20, height: 30, fill: 'blue', left: 50, top: 50
//     });
//
//     canvas.add(circle, triangle);
//
//
// }
//
// Button();
//
//
// /** End Drawing of buttons **/


/** logic functions **/
$(document).ready (function () {
    Reset();


    //   $("#timer").hide();



    // function Reset() {
    //
    //
    //     var chart = new Chart(document.getElementById("pie-chart"), {
    //         type: 'pie',
    //         data: {
    //             labels: [],
    //             datasets: [{
    //
    //                 backgroundColor: ["#c82027", "#b3b3b3"],
    //                 data: [0, 100]
    //             }]
    //         },
    //         options: {
    //             events: [],
    //             title: {
    //                 display: true,
    //                 text: ''
    //             },
    //             animation: false,
    //             tooltips: {
    //                 enabled: false
    //             }
    //         }
    //     });
    //
    // }

    /** drawing function **/

    function draw(i, minutes, color) {

        $("#timer").text(i);


        var chart = new Chart(document.getElementById("pie-chart"), {
            type: 'pie',
            data: {
                labels: [],
                datasets: [{

                    backgroundColor: [color, "#b3b3b3"], //red "#c82027" grey "#b3b3b3"
                    data: [i, minutes - i]
                }]
            },
            options: {
                events: [],
                title: {
                    display: true,
                    text: ''
                },
                animation: false,
                tooltips: {
                    enabled: false
                }
            }
        });

    }

    function Clock() {
        intID = setInterval(function () {
            if (i <= sess) {
                draw(i++, sess, "#c82027");
            } else if (i > sess && i <= (sess + bre)) {
                draw(i++ - sess, bre, "#008000");
            } else {
                i = 1;
            }
        }, 10);



    }


    // function Clock(x) {
    //
    //     for (var i = x; i <= sess + bre; i++) {
    //
    //         (function (i) {
    //
    //             intID = setTimeout(function () {
    //                 if (i <= sess) {
    //                     if (start == true) {
    //
    //                         draw(i, sess, "#c82027");
    //                         console.log("i START = " + i);
    //                     } else {
    //                         clearTimeout(intID);
    //                         x = i;
    //                         i = 0;
    //                     }
    //                 } else if (i > sess) {
    //                     if (start == true) {
    //
    //                         draw(i - sess, bre, "#008000");
    //                         console.log("i STOP = " + i);
    //                     } else {
    //                         clearTimeout(intID);
    //                         x = i;
    //                         i = 0;
    //                     }
    //                 }
    //
    //             }, 1000 * i);
    //         })(i);
    //     }
    // };


    function  stopClock() {
        start = false;
        pause = true;
        clearInterval(intID);

        console.log("start is: " + start + " pause is: " + pause);
        console.log("i = " + i);

    };


/** end logic functions **/

    /** Control buttons **/

    function StartPause() {

        if(button.attr('class') == 'esri-icon-play') {
            button.toggleClass('esri-icon-play esri-icon-pause')
            Clock();
        } else {
            button.toggleClass('esri-icon-pause esri-icon-play')
            stopClock();
        }
    }

    function Reset() {
        draw(0,100,"#c82027");
        $("#timer").html(1);
        clearInterval(intID);

        if (button.attr('class') == 'esri-icon-play') {
            button.toggleClass('esri-icon-play esri-icon-play');
        } else if (button.attr('class') == 'esri-icon-pause'){
            button.toggleClass('esri-icon-pause esri-icon-play');
        }
    //

    }


    $('#control').click(function () {
        StartPause();
    });




    // $('#pause').click(function () {
    //     stopClock();
    // })



    $('#refresh').click(function () {
        Reset();
    })

 /** End Control buttons **/
}); //end $(document).ready