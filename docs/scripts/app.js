(function() {
    'use strict';

      var app = {                                                                                                     
        isLoading: true,
        spinner: document.querySelector('.loader'),
        container: document.querySelector('.main')
      };

    document.getElementById('butRefresh').addEventListener('click', function() {
        app.hasGetUserMedia();
    });

    function hasGetUserMedia() {
      return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia());
    }

    if (!hasGetUserMedia()) {
      alert('getUserMedia() is not supported by your browser');
    } else {
        const constraints = {
          video: true
        };
        const video = document.querySelector('video');

        navigator.mediaDevices.getUserMedia(constraints).
        then((stream) => {video.srcObject = stream});
    }

    if (app.isLoading) {
        app.spinner.setAttribute('hidden', true);
        app.container.removeAttribute('hidden');
        app.isLoading = false;
    }
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
                .register('./service-worker.js')
                .then(function() {console.log('Service Worker Registered'); });
    }
})();
