const games = document.querySelector(".games");
const wins = document.querySelector(".wins");
const loses = document.querySelector(".loses");
const rows = document.querySelector(".rows");
const player = document.querySelector(".player");
const ai = document.querySelector(".ai");
const winner = document.querySelector(".winner");
const btn = document.querySelector(".play");
const hands = document.querySelectorAll(".pick")
const game = {
handPlayer: "",
handAi: "",
}
const AllTimeScores = {
    games: 0,
    won: 0,
    lost: 0,
    rowed: 0,
}

hands.forEach(hand => hand.addEventListener('click', function() {
        hands.forEach((w) => {
        w.style.boxShadow = "";
        });
        this.style.boxShadow = "0 0 0 3px red";
        console.log("ok");
        game.handPlayer = this.dataset.option;
    }))

const AiChoice = () => {
 const aiHand = Math.floor( Math.random() * 3 );
 if (aiHand === 0) {
     game.handAi = "kamien";
 }
 else if (aiHand === 1) {
     game.handAi = "papier"
 }
 else {
     game.handAi = "nozyczki";
 }
}

const gameTime = () => {
    if (game.handPlayer === "") {
        return;
    }
    else {
    AiChoice();
    player.textContent = game.handPlayer;
    ai.textContent = game.handAi;
    AllTimeScores.games++;
    if (game.handPlayer === "nozyczki" && game.handAi === "kamien" || game.handPlayer === "kamien" && game.handAi === "papier" || game.handPlayer === "papier" && game.handAi === "nozyczki") {
        winner.textContent = "Komputer (outsmarted)";
        AllTimeScores.lost ++;
    }
    else if (game.handPlayer === "nozyczki" && game.handAi === "papier" || game.handPlayer === "kamien" && game.handAi === "nozyczki" || game.handPlayer === "papier" && game.handAi === "kamien") {
        AllTimeScores.won++;
        winner.textContent = "Wygrałeś (lucky one)"
    }
    else if (game.handPlayer = game.handAi) {
        AllTimeScores.rowed++;
        winner.textContent = "remis";
    }
    rows.textContent = AllTimeScores.rowed;
    loses.textContent = AllTimeScores.lost;
    wins.textContent = AllTimeScores.won;
    games.textContent = AllTimeScores.games;

}
}
btn.addEventListener('click', gameTime);
