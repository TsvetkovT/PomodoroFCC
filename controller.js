/**
 * Created by TT on 2.2.2018 г..
 */




// create a wrapper around native canvas element (with id="c")
var canvas = new fabric.Canvas('controller');
var line;

// create a rectangle object
function drawLine() {


for (var i = 1; i<10; i++) {
        line = new fabric.Line([15*i, 20, 15*i, 0], {
            strokeWidth: 3,
            stroke: 'black',
            selectable: false,
            opacity: Number((0.1*i).toFixed(2))
        });
        canvas.add(line);
    }




    for (i = 1; i<10; i++) {
        line = new fabric.Line([150 + 15*i, 20, 150 + 15*i, 0], {
            strokeWidth: 3,
            stroke: 'black',
            selectable: false,
            opacity: Number((1 - 0.1*i).toFixed(2))
        });
        canvas.add(line);
    }


}


drawLine();
console.log(drawLine());

line = new fabric.Line([150, 40, 150, 0], {
    strokeWidth: 3,
    stroke: 'black',
    selectable: false,
    opacity: 1
});
canvas.add(line);


canvas.onclick = function () {
    line.animate('left', line.left === 100 ? 100 : 100, {
        duration: 1000,
        onChange: canvas.renderAll.bind("controller"),
        easing: fabric.util.ease["easyInOutQuad"]}


)}


// var line = new fabric.Line([100, 100, 0, 0], {
//             strokeWidth: 3,
//             stroke: 'black',
//             opacity: 1
//         });

// "add" line onto canvas
//canvas.add(line);