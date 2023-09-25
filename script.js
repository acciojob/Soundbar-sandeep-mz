//your JS code here. If required.
  const audio = document.getElementsByTagName("audio")[0];

        function playVideo() {
          // plays the audio
          audio.play();
        }

        function pauseVideo() {
          audio.pause();
			audio.currentTime = 0;
        }

        function backward() {
          audio.currentTime -= 5;
        }

        function forward() {
          audio.currentTime += 5;
        }