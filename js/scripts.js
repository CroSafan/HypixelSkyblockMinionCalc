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
  if (upgradeSlot1 === "dia-spreading") {
    upgradeSlot2 = parseFloat(upgradeSlot2) / 100
    coinsProducedPerMinion =
      88400 / (actionTime / (1 + fuel + bonusSpeed + upgradeSlot2)) * itemsPerAction * unitPrice + 138240 / actionTime;
  } else if (upgradeSlot2 === "dia-spreading") {
    upgradeSlot1 = parseFloat(upgradeSlot1) / 100
    coinsProducedPerMinion =
      88400 / (actionTime / (1 + fuel + bonusSpeed + upgradeSlot1)) * itemsPerAction * unitPrice + 138240 / actionTime;
  }



  else {
    upgradeSlot1 = parseFloat(upgradeSlot1) / 100
    upgradeSlot2 = parseFloat(upgradeSlot2) / 100

    coinsProducedPerMinion = 88400 / (actionTime / (1 + fuel + bonusSpeed + upgradeSlot1 + upgradeSlot2)) * itemsPerAction * unitPrice;
  }

  totalCoins = coinsProducedPerMinion * minionSlots;

  //TODO : fix rounding errors
  document.getElementById("result").innerText = "Coins with " + minionSlots + " minion slots is:" + totalCoins

}
