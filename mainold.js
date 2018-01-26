/**
 * Created by TT on 24.01.18 г..
 */
var i = 0;
b = 10;
var begin;
var start;
var pause = true;
var reset;
var currentSecond;



$(document).ready (function () {
    Reset();
});


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



function Clock() {



    var begin = setInterval(function () {

        i = i + 1;

        var chart = new Chart(document.getElementById("pie-chart"), {
            type: 'pie',
            data: {
                labels: [],
                datasets: [{

                    backgroundColor: ["#c82027", "#b3b3b3"],
                    data: [i, b - i]
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

        $('#pause').click(function () {

                setTimeout(function () {
                    clearInterval(begin);
                    i = i - 21;
                }, (i) * 1000);


        })


        $('#reset').click(function () {
            Reset();
            i = 0;
            setTimeout(function () {
                clearInterval(begin);
            }, 0);
        })


    }, 1000);


    setTimeout(function () {
        clearInterval(begin);
    }, b * 1000);



}


/** Control buttons **/
$('#start').click(function () {
    start = true;
    pause = true;
    reset = true;

    Clock();

})


