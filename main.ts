let salut = 0
let strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB_RGB)
basic.forever(function () {
    salut += pins.map(
    sonar.ping(
    DigitalPin.P1,
    DigitalPin.P1,
    PingUnit.Centimeters
    ),
    0,
    1023,
    0,
    30
    )
    strip.showBarGraph(salut, 30)
    basic.showNumber(salut)
    basic.pause(1000)
})
basic.forever(function () {
	
})
