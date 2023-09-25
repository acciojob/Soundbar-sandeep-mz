//your JS code here. If required.
const audio = document.querySelector("audio");

      function playAudio() {
        audio.play();
      }

      function pauseAudio() {
        audio.pause();
      }

      function backward() {
        audio.currentTime -= 10; // Go back 10 seconds (adjust as needed)
      }

      function forward() {
        audio.currentTime += 10; // Go forward 10 seconds (adjust as needed)
      }