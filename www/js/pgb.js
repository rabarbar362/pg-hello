function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function deviceInfo() {

	info = 	'Device Name    : '     + device.name     + '\n' + 
			'Device Cordova : '  + device.cordova + '\n' + 
			'Device Platform: ' + device.platform + '\n' + 
			'Device UUID    : '     + device.uuid     + '\n' + 
			'Device Model   : '    + device.model     + '\n' + 
			'Device Version : '  + device.version  + '\n';

	navigator.notification.alert('Hi, I am your smartphone :)',info, 'Info:', 'OK!');
	
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
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';
 
    navigator.notification.alert('Connection type: ', states[networkState], 'Check connection', 'OK!');
}