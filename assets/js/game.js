window.alert("Welcome to Robot Gladiators!");





// function to check if player wants to fight or skip
var fightOrSkip = function(){
  //ask player 
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

  //Conditional Recursive Function Call
  if (promptFight === "" || promptFight === null){
    window.alert("You need to provide a valid answer! Please try again.");
    //use return to call it again and stop the rest of this function from running
    return fightOrSkip();
  }

  //convert promptFight to all lowercase so we can check with less options
  promptFight = promptFight.toLowerCase();
  if (promptFight === "skip"){
    //confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    //if yes (true), leave fight
    if (confirmSkip){
      window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
      playerInfo.money = Math.max(0, playerInfo.money - 10);

      //return true if player wants to leave
      return true;
    }
  }
  return false;
};

//FIGHT FUNCTION BEGINS
var fight = function(enemy){

//WHILE LOOP - continues until EITHER player or all enemies are dead  
while (enemy.health > 0 && playerInfo.health > 0){
  if (fightOrSkip()){
    break;
  }

  //player attacks, calculate enemy health  
  var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);    
  enemy.health = Math.max(0, enemy.health - damage);
      console.log(playerInfo.name + " attacked " + enemy.name + " . " + enemy.name + " has " + enemy.health + " remaining." );
      //if enemy dies, alert player, award money, and leave loop
      if (enemy.health <= 0) {
        window.alert(enemy.name + " has died!");
        playerInfo.money = playerInfo.money + 20;
        break;
      }
      //if enemy survives, attack player
      else {
        window.alert(enemy.name + " still has " + enemy.health + " health remaining.")
      }
      debugger
      var damage = randomNumber(enemy.attack - 3, enemy.attack);  
      playerInfo.health = Math.max(0, playerInfo.health - damage);
        console.log(enemy.name + " attacked! " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");
        //if player dies, leave loop 
        if (playerInfo.health <= 0) {
          window.alert(playerInfo.name + " has died!")
          break;
          }
      
      //if player survives, provide health
      else {
        window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
      }
     
  }  //END WHILE LOOP

}; //End of FIGHT function


// STARTGAME FUNCTION
var startGame = function( ){
  //reset player stats
  playerInfo.reset();
  

//FOR loop - switches out enemies when they're KO'd
for (var i = 0; i < enemyInfo.length; i++) {
  if(playerInfo.health > 0) {
    window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
  
      var pickedEnemyObj = enemyInfo[i];
      pickedEnemyObj.health = randomNumber(40, 60);

    fight(pickedEnemyObj);
    if ( i < enemyInfo.length -1 && playerInfo.health > 0){
      var storeConfirm = window.confirm("The fight is over, visit the store before the next round.");
      if (storeConfirm){
      shop();
    }
    }
}
else {
  window.alert("You have lost your robot in battle! Game Over!");
  break;
}
}
//play again
endGame();
};

//function to end the entire game
var endGame = function() {
  if (playerInfo.health > 0) {
    window.alert("Great job! Your robot survived! You now have a score of " + playerInfo.money + " .");
  }
  else {
    window.alert("You've lost your robot in battle.");
  }
  var playAgainConfirm = window.confirm("Would you like to play again?");
  if (playAgainConfirm) {
    startGame();
  }
  else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
}
}

var shop = function (){
  var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter 1 for REFILL, 2 for UPGRADE, or 3 to LEAVE");
  shopOptionPrompt = parseInt(shopOptionPrompt);
  switch (shopOptionPrompt) {
    case 1:
      playerInfo.refillHealth();
      break;
    case 2:
     playerInfo.upgradeAttack();
      break;
    case 3:
      window.alert("You are now leaving the store. " + playerInfo.name + " currently  has " + playerInfo.health + " health points, " + playerInfo.attack + " attack points, and " +  playerInfo.money + " dollars.");
      break;
    default: window.alert("You did not pick a valid option. Try again.");
    shop();
    break;
  }
};

var randomNumber= function (min, max){
  var value = Math.floor(Math.random() * (max-min +1) + min);

  return value;
};

var getPlayerName = function(){
  var name = "";
  while (name === "" || name === null){
    name= prompt("What is your robot's name?");
  }
  console.log("Your robot's name is " + name);
  return name;
}

var playerInfo = {
  name: getPlayerName(),
  health: 100,
  attack: 10,
  money: 10,
  reset: function(){
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },
  refillHealth: function(){
    if (this.money >= 7){
      window.alert("Refilling player's health by 20 for 7 dollars.");
    this.health += 20;
    this.money -= 7;
    }
    else {
      window.alert("You don't have enough money!");
    }
  },
  upgradeAttack: function(){
    if (this.money >= 7){
    console.log("Upgrading player's attack by 6 for 7 dollars.");
    this.attack += 6;
    this.money -= 7;
    }
    else {
      console.log("You don't have enough money!");
    }
  }
};

var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10, 14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10, 14)
  },
  {
    name: "Robert Trumble",
    attack: randomNumber(10,14)
  }
];

//start the game when the page loads
startGame();