function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function deviceInfo() {

	info =  'Hi, I am your smartphone :-)' + '\n' +
			'=====' + '\n' +
			'Device Name    : '     + device.name     + '\n' + 
			'Device Cordova : '  + device.cordova + '\n' + 
			'Device Platform: ' + device.platform + '\n' + 
			'Device UUID    : '     + device.uuid     + '\n' + 
			'Device Model   : '    + device.model     + '\n' + 
			'Device Version : '  + device.version  + '\n';

	navigator.notification.alert(info);
	
}

function personalInfo() {
	info = 'Basia Nogas'
	navigator.notification.alert(info);
}

function businessCard() {
	info =  'Business Card :' + '\n' +
			'********' + '\n' +
			'Imię i nazwisko  : Barbara  Nogaś' + '\n' + 
			'E-mail : barbara.nogas@gmail.com' + '\n' + 
			'Website : brak'+ '\n' + 
			'Grupa dziekańska : KrDUIs 1012' + '\n' + 
			'Kierunek : Informatyka stosowana' + '\n';

	navigator.notification.alert(info);
}