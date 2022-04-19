input.onButtonPressed(Button.A, function () {
    basic.showString("" + (input.lightLevel()))
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        # # # # #
        # # # # #
        `)
})
