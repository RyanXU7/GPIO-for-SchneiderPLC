var gpio = require('rpi-gpio');
 
gpio.on('change', function(channel, value) {
    console.log('Channel ' + channel + ' value is now ' + value);
	if (value === false) {
		gpio.write(3, true, function (err) {
			if (err) {
				console.log(err);
				return;
			} else {
				console.log('write 3 true OK');
			}
		});
	} else {
		gpio.write(3, false, function (err) {
			if (err) {
				console.log(err);
				return;
			} else {
				console.log('write 3 false OK');
			}
		});
	}
});
gpio.setup(2, gpio.DIR_IN, gpio.EDGE_BOTH);

gpio.setup(3, gpio.DIR_OUT, function (err) {
	if (err) {
		console.log(err);
		return;
	} else {
		console.log('setup 3 OK');
	}
});

setInterval(() => {
}, 50000);
