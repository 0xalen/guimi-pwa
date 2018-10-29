(function() {
    'use strict';

    var app = {
        isLoading: true,
        spinner: document.querySelector('.loader'),
        container: document.querySelector('.main')
	};

     function includeJS(incFile)
	{
   		document.write('<script type="text/javascript" src="'+ incFile+ '"></script>');
	}
	// Incluir a-frame
    includeJS('vendor/aframe/build/aframe.min.js');
	// Incluir arjs para a-frame
	includeJS('build/aframe-ar.js');
	ARjs.Context.baseURL = 'three.js/'
//	includeJS('');

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
