var INITIAL_VOLUME = 0.5;
var audios = document.querySelectorAll("audio");
var videos = document.querySelectorAll("video");

audios.forEach(function(a) { a.volume = INITIAL_VOLUME; });
videos.forEach(function(a) { a.volume = INITIAL_VOLUME; });

function syncVolume(value) {
  audios.forEach(function(a) { a.volume = value; });
  videos.forEach(function(a) { a.volume = value; });
}

audios.forEach(function(audio) {
  audio.addEventListener("volumechange", function() {
    syncVolume(audio.volume);
  });
});
videos.forEach(function(video) {
  videos.addEventListener("volumechange", function() {
    syncVolume(video.volume);
  });
});
