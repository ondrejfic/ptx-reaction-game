let actualLight: number = 0
let referenceLight: number = 0;
const tresholdLight: number = 30;

basic.pause(1000)
for (let i = 1; i < 6; i += 1) {
    actualLight += input.lightLevel()
}
referenceLight = actualLight / 5;





basic.forever(function () {
    actualLight = input.lightLevel()
    if (referenceLight - actualLight < tresholdLight) {
        endGame();
    }
    //console.log(1)
    //else console.log(0)


})

let start: number = 0;
input.onButtonPressed(Button.A, function () {

    basic.showLeds(`
# . . . #
. # . # .
. . # . .
. # . # .
# . . . #
`)
    basic.pause(randint(400, 3000))
    basic.clearScreen()
    start = control.millis()










})

function endGame(): void {
    let duration = control.millis() - start
    basic.showNumber(duration)
}














