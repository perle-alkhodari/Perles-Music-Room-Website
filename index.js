
// Drum buttons
var drumButtons = document.querySelectorAll(".drum");
for (var i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener("click", function() {
        playSound(this.innerHTML, 0.5, "./drum-sounds")
    });
    document.addEventListener("keydown", function(event) {
        playSound(event.key, 0.5, "./drum-sounds")
    })
}

// guitar buttons
var guitarButtons = document.querySelectorAll(".guitar");
for (var i = 0; i < guitarButtons.length; i++) {
    guitarButtons[i].addEventListener("click", function() {
        playSound(this.innerHTML, 0.25, "./guitar-sounds");
    });
    document.addEventListener("keydown", function(event) {
        playSound(event.key, 0.25, "./guitar-sounds");
    });
}

// lofi buttons
var lofiButtons = document.querySelectorAll(".lofi");
for (var i = 0; i < lofiButtons.length; i++) {
    lofiButtons[i].addEventListener("click", function() {
        playSound(this.innerHTML, 0.8, "./lofi-sounds")
    });
    document.addEventListener("keydown", function(event) {
        playSound(event.key, 0.8, "./lofi-sounds")
    })
}

function playSound(key, volume, dir) {
    var audio = new Audio(`${dir}/${key}.mp3`);
    audio.volume = volume;
    audio.play();
}


