const ground = document.getElementById("ground");
const score = document.getElementById("score");
const time = document.getElementById("time");
let place;
let audios = [];


for (let i = 1; i < 7; i++){
    audios[i-1] = new Audio(`audio/clip${i}.mp4`)
}

console.log(audios)
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


let a = -1;

function clickListener(event) {
   if (event.target.style.backgroundImage) {
        score.innerText = Number(score.innerText)+1;
        event.target.style.backgroundImage = "url('whack.jpg')";
        let i = Math.floor(Math.random()*6)
        console.log(i)
        audios[i].play()

        setTimeout(() => {
            event.target.style.backgroundImage=""
        }, moleTime)

        moleTime -= 5;
    } 
    else { score.innerText = Number(score.innerText)-1 };
};


function showMole() {
    x = Math.floor(Math.random() *place.length);
    if (a == x){
        if (x == 15){
            a = 0;
        }
        else {
            a = x + 1;
        }
    }
    else{
        a = x
    }
    const selectedPlace = place[a];
    selectedPlace.style.backgroundImage = "url('harbola.png')";
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
