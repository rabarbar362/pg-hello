function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function alertDismissed() {
    navigator.notification.beep(1);
}

function deviceInfo() {

	info = 	'Device Name    : '     + device.name     + '\n' + 
			'Device Cordova : '  + device.cordova	+ '\n' + 
			'Device Platform: ' + device.platform 	+ '\n' + 
			'Device UUID    : '     + device.uuid     + '\n' + 
			'Device Model   : '    + device.model     + '\n' + 
			'Device Version : '  + device.version  	+ '\n';

	navigator.notification.alert('\n' + info, alertDismissed, 'Hi, I am your smartphone :)', 'OK!');
	
}

function businessCard() {
	info = 	'Name  : Barbara  Nogaś' 					+ '\n' + 
			'E-mail : barbara.nogas@gmail.com' 			+ '\n' + 
			'Website : https://github.com/rabarbar362'	+ '\n' + 
			'Field of study : Applied Informatics' 		+ '\n' +
			'Deans group number : KrDUIs 1012' 			+ '\n'; 

	
	
			navigator.notification.alert('\n'+info, alertDismissed, 'About me', 'OK!');
}

function checkConnection() {
    var networkState = navigator.connection.type;
 
    var states = {};
    states[Connection.UNKNOWN]  = 'unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'cell 2G connection';
    states[Connection.CELL_3G]  = 'cell 3G connection';
    states[Connection.CELL_4G]  = 'cell 4G connection';
    states[Connection.CELL]     = 'cell generic connection';
    states[Connection.NONE]     = 'no network connection :(';
 
    navigator.notification.alert('Connection type: '+ '\n' + states[networkState], alertDismissed, 'Check connection', 'OK!');
}

function getAcceleration() {
	navigator.accelerometer.getCurrentAcceleration(
	   accelerometerSuccess, accelerometerError);
 
	function accelerometerSuccess(acceleration) {
	   navigator.notification.alert('Acceleration X: ' + acceleration.x + '\n' +
		  'Acceleration Y: ' + acceleration.y + '\n' +
		  'Acceleration Z: ' + acceleration.z + '\n' +
		  'Timestamp: '      + acceleration.timestamp + '\n');
	};
 
	function accelerometerError() {
	   navigator.notification.alert('onError!');
	};
 }
 
function watchAcceleration() {
	var accelerometerOptions = {
	   frequency: 3000
	}
	var watchID = navigator.accelerometer.watchAcceleration(
	   accelerometerSuccess, accelerometerError, accelerometerOptions);
 
	function accelerometerSuccess(acceleration) {
		navigator.notification.alert('Acceleration X: ' + acceleration.x + '\n' +
		  'Acceleration Y: ' + acceleration.y + '\n' +
		  'Acceleration Z: ' + acceleration.z + '\n' +
		  'Timestamp: '      + acceleration.timestamp + '\n');
 
	   setTimeout(function() {
		  navigator.accelerometer.clearWatch(watchID);
	   }, 10000);
	};
 
	function accelerometerError() {
		navigator.notification.alert('onError!');
	};
	 
 }

 var app = {
    sendSms: function() {
        var number = document.getElementById('numberTxt').value.toString(); /* iOS: ensure number is actually a string */
        var message = document.getElementById('messageTxt').value;
        console.log("number=" + number + ", message= " + message);

        //CONFIGURATION
        var options = {
            replaceLineBreaks: false, // true to replace \n by a new line, false by default
            android: {
                intent: ''  // send SMS with the native android SMS messaging
                //intent: '' // send SMS without open any other app
            }
        };

        var success = function () { alert('Message sent successfully'); };
        var error = function (e) { alert('Message Failed:' + e); };
        sms.send(number, message, options, success, error);
    }
};

/*var app = {
    checkSMSPermission: function() {
        var success = function (hasPermission) { 
            if (hasPermission) {
                sms.send(...);
            }
            else {
                // show a helpful message to explain why you need to require the permission to send a SMS
                // read http://developer.android.com/training/permissions/requesting.html#explain for more best practices
            }
        };
        var error = function (e) { alert('Something went wrong:' + e); };
        sms.hasPermission(success, error);
    },
    requestSMSPermission: function() {
        var success = function (hasPermission) { 
            if (!hasPermission) {
                sms.requestPermission(function() {
                    console.log('[OK] Permission accepted')
                }, function(error) {
                    console.info('[WARN] Permission not accepted')
                    // Handle permission not accepted
                })
            }
        };
        var error = function (e) { alert('Something went wrong:' + e); };
        sms.hasPermission(success, error);
    }
};*/