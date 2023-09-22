//your JS code here. If required.
  const video = document.getElementsByTagName("video")[0];

        function playVideo() {
          // plays the video
          video.play();
        }

        function pauseVideo() {
          video.pause();
        }

        function backward() {
          video.currentTime -= 5;
        }

        function forward() {
          video.currentTime += 5;
        }