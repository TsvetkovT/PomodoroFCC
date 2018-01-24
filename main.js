/**
 * Created by TT on 24.01.18 г..
 */
var i = 0;
b = 10;

console.log(document.getElementById("pie-chart"));

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

a



function startClock() {

    var start = setInterval(function () {

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


    }, 1000);

    setTimeout(() => { clearInterval(start);}, 3*1000);


}



//startClock();

/* later */
