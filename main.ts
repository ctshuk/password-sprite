input.onButtonPressed(Button.A, function () {
    password.move(1)
})
input.onButtonPressed(Button.AB, function () {
    if (password.get(LedSpriteProperty.X) == 2 && password.get(LedSpriteProperty.Y) == 2) {
        basic.showIcon(IconNames.Yes)
        mode = 1
    } else {
        basic.showIcon(IconNames.No)
    }
})
input.onButtonPressed(Button.B, function () {
    password.turn(Direction.Right, 90)
})
let password: game.LedSprite = null
let mode = 0
mode = 0
let point1 = game.createSprite(2, 2)
point1.set(LedSpriteProperty.Brightness, 0)
password = game.createSprite(3, 0)
password.set(LedSpriteProperty.Brightness, 100)
basic.forever(function () {
    if (mode == 1) {
        edubitTrafficLightBit.setLed(LedColor.All, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.On))
    }
})
