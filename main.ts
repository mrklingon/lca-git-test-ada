input.buttonsAB.onEvent(ButtonEvent.Click, function () {
    round = 10
    for (let index3 = 0; index3 <= 99; index3++) {
        Universe[index3] = 0
    }
    Universe[1] = 1
    Universe[8] = -1
    color2 = Colors.Blue
    showUni()
})
function doGen () {
    for (let index4 = 0; index4 <= 99; index4++) {
        cbtNbr(index4)
        if (Count < 0) {
            Future[index4] = 0 - Rules[Math.abs(Count)]
        } else {
            Future[index4] = Rules[Count]
        }
    }
    for (let index5 = 0; index5 <= 99; index5++) {
        Universe[index5] = Future[index5]
    }
}
function ShowRules () {
    light.setAll(0x000000)
    for (let index = 0; index <= 3; index++) {
        if (0 == Rules[index]) {
            light.setPixelColor(index, 0xff9da5)
        } else {
            light.setPixelColor(index, 0xff0000)
        }
    }
    pause(2000)
    showUni()
}
input.onSwitchMoved(SwitchDirection.Right, function () {
    showUni()
})
function showUni () {
    light.setAll(0x000000)
    doShow10()
}
input.buttonA.onEvent(ButtonEvent.Click, function () {
    doGen()
    showUni()
})
function pickColor () {
    colors = [
    Colors.Red,
    Colors.Orange,
    Colors.Green,
    Colors.Blue,
    Colors.Pink,
    Colors.Purple
    ]
    color2 = colors[Math.randomRange(0, 5)]
}
input.onGesture(Gesture.Shake, function () {
    for (let index6 = 0; index6 <= 99; index6++) {
        Universe[index6] = 1 - Math.randomRange(0, 2)
    }
    Rules = [
    0,
    1,
    0,
    0
    ]
    showUni()
})
function cbtNbr (num: number) {
    Left = 0
    Right = 0
    Count = 0
    if (num > 0) {
        Left = num - 1
    } else {
        Left = 99
    }
    if (num < 99) {
        Right = num + 1
    } else {
        Right = 0
    }
    Count = Universe[Left] + Universe[Right] + Universe[num]
}
input.buttonB.onEvent(ButtonEvent.Click, function () {
    round = 10
    pickColor()
    for (let index = 0; index < round; index++) {
        doGen()
        showUni()
        pause(200)
    }
})
function doShow10 () {
    light.setAll(0x000000)
    for (let index7 = 0; index7 <= 9; index7++) {
        if (Universe[index7] == 1) {
            light.setPixelColor(index7, 0x0000ff)
        }
        if (Universe[index7] == -1) {
            light.setPixelColor(index7, 0xff0000)
        }
    }
}
function Genesis () {
    for (let index = 0; index < 99; index++) {
        Universe.push(0)
        Future.push(0)
    }
    Rules = [
    0,
    1,
    0,
    0
    ]
    Universe[1] = 1
    Universe[8] = -1
}
function doShowAll () {
    for (let index2 = 0; index2 <= 99; index2++) {
        light.setPixelColor(index2 % 10, 0xffff00)
        pause(25)
        if (Universe[index2] == 0) {
            light.setPixelColor(index2 % 10, 0x000000)
        } else {
            if (Universe[index2] == 1) {
                light.setPixelColor(index2 % 10, 0x0000ff)
            } else {
                light.setPixelColor(index2 % 10, 0xff0000)
            }
        }
    }
    doShow10()
}
input.onSwitchMoved(SwitchDirection.Left, function () {
    showUni()
})
let Right = 0
let Left = 0
let colors: number[] = []
let Rules: number[] = []
let Count = 0
let color2 = 0
let round = 0
let Future: number[] = []
let Universe: number[] = []
Universe = [0]
Future = [0]
Genesis()
showUni()
