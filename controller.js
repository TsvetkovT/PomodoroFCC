/**
 * Created by TT on 2.2.2018 г..
 */




// create a wrapper around native canvas element (with id="c")
var canvas = new fabric.StaticCanvas('controller');


// create a rectangle object
function drawLine() {


for (i = 1; i<=12; i++) {
        var line = new fabric.Line([15*i, 20, 15*i, 0], {
            strokeWidth: 3,
            stroke: 'black',
            opacity: Number((0.1*i).toFixed(1))
        });
        canvas.add(line);
    }

    for (i = 24; i>=12; i--) {
        var line = new fabric.Line([15*i, 20, 15*i, 0], {
            strokeWidth: 3,
            stroke: 'black',
            opacity: Number((0.017*i).toFixed(1))
        });
        canvas.add(line);
    }


}


drawLine();


// var line = new fabric.Line([100, 100, 0, 0], {
//             strokeWidth: 3,
//             stroke: 'black',
//             opacity: 1
//         });

// "add" line onto canvas
//canvas.add(line);