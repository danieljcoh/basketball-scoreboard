let home_score = document.getElementById("home-score").textContent = 0
let guest_score = document.getElementById("guest-score").textContent = 0


// HOME SCORE FUNCTIONS
function add1() {
    result = home_score + 1
    home_score = result
    document.getElementById("home-score").textContent = result
    
    // Highlighting functionality
    guest_number = parseInt(guest_score)
    home_number = parseInt(home_score)
    
    let home = document.getElementById("home-score")
    let guest = document.getElementById("guest-score")
    
    if (guest_number > home_number){
        guest.classList.add('highlight');
        home.classList.remove('highlight');
    } 
        
    else if (home_number > guest_number) {
        guest.classList.remove('highlight');
        home.classList.add('highlight');
    }
}

function add2() {
    result = home_score + 2
    home_score = result
    document.getElementById("home-score").textContent = result
    
    guest_number = parseInt(guest_score)
    home_number = parseInt(home_score)
    
    let home = document.getElementById("home-score")
    let guest = document.getElementById("guest-score")
    
    if (guest_number > home_number){
        guest.classList.add('highlight');
        home.classList.remove('highlight');
    } 
        
    else if (home_number > guest_number) {
        guest.classList.remove('highlight');
        home.classList.add('highlight');
    }
}

function add3() {
    result = home_score + 3
    home_score = result
    document.getElementById("home-score").textContent = result
    
    guest_number = parseInt(guest_score)
    home_number = parseInt(home_score)
    
    let home = document.getElementById("home-score")
    let guest = document.getElementById("guest-score")
    
    if (guest_number > home_number){
        guest.classList.add('highlight');
        home.classList.remove('highlight');
    } 
        
    else if (home_number > guest_number) {
        guest.classList.remove('highlight');
        home.classList.add('highlight');
    }
}


// GUEST SCORE FUNCTIONS
function add1_guest() {
    result = guest_score + 1
    guest_score = result
    document.getElementById("guest-score").textContent = result
    
    guest_number = parseInt(guest_score)
    home_number = parseInt(home_score)
    
    let home = document.getElementById("home-score")
    let guest = document.getElementById("guest-score")
    
    if (guest_number > home_number){
        guest.classList.add('highlight');
        home.classList.remove('highlight');
    } 
        
    else if (home_number > guest_number) {
        guest.classList.remove('highlight');
        home.classList.add('highlight');
    }
}

function add2_guest() {
    result = guest_score + 2
    guest_score = result
    document.getElementById("guest-score").textContent = result
    
    guest_number = parseInt(guest_score)
    home_number = parseInt(home_score)
    
    let home = document.getElementById("home-score")
    let guest = document.getElementById("guest-score")
    
    if (guest_number > home_number){
        guest.classList.add('highlight');
        home.classList.remove('highlight');
    } 
        
    else if (home_number > guest_number) {
        guest.classList.remove('highlight');
        home.classList.add('highlight');
    }
}

function add3_guest() {
    result = guest_score + 3
    guest_score = result
    document.getElementById("guest-score").textContent = result
    
    guest_number = parseInt(guest_score)
    home_number = parseInt(home_score)
    
    let home = document.getElementById("home-score")
    let guest = document.getElementById("guest-score")
    
    if (guest_number > home_number){
        guest.classList.add('highlight');
        home.classList.remove('highlight');
    } 
        
    else if (home_number > guest_number) {
        guest.classList.remove('highlight');
        home.classList.add('highlight');
    }
}

function new_game() {
    home_score = 0
    guest_score = 0
    document.getElementById("home-score").textContent = home_score
    document.getElementById("guest-score").textContent = guest_score
    
    let home = document.getElementById("home-score")
    let guest = document.getElementById("guest-score")
    
    guest.classList.remove('highlight');
    home.classList.remove('highlight');
}