const drumBtns = document.querySelectorAll(".drum")

for (let i = 0; i < drumBtns.length; i++) {
    drumBtns[i].addEventListener("click",function() {
        var buttonInner = this.innerHTML
        drumAudios(buttonInner)

        animatedButtons(buttonInner)
    })
}

document.addEventListener("keypress",(e) => {
    drumAudios(e.key)

    animatedButtons(e.key)
})

function drumAudios(key) {
    switch(key) {
        case "w":
            var audio = new Audio ("./sounds/tom-1.mp3")
            audio.play()
        break;

        case "a":
            var audio = new Audio ("./sounds/tom-2.mp3")
            audio.play()
        break;

        case "s":
            var audio = new Audio ("./sounds/tom-3.mp3")
            audio.play()
        break;

        case "d":
            var audio = new Audio ("./sounds/tom-4.mp3")
            audio.play()
        break;

        case "j":
            var audio = new Audio ("./sounds/snare.mp3")
            audio.play()
        break;

        case "k":
            var audio = new Audio ("./sounds/crash.mp3")
            audio.play()
        break;

        case "l":
            var audio = new Audio ("./sounds/kick-bass.mp3")
            audio.play()
        break;
    }
}

function animatedButtons(pressedKey) {
    var animatedPressedKey = document.querySelector("." + pressedKey)
    animatedPressedKey.classList.add("pressed")

    setTimeout(function() {
        animatedPressedKey.classList.remove("pressed")
    },100)
}
