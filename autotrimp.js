document.getElementById("food").appendChild(document.createTextNode("*"));
document.getElementById("wood").appendChild(document.createTextNode("*"));
document.getElementById("metal").appendChild(document.createTextNode("*"));
var myVar=setInterval(function () {myTimer()}, 10000);

function myTimer() {
  var food = game.resources.food.owned / game.resources.food.max;
  var wood = game.resources.wood.owned / game.resources.wood.max;
  var metal = game.resources.metal.owned / game.resources.metal.max;

//Buy resource buildings

  if (food > .8) {
    buyBuilding('Barn');
  }
  if (wood > .8) {
    buyBuilding('Shed');
  }
  if (metal > .8) {
    buyBuilding('Forge');
  }

//Buy speed upgrades
autotrimpupgrades = ["Egg", "UberHut", "UberHouse", "UberMansion", "UberHotel", "UberResort", "Bounty", "Efficiency", "TrainTacular", "Gymystic", "Speedfarming", "Speedlumber", "Speedminer", "Speedscience", "Potency"]
for (var key in game.upgrades) {
  if (autotrimpupgrades.indexOf(key) != -1) { 
    if (game.upgrades[key].allowed > game.upgrades[key].done) {
      buyUpgrade(key);
    }
  }
}

//Buy coordination

  if (game.upgrades.Coordination.allowed > game.upgrades.Coordination.done) {
    if ((game.resources.trimps.realMax() > (game.resources.trimps.maxSoldiers * 3))) {
      buyUpgrade('Coordination');
    }
  }
  //clearInterval(myVar);
}

