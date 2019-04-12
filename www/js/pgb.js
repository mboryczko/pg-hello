function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function youPersonalData() {
	info =  'My name is Michał';

	navigator.notification.alert(info);
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