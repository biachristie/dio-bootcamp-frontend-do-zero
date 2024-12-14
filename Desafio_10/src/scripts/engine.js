const state = {
    score: {
        playerScore: 0,
        computerScore: 0,
        scoreBox: document.getElementById("score-points")
    },
    cardSprites: {
        avatar: document.getElementById("card-image"),
        name: document.getElementById("card-name"),
        type: document.getElementById("card-type")
    },
    fieldCards: {
        player: document.getElementById("player-field-card"),
        computer: document.getElementById("computer-field-card")
    },
    fieldSide: {
        player: document.getElementById("player-cards"),
        computer: document.getElementById("computer-cards")
    },
    actions: {
        button: document.getElementById("next-duel")
    }
}

const pathImages = "./src/assets/icons/";
const pathAudios = "./src/assets/audios/";

const cardData = [
    {
        id: 0,
        name: "Blue Eyes White Dragon",
        type: "Paper",
        img: `${pathImages}dragon.png`,
        WinOf: [1],
        LoseOf: [2],
        value: 0
    },
    {
        id: 1,
        name: "Dark Magician",
        type: "Rock",
        img: `${pathImages}magician.png`,
        WinOf: [2],
        LoseOf: [0],
        value: 0
    },
    {
        id: 2,
        name: "Exodia",
        type: "Scissors",
        img: `${pathImages}exodia.png`,
        WinOf: [0],
        LoseOf: [1],
        value: 0
    },
]

async function getRandomCardId() {
    const randomIndex = Math.floor(Math.random() * cardData.length);
    return cardData[randomIndex].id;
}

async function createCardImage(idCard, fieldSide) {
    const cardImage = document.createElement("img");
    cardImage.setAttribute("height", "100px");
    cardImage.setAttribute("src", `${pathImages}card-back.png`);
    cardImage.setAttribute("data-id", idCard);
    cardImage.classList.add("card");

    if (fieldSide === "player") {
        cardImage.addEventListener("mouseover", () => drawsSelectedCard(idCard));
        cardImage.addEventListener("click", () => setCardsFields(cardImage.getAttribute("data-id")));
    }

    return cardImage;
}

async function setCardsFields(cardId) {
    await removeAllCardsImages();

    let computerCardId = await getRandomCardId();

    state.fieldCards.player.style.display = "block";
    state.fieldCards.computer.style.display = "block";
    state.fieldCards.player.src = cardData[cardId].img;
    state.fieldCards.computer.src = cardData[computerCardId].img;

    hideCardDetails();

    let duelResults = await checkDuelResults(cardId, computerCardId);

    await updateScore();
    await drawButton(duelResults);
}

async function removeAllCardsImages() {
    let { computer, player } = state.fieldSide;

    let imgElements = computer.querySelectorAll("img");
    imgElements.forEach(img => img.remove());
    imgElements = player.querySelectorAll("img");
    imgElements.forEach(img => img.remove());
}

async function hideCardDetails() {
    state.cardSprites.avatar.src = "";
    state.cardSprites.name.innerText = "Selecione";
    state.cardSprites.type.innerText = "uma carta";
}

async function checkDuelResults(playerCardId, computerCardId) {
    let duelResults = "draw";

    let playerCard = cardData[playerCardId];

    if (playerCard.WinOf.includes(computerCardId)) {
        duelResults = "win";
        state.score.playerScore++;
    }
    
    if (playerCard.LoseOf.includes(computerCardId)) {
        duelResults = "lose";
        state.score.computerScore++;
    }

    await playAudio(duelResults);
    return duelResults;
    
}

async function drawButton(text) {
    state.actions.button.innerText = text.toUpperCase();
    state.actions.button.style.display = "block";
}

async function updateScore() {
    state.score.scoreBox.innerText = `
        Win: ${ state.score.playerScore } | Lose: ${ state.score.computerScore }
    `;
}

async function drawsSelectedCard(id) {
    state.cardSprites.avatar.src = cardData[id].img;
    state.cardSprites.name.innerText = cardData[id].name;
    state.cardSprites.type.innerText = `Attribute: ${ cardData[id].type }`;
}

async function drawcards(cardNumbers, fieldSide) {
    for (let i = 0; i < cardNumbers; i++) {
        const randomIdCard = await getRandomCardId();
        const cardImage = await createCardImage(randomIdCard, fieldSide);
        
        switch (fieldSide) {
            case "player":
                state.fieldSide.player.appendChild(cardImage);
                break;
        
            case "computer":
                state.fieldSide.computer.appendChild(cardImage);
                break;    
        }
    }
}

async function resetDuel() {
    state.cardSprites.avatar.src = "";
    state.fieldCards.player.src = "";
    state.fieldCards.computer.src = "";
    state.actions.button.style.display = "none";

    init();
}

async function playAudio(status) {
    try {
        const audio = new Audio(`${ pathAudios }${ status }.wav`);
        audio.volume = 0.3;
        audio.play();
    } catch (error) {
        console.error("Error: audio not found", error);
    }
}

function init() {
    const bgm = document.getElementById("bgm");
    bgm.volume = 0.3;
    bgm.play();

    drawcards(5, "player");
    drawcards(5, "computer");
}

init();