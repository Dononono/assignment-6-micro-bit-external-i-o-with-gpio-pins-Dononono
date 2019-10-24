let moistureLevel: number = 0

basic.forever(function () {
    // power up digital pin (sensor power)
    pins.digitalWritePin(DigitalPin.P16, 1)
    // read the analog pin (sensor output)
    moistureLevel = pins.analogReadPin(AnalogPin.P0)
    // power down digital pin
    pins.digitalReadPin(DigitalPin.P16, 0)
    // setting the scale that the microbit outputs based off the moistureLevel

    // let scaledLevel =  map(moistureLevel , 10, 500, 0, 4) 
    basic.showNumber(moistureLevel)
    basic.pause(100)
    basic.clearScreen()
    basic.pause(1000)

})
