var gpio = require('rpi-gpio');
 
gpio.setup(3, gpio.DIR_OUT, function (err) {
	if (err) {
		console.log(err);
		return;
	} else {
		console.log('setup 3 OK');
	}

	value = true;

	var callback = function (err) {
		if (err) {
			console.log(err);
			return;
		}
		console.log('write ' + value);

		// reverse
		value = !value;
		gpio.write(3, value, callback);
	};

	gpio.write(3, value, callback); 

});


setInterval(() => {

}, 50000);
