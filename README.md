## GPIO TEST for Schneider PLC 

a GPIO test code for Schneider PLC

## Run

进入项目目录的src目录下, 使用node运行index.js。

```shell
cd src
/node/bin/node index.js
```

## Usage

#### GPIOTable

**{** PinName:channel **}**

#### Config Table

##### params 

​        **channel**:    GPIOTable

​        **direction**: The pin direction, pass either **DIR_IN** for read mode or **DIR_OUT** for write mode. You can also pass **DIR_LOW** or **DIR_HIGH** to use the write mode and specify an initial state of 'off' or 'on' respectively. Defaults to **DIR_OUT**.

​         **edge**:Interrupt generating GPIO chip setting, pass in **EDGE_NONE** for no interrupts, **EDGE_RISING** for interrupts on rising values, **EDGE_FALLING** for interrupts on falling values or **EDGE_BOTH** for all interrupts.

#### Method

**Write**

```javascript
gpio.write(id, value,callback)
```

**Read**

```javascript
gpio.read(id, function(err, value){})
```

**Listen**

```javascript
gpio.on('change', function(channel, value){})
```

