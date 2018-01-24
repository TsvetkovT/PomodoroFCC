/**
 * Created by TT on 24.01.18 г..
 */


function myfun(b) { setInterval(function() {
    var a = 0;
//a = a + 1;
    while (a < b) {

        var chart = new Chart(document.getElementById("pie-chart"), {
            type: 'pie',
            data: {
                labels: [],
                datasets: [{

                    backgroundColor: ["#c82027", "#b3b3b3"],
                    data: [a, b - a]
                }]
            },
            options: {
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
        if (a = b) {
            break;
        }
        a = a + 1;

    }


}, 1000);
};

myfun(100);
