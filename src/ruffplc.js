var gpio =  require('rpi-gpio');
var async = require('async');

//pinName:pin
var gpioTable = {
    led_io0:    92, //gpio2_28
    led_io1:    91, //gpio2_27
    input0:     22, //gpio0_22
    input1:     23, //gpio0_23;
    input2:     26, //gpio0_26;
    input3:     27, //gpio0_27;
    input4:     46, //gpio1_14;
    input5:     44, //gpio1_12;
    input6:     47, //gpio1_15;
    input7:     45, //gpio1_13;
    input8:     48, //gpio1_16;
    input9:     52, //gpio1_20;
    input10:    53, //gpio1_21;
    input11:    57, //gpio1_25;
    output0:    65, //gpio2_01;
    output1:    64, //gpio2_00;
    output2:    50, //gpio1_18;
    output3:    60, //gpio1_28;
};

//pin:pinName
var gpioTableReverse = new Object();
for(var pinName in gpioTable){
   gpioTableReverse[gpioTable[pinName]]=pinName
}
/*
    Config Table
    params channel:    gpioTable
            direction:  DIR_OUT    DIR_IN 
            edge:       EDGE_BOTH  EDGE_RISING  EDGE_FALLING EDGE_NONE
*/
var boardConfig = [
    {"channel" : gpioTable["input0"], "direction" : gpio.DIR_IN ,"edge":gpio.EDGE_BOTH},
    {"channel" : gpioTable["input1"], "direction" : gpio.DIR_IN ,"edge":gpio.EDGE_BOTH},
    {"channel" : gpioTable["input2"], "direction" : gpio.DIR_IN ,"edge":gpio.EDGE_BOTH},
    {"channel" : gpioTable["input3"], "direction" : gpio.DIR_IN ,"edge":gpio.EDGE_BOTH},
    {"channel" : gpioTable["input4"], "direction" : gpio.DIR_IN ,"edge":gpio.EDGE_BOTH},
    {"channel" : gpioTable["input5"], "direction" : gpio.DIR_IN ,"edge":gpio.EDGE_BOTH},
    {"channel" : gpioTable["input6"], "direction" : gpio.DIR_IN ,"edge":gpio.EDGE_BOTH},
    {"channel" : gpioTable["input7"], "direction" : gpio.DIR_IN ,"edge":gpio.EDGE_BOTH},
    {"channel" : gpioTable["input8"], "direction" : gpio.DIR_IN ,"edge":gpio.EDGE_BOTH},
    {"channel" : gpioTable["input9"], "direction" : gpio.DIR_IN ,"edge":gpio.EDGE_BOTH},
    {"channel" : gpioTable["input10"], "direction" : gpio.DIR_IN ,"edge":gpio.EDGE_BOTH},
    {"channel" : gpioTable["input11"], "direction" : gpio.DIR_IN ,"edge":gpio.EDGE_BOTH},
    {"channel" : gpioTable["output0"], "direction" : gpio.DIR_OUT ,"edge":gpio.EDGE_NONE},
    {"channel" : gpioTable["output1"], "direction" : gpio.DIR_OUT ,"edge":gpio.EDGE_NONE},
    {"channel" : gpioTable["output2"], "direction" : gpio.DIR_OUT ,"edge":gpio.EDGE_NONE},
    {"channel" : gpioTable["output3"], "direction" : gpio.DIR_OUT ,"edge":gpio.EDGE_NONE},
    {"channel" : gpioTable["led_io0"], "direction" : gpio.DIR_OUT ,"edge":gpio.EDGE_NONE},
    {"channel" : gpioTable["led_io1"], "direction" : gpio.DIR_OUT ,"edge":gpio.EDGE_NONE},    
 ]

//  SETUP

function initBoard(options, cb) {
    async.map(boardConfig,function(each,cb) {
            gpio.setup(each.channel, each.direction,each.edge,cb);
        },function(err, result) {
        if (err) {
            console.log('fail to init hw resource', err);
            return cb(err);
        }
        cb(null);
    });
}


module.exports = {
    gpio: gpio,
    gpioTable: gpioTable,
    channelToPinName:gpioTableReverse,
    initBoard: initBoard,
};
