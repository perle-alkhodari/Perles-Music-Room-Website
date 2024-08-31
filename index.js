

// Drum buttons
var drumButtons = document.querySelectorAll(".drum");
for (var i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener("click", function() {
        playSound(this.innerHTML, 0.3, "./drum-sounds");
        visualFeedback(this.innerHTML);
    });
    document.addEventListener("keydown", function(event) {
        playSound(event.key, 0.3, "./drum-sounds")
        visualFeedback(event.key);
    })
    // Color feedback
}

// guitar buttons
var guitarButtons = document.querySelectorAll(".guitar");
for (var i = 0; i < guitarButtons.length; i++) {
    guitarButtons[i].addEventListener("click", function() {
        playSound(this.innerHTML, 0.25, "./guitar-sounds");
        visualFeedback(this.innerHTML);
    });
    document.addEventListener("keydown", function(event) {
        playSound(event.key, 0.25, "./guitar-sounds");
        visualFeedback(event.key);
    });
}

// lofi buttons
var lofiButtons = document.querySelectorAll(".lofi");
for (var i = 0; i < lofiButtons.length; i++) {
    lofiButtons[i].addEventListener("click", function() {
        playSound(this.innerHTML, 0.8, "./lofi-sounds");
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

function visualFeedback(key) {
    // Add class
    var btn = document.querySelector((`.${key}`).toLowerCase());
    btn.style.backgroundColor = "salmon";
    console.log(key);

    // Remove class
    setTimeout(function(){
        btn.style.backgroundColor = "#F05A7E";
    }, 100);
}


