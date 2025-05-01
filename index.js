let hscore = document.getElementById("homescore")
let gscore = document.getElementById("guestscore")
let status = document.getElementById("status")

let home = 0
let guest = 0

function increaseHome(number){
    home += number
    hscore.textContent = home
    checkStatus()
}

function increaseGuest(number){
    guest += number
    gscore.textContent = guest
    checkStatus()
}

function checkStatus() {
    if (home < guest) {
        status.textContent = "Guest is winning by " + (guest-home) + "!"
    }
    else if (home > guest) {
        status.textContent = "Home is winning by " + (home-guest) + "!"
    }
    else {
        status.textContent = "It's a tie! Tension intensifies 🤬"
    }
}

function reset() {
    home = 0
    guest = 0
    hscore.textContent = home
    gscore.textContent = guest
    status.textContent = "Game is restarting!"
}



