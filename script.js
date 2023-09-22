const ground = document.getElementById("ground");
const score = document.getElementById("score");
const time = document.getElementById("time");
let place;



let moleTime = 1000;

let showMoleTimer;
let playingTimeTimer;



function gameOver() {
    clearInterval(showMoleTimer);
    clearInterval(playingTimeTimer);
};

function playingTime() {
    time.innerText = Number(time.innerText) -1;

    (time.innerText === "0") && gameOver();
};

function clickListener(event) {
    if (event.target.style.backgroundImage) {
        score.innerText = Number(score.innerText)+1;
        event.target.style.backgroundImage = "url('whack.jpg')"
        setTimeout(() => {
            event.target.style.backgroundImage=""
        }, moleTime)
        moleTime -= 5;
    } 
    else { score.innerText = Number(score.innerText)-1 };
};


function showMole() {
    const selectedPlace = place[Math.floor(Math.random() *place.length)];

    selectedPlace.style.backgroundImage = "url('harbola(1).png')";
    setTimeout(() => {
        selectedPlace.style.backgroundImage=""
    }, moleTime);
    
};


function createBoard() {
    for (let i=0; i<16; i++) {
        ground.innerHTML += `<div class="place"><div>`;
    };
    place = document.getElementsByClassName("place");
    [...place].forEach(i => i.addEventListener("click", clickListener));
};


function startGame() {
    createBoard();
    showMoleTimer = setInterval(showMole, moleTime);
    playingTimeTimer = setInterval(playingTime, 1000);
    
};


startGame();
