let home_score = document.getElementById("home-score").textContent = 0
let guest_score = document.getElementById("guest-score").textContent = 0


// HOME SCORE FUNCTIONS
function add1() {
    result = home_score + 1
    home_score = result
    document.getElementById("home-score").textContent = result
}

function add2() {
    result = home_score + 2
    home_score = result
    document.getElementById("home-score").textContent = result
}

function add3() {
    result = home_score + 3
    home_score = result
    document.getElementById("home-score").textContent = result
}


// GUEST SCORE FUNCTIONS
function add1_guest() {
    result = guest_score + 1
    guest_score = result
    document.getElementById("guest-score").textContent = result
}

function add2_guest() {
    result = guest_score + 2
    guest_score = result
    document.getElementById("guest-score").textContent = result
}

function add3_guest() {
    result = guest_score + 3
    guest_score = result
    document.getElementById("guest-score").textContent = result
}