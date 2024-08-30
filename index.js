
// Drum buttons
var drumButtons = document.querySelectorAll(".drum");
for (var i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener("click", function() {
        var audio = new Audio(`drum-sounds/${this.innerHTML}.mp3`);
        audio.volume = 0.5;
        audio.play();
    });
    document.addEventListener("keydown", function(event) {
        var audio = new Audio(`drum-sounds/${event.key}.mp3`);
        audio.volume = 0.5;
        audio.play();
    })
}

// guitar buttons
var guitarButtons = document.querySelectorAll(".guitar");
for (var i = 0; i < guitarButtons.length; i++) {
    guitarButtons[i].addEventListener("click", function() {
        var audio = new Audio(`guitar-sounds/${this.innerHTML}.mp3`);
        audio.volume = 0.25;
        audio.play();
    });
    document.addEventListener("keydown", function(event) {
        var audio = new Audio(`guitar-sounds/${event.key}.mp3`);
        audio.volume = 0.25;
        audio.play();
    })
}

// lofi buttons
var lofiButtons = document.querySelectorAll(".lofi");
for (var i = 0; i < lofiButtons.length; i++) {
    lofiButtons[i].addEventListener("click", function() {
        var audio = new Audio(`lofi-sounds/${this.innerHTML}.mp3`);
        audio.volume = 0.8;
        audio.play();
    });
    document.addEventListener("keydown", function(event) {
        var audio = new Audio(`lofi-sounds/${event.key}.mp3`);
        audio.volume = 0.8;
        audio.play();
    })
}

function changeColor(btn) {
    btn.style.backgroundColor = "white";
}
function resetColor(btn) {
    btn.style.backgroundColor = "#F05A7E"
}


