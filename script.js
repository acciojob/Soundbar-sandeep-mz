//your JS code here. If required.
  const video = document.getElementsByTagName("video")[0];

        function playVideo() {
          // plays the video
          video.play();
        }

        function pauseVideo() {
          video.pause();
			video.currentTime = 0;
        }

        function backward() {
          video.currentTime -= 5;
        }

        function forward() {
          video.currentTime += 5;
        }