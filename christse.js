/**
 * Created by TT on 26.1.2018 г..
 */
// Declare variables and flags

let sessionLength = 25
let breakLength = 5

let currMin = sessionLength
let currSec = 0

let running = false
let intID // save for later
let session = true

let alarm = new Audio(["http://onlineclock.net/audio/options/cuckoo-clock.mp3"]);

$(document).ready(function() {
	let curr
	$("#bdown").click(function(e) {
		e.preventDefault()
		if (!running) {
			curr = parseInt($('#b').text())
			if (curr > 0) {
				curr--
			}
			breakLength = curr
			$('#b').text(curr)
		}
	})

	$("#bup").click(function(e) {
		e.preventDefault()
		if (!running) {
			curr = parseInt($('#b').text())
			if (curr <= 60) {
				curr--
			}
			breakLength = curr
			element.text(curr)
		}
	})

	$("#sdown").click(function(e) {
		e.preventDefault()
		if (!running) {
			let curr = parseInt($("#s").text())
			if (curr > 0) {
				curr--
			}
			$("#s").text(curr)
			$("#min").text(curr)
			sessionLength = curr
			reset()
		}
	})

	$("#sup").click(function(e) {
		e.preventDefault()
		if (!running) {
			let curr = parseInt($("#s").text())
			curr++
			$("#s").text(curr)
			$("#min").text(curr)
			sessionLength = curr
			reset()
		}

	})

	$("#start").click(function(e) {
		e.preventDefault()
		timerControl()
		console.log(running)
	})

	$("#reset").click(e => {
		e.preventDefault()
		if (!running) {
			reset()
		}
	})

})

function startTimer() {
	setText()
	$(".disablable").addClass("disabled")
	let min = currMin
	let sec = currSec
	intID = setInterval(function() {
		setText()
		if (sec > 0) {
			sec--
			if (sec < 10) {
				$("#sec").text("0"+sec)
			} else {
				$("#sec").text(sec)
			}
		} else {
			min--
			sec = 59
			$("#sec").text(sec)
			$("#min").text(min)
		}

		if (min === 0 && sec === 0) {
			if (session) {
				console.log("Set session false")
				session = false
				min = breakLength
				sec = 0
			} else {
				console.log("Set session true")
				session = true
				min = sessionLength
				sec = 0
			}
			alarm.play()
		}

	}, 10)
}

$('#start').click(function () {

    startTimer();
    console.log("intID is: " + intID);
})

function stopTimer() {
	clearInterval(intID)
	currMin = parseInt($("#min").text())
	currSec = parseInt($("#sec").text())
	$("#state").text("　")
	$(".disablable").removeClass("disabled")
}

function reset() {
	currSec = 0
	currMin = sessionLength
	session = true
	$("#sec").text("00")
	$("#min").text(currMin)
}

function timerControl() {
	if (running){
		$("#start .fa").removeClass("fa-pause")
		$("#start .fa").addClass("fa-play")
		running = false
		stopTimer()
	}
	else {
		$("#start .fa").removeClass("fa-play")
		$("#start .fa").addClass("fa-pause")
		running = true
		startTimer()
	}
}

function setText() {
	if (session) {
		$("#state").text("Get Working!")
	} else {
		$("#state").text("Break Time")
	}
}

function decrement(element) {

}
