/**
 * Created by TT on 24.01.18 г..
 */
var i;
var sess = 10;
var bre = 5;
var currentSec = $("#timer").html();
var start = true;
var pause;
var reset;
var intID;



$(document).ready (function () {
    Reset();

    $("#timer").hide();



    function Reset() {

        var a = new Chart(document.getElementById("pie-chart"), {
            type: 'pie',
            data: {
                labels: [],
                datasets: [{

                    backgroundColor: ["#c82027", "#b3b3b3"],
                    data: [0, 100]
                }]
            },
            options: {
                events: [],
                title: {
                    display: true,
                    text: 'Pomodoro tricky clock in minutes'
                },
                animation: false,
                tooltips: {
                    enabled: false
                }
            }
        });

    }



    function Clock(i, minutes, color) {

        intID = setInterval(function () {

            i = i + 1;

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
                        text: 'Pomodoro tricky clock in minutes'
                    },
                    animation: false,
                    tooltips: {
                        enabled: false
                    }
                }
            });



        }, 1000);





    }



    function  stopClock() {
        pause = true;
        start = false;
        clearInterval(intID);

        console.log("start is: " + start + " pause is: " + pause);

    }




    /** Control buttons **/
    $('#start').click(function () {


        if (start == true) {
            Clock(0, sess, "#c82027");
            console.log("before pause");
            pause = true;

        } else if (start == false){
            Clock(Number($("#timer").html()), sess, "#c82027");
            console.log("after pause");
            pause = true;
        }

    })


    $('#pause').click(function () {

        stopClock();

    })

    $('#reset').click(function () {
        start = true;
        $("#timer").html(0);
        stopClock();
        Reset();

    })


}); //end $(document).ready