
const calculateButton = document.getElementById("calculateButton");

calculateButton.addEventListener("click", () => { calculateMinionCoins() });

const calculateMinionCoins = () => {
  let coinsProducedPerMinion = 0.0;
  let actionTime = parseFloat(document.getElementById("minionSpeed").value);
  let itemsPerAction = parseFloat(document.getElementById("itemsPerAction").value);
  let unitPrice = parseFloat(document.getElementById("unitPrice").value);
  let minionSlots = parseInt(document.getElementById("minionSlots").value);
  let fuel = parseFloat(document.getElementById("fuel").value) / 100.0;
  let upgradeSlot1 = document.getElementById("upgradeSlot1").value;
  let upgradeSlot2 = document.getElementById("upgradeSlot2").value;
  let bonusSpeed = parseFloat(document.getElementById("bonusSpeed").value) / 100.0;
  let usingDiaSpreading = false;
  let totalBonuses = 0.0;

  if (upgradeSlot1 === "dia-spreading") {
    upgradeSlot2 = parseFloat(upgradeSlot2) / 100.0;
    totalBonuses = fuel + bonusSpeed + upgradeSlot2;
    usingDiaSpreading = true;

  } else if (upgradeSlot2 === "dia-spreading") {
    upgradeSlot1 = parseFloat(upgradeSlot1) / 100.0;
    totalBonuses = fuel + bonusSpeed + upgradeSlot1
    usingDiaSpreading = true

  } else {
    upgradeSlot1 = parseFloat(upgradeSlot1) / 100.0;
    upgradeSlot2 = parseFloat(upgradeSlot2) / 100.0;

    totalBonuses = fuel + bonusSpeed + upgradeSlot1 + upgradeSlot2;
  }
  if (usingDiaSpreading) {
    coinsProducedPerMinion = 88400.0 / (actionTime / (1 + totalBonuses)) * itemsPerAction * unitPrice + 138240.0 / actionTime;

  } else {
    coinsProducedPerMinion = 88400.0 / (actionTime / (1 + totalBonuses)) * itemsPerAction * unitPrice;
  }

  totalCoins = coinsProducedPerMinion * minionSlots;

  //TODO : fix rounding errors
  document.getElementById("oneHourCoins").innerText = totalCoins / 24;
  document.getElementById("oneDayCoins").innerText = totalCoins;
  document.getElementById("oneWeekCoins").innerText = totalCoins * 7;

}
