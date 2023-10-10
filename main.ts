radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        edubitTrafficLightBit.setLed(LedColor.All, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.On))
    }
})
radio.setGroup(1)
