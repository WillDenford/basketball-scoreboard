let homeScoreButton1 = document.getElementById("home-increment-1")
let homeScoreButton2 = document.getElementById("home-increment-2")
let homeScoreButton3 = document.getElementById("home-increment-3")
let homeScoreEl = document.getElementById("home-score")
let homeScore = 0

let guestScoreButton1 = document.getElementById("guest-increment-1")
let guestScoreButton2 = document.getElementById("guest-increment-2")
let guestScoreButton3 = document.getElementById("guest-increment-3")
let guestScoreEl = document.getElementById("guest-score")
let guestScore = 0

function homeAdd1(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function homeAdd2(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function homeAdd3(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function guestAdd1(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function guestAdd2(){
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function guestAdd3(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
}