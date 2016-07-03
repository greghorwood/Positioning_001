// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
    document.addEventListener('getPostition', getPosition.bind(this), false);

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);
        document.addEventListener('load', getPosition(this), false);

        $("#text").html("Getting Location");

    }

    function getPosition() {

        var options = {
            enableHighAccuracy: true,
            maximumAge: 10000,
            timeout: 5000
        };

        var watchID = navigator.geolocation.watchPosition(onSuccess, onError, options);

        function onSuccess(position) {
            $("#text").html('Latitude: ' + position.coords.latitude + '<br />' +
                                'Longitude: ' + position.coords.longitude + '<br />' +
                                'Altitude: ' + position.coords.altitude + '<br />' +
                                'Accuracy: ' + position.coords.accuracy + '<br />' +
                                'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '<br />' +
                                'Heading: ' + position.coords.heading + '<br />' +
                                'Speed: ' + position.coords.speed + '<br />' +
                                '<hr />');
        }

        //navigator.geolocation.clearWatch(watchID);
        function onError(error) {
            $("#text").html("Could not access location data");
            //navigator.geolocation.clearWatch(watchID);
            getPosition();
        }
    }

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
        getPosition();
    }

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
        getPosition();
    }
})();