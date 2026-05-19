var INITIAL_VOLUME = 0.5;
var audios = document.querySelectorAll("audio");

audios.forEach(function(a) { a.volume = INITIAL_VOLUME; });

function syncVolume(value) {
  audios.forEach(function(a) { a.volume = value; });
}

audios.forEach(function(audio) {
  audio.addEventListener("volumechange", function() {
    syncVolume(audio.volume);
  });
});
