window.alert("Welcome to Robot Gladiators!");

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerMoney = 10;
var playerAttack = 25;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;



//Game states:
//"Win" - Player robot has defeated all enemy robots
// *Fight all enemy-robots
// *Defeat each enemy-robot
//"LOSE" - player robot's health is zero or less

//FIGHT FUNCTION BEGINS
var fight = function(enemyName){

//WHILE LOOP - continues until EITHER player or all enemies are dead  
while (enemyHealth > 0 && playerHealth > 0){

//Ask the player whether they want to fight   
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    if (promptFight === "skip" || promptFight === "SKIP") {
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        if (confirmSkip){
          window.alert(playerName + " has decided to skip this fight. Goodbye!");
          playerMoney = playerMoney - 10;
          console.log("playerMoney" , playerMoney)
          break;
        }
    }
  //If player doesn't skip, DEFAULT to fight
  //player attacks, calculate enemy health  
      enemyHealth = enemyHealth - playerAttack;
      console.log(playerName + " attacked " + enemyName + " . " + enemyName + " has " + enemyHealth + " remaining." );
      //if enemy dies, alert player, award money, and leave loop
      if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        playerMoney = playerMoney + 20;
        break;
      }
      //if enemy survives, attack player
      else {
        window.alert(enemyName + " still has " + enemyHealth + " health remaining.")
      }
        playerHealth = playerHealth - enemyAttack;
        console.log(enemyName + " attacked! " + playerName + " now has " + playerHealth + " health remaining.");
        //if player dies, leave loop 
        if (playerHealth <= 0) {
          window.alert(playerName + " has died!")
          break;
          }
      
      //if player survives, provide health
      else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
      }
     
  }  //END WHILE LOOP

}; //End of FIGHT function

// STARTGAME FUNCTION
var startGame = function( ){
  //reset player stats
  playerHealth = 100;
  playerAttack = 10; 
  playerMoney = 10;

//FOR loop - switches out enemies when they're KO'd
for (var i = 0; i < enemyNames.length; i++) {
  if(playerHealth > 0) {
    window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
  
      var pickedEnemyName = enemyNames[i];
      enemyHealth = 50;

    fight(pickedEnemyName);
    if ( i < enemyNames.length -1 && playerHealth > 0){
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
  if (playerHealth > 0) {
    window.alert("Great job! Your robot survived! You now have a score of " + playerMoney + " .");
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
  var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', UPGRADE', or 'LEAVE' to make a choice.");
  switch (shopOptionPrompt) {
    case "refill":
    case "REFILL":
      if(playerMoney >= 7){
      window.alert("Refilling player's health by 20 for 7 dollars.");
      playerHealth = playerHealth + 20;
      playerMoney = playerMoney - 7;}
      else {
        window.alert("You don't have enough money!");
      }
      break;
    case "upgrade":
    case "UPGRADE":
      if (playerMoney >= 7){
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      playerAttack = playerAttack + 6;
      playerMoney = playerMoney - 7;}
      else {
        console.alert("You don't have enough money");
      }
      break;
    case "leave":
    case "LEAVE":
      window.alert("Leaving the store.");
      break;
    default: window.alert("You did not pick a valid option. Try again.");
    shop();
    break;
  }
  shop ();
  window.alert("You are now leaving the store. " + playerName + " currently  has " + playerHealth + " health points, " + playerAttack + " attack points, and " +  playerMoney + " dollars.");
}


//start the game when the page loads
startGame();