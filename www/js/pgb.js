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
			'Device Cordova : '  + device.cordova + '\n' + 
			'Device Platform: ' + device.platform + '\n' + 
			'Device UUID    : '     + device.uuid     + '\n' + 
			'Device Model   : '    + device.model     + '\n' + 
			'Device Version : '  + device.version  + '\n';

	navigator.notification.alert('Hi, I am your smartphone :)'+ '\n' + info, alertDismissed, 'Info:', 'OK!');
	
}

function businessCard() {
	info =  'Business Card :' 						+ '\n' +
			'********' 								+ '\n' +
			'Imię i nazwisko  : Barbara  Nogaś' 	+ '\n' + 
			'E-mail : barbara.nogas@gmail.com' 		+ '\n' + 
			'Website : brak'						+ '\n' + 
			'Grupa dziekańska : KrDUIs 1012' 		+ '\n' + 
			'Kierunek : Informatyka stosowana' 		+ '\n';

	navigator.notification.alert(info);
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
 
    navigator.notification.alert('Connection type: ' + states[networkState], alertDismissed, 'Check connection', 'OK!');
}