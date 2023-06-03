// ===== LightBox ===== \\
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
})


// ===== Music Track ===== \\

var track = document.getElementById('track');

var controlBtn = document.getElementById('play-pause');

function playPause() {
    if (track.paused) {
        track.play();
        //controlBtn.textContent = "Pause";
        controlBtn.className = "pause";
    } else {
        track.pause();
        //controlBtn.textContent = "Play";
        controlBtn.className = "play";
    }
}

controlBtn.addEventListener("click", playPause);
track.addEventListener("ended", function () {
    controlBtn.className = "play";
});

function changeImage() {
    var image = document.getElementById('music_img');
    if (image.src.match("music_off")) {
        image.src = "/images/music_on.png";
    } else {
        image.src = "/images/music_off.png";
    }
}