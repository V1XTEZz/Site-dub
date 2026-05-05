document.addEventListener("DOMContentLoaded", function () {
  var audios = document.querySelectorAll("audio");

  for (var i = 0; i < audios.length; i++) {
    (function (currentAudio) {
      currentAudio.addEventListener("play", function () {
        for (var j = 0; j < audios.length; j++) {
          if (audios[j] !== currentAudio) {
            audios[j].pause();
          }
        }
      });
    })(audios[i]);
  }
});