let money = 10;
let plantStage = 0; // 0: empty, 1: planted, 2: grown
const moneyEl = document.getElementById('money');
const displayEl = document.getElementById('plant-display');

function updateUI() {
    moneyEl.innerText = money;
}

function plantSeed() {
    if (money >= 5 && plantStage === 0) {
        money -= 5;
        plantStage = 1;
        displayEl.innerText = "Seed Planted";
        updateUI();
    }
}

function tendPlant() {
    if (plantStage === 1) {
        plantStage = 2;
        displayEl.innerText = "Full Grown Flower!";
    } else if (plantStage === 2) {
        money += 10;
        plantStage = 0;
        displayEl.innerText = "Empty Pot";
        updateUI();
    }
}
