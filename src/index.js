var plc = require('./ruffplc.js');

var gpio = plc.gpio;
var gpioTable = plc.gpioTable;
var channelToPinName = plc.channelToPinName

function runBLinkGpio(id, interval) {
    gpio.write(id, 1);
    var isOn = false;
    return setInterval(function() {
        if (isOn) {
            gpio.write(id, 1);
        } else {
            gpio.write(id, 0);
        }
        isOn = !isOn;
    }, interval);
}

function readInput(id) {
    gpio.read(id, function(err, value) {
        console.log('The value is ' + value);
    });
}

function listenGPIO(){
    gpio.on('change', function(channel, value) {
        console.log(channelToPinName[channel] + ' value is now ' + value);
    });
}

var options = {
    version: '1.0'
};

plc.initBoard(options, function(err) {
    if (err) {
        console.log(err);
        throw(err);
    }
    gpio.write(gpioTable.led_io0, 0);
    runBLinkGpio(gpioTable.led_io1, 1000);
    listenGPIO();

});
