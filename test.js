var gpio = require("gpio");

gpio2 = gpio.export(2, {
   direction: 'in',
   interval: 100,
   ready: function() {
      	console.log('export ready');
	}
   });


gpio2.on("change", function(val) {
	console.log('in change', val);
});

setInterval(() => {

}, 50000);
