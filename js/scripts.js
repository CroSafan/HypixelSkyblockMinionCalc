function calculateMinionCoins() {
  coinsProducedPerMinion = 0.0;

  actionTime = parseFloat(document.getElementById("minionSpeed").value);
  itemsPerAction = parseFloat(document.getElementById("itemsPerAction").value);
  unitPrice = parseFloat(document.getElementById("unitPrice").value);
  minionSlots = parseInt(document.getElementById("minionSlots").value);
  fuel = parseFloat(document.getElementById("fuel").value) / 100;
  upgradeSlot1 = document.getElementById("upgradeSlot1").value;
  upgradeSlot2 = document.getElementById("upgradeSlot2").value;
  bonusSpeed = parseFloat(document.getElementById("bonusSpeed").value) / 100;
  usingDiaSpreading = false;
  totalBonuses = 0.0

  if (upgradeSlot1 === "dia-spreading") {
    upgradeSlot2 = parseFloat(upgradeSlot2) / 100;
    totalBonuses = fuel + bonusSpeed + upgradeSlot2;
    usingDiaSpreading = true;

  } else if (upgradeSlot2 === "dia-spreading") {
    upgradeSlot1 = parseFloat(upgradeSlot1) / 100;
    totalBonuses = fuel + bonusSpeed + upgradeSlot1
    usingDiaSpreading = true

  } else {
    upgradeSlot1 = parseFloat(upgradeSlot1) / 100;
    upgradeSlot2 = parseFloat(upgradeSlot2) / 100;

    totalBonuses = fuel + bonusSpeed + upgradeSlot1 + upgradeSlot2;
  }
  if (usingDiaSpreading) {
    coinsProducedPerMinion = 88400 / (actionTime / (1 + totalBonuses)) * itemsPerAction * unitPrice + 138240 / actionTime;

  } else {
    coinsProducedPerMinion = 88400 / (actionTime / (1 + totalBonuses)) * itemsPerAction * unitPrice;
  }

  totalCoins = coinsProducedPerMinion * minionSlots;

  //TODO : fix rounding errors
  document.getElementById("oneHourCoins").innerText = totalCoins / 24
  document.getElementById("oneDayCoins").innerText = totalCoins
  document.getElementById("oneWeekCoins").innerText = totalCoins * 7



}
