/**
 * Created by TT on 24.01.18 г..
 */
var i = 0;
var sess = 60;
var bre = 10;
var start = true;
var pause;
var intID;

var button = $('#control');


/** logic functions **/
$(document).ready (function () {
    Reset();


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
        }, 100);
    }


    function  stopClock() {
        clearInterval(intID);
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

        i = 1;

        if (button.attr('class') == 'esri-icon-play') {
            button.toggleClass('esri-icon-play esri-icon-play');
        } else if (button.attr('class') == 'esri-icon-pause'){
            button.toggleClass('esri-icon-pause esri-icon-play');
        }
    }


    $("#control").click(function () {
        StartPause();
    });


    $("#refresh").click(function () {
        Reset();
    })

 /** End Control buttons **/
}); //end $(document).ready