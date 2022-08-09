window.alert("Welcome to Robot Gladiators!");

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerMoney = 10;
var playerAttack = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;



//Game states:
//"Win" - Player robot has defeated all enemy robots
// *Fight all enemy-robots
// *Defeat each enemy-robot
//"LOSE" - player robot's health is zero or less



for (var i = 0; i < enemyNames.length; i++){
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index.");
}

var fight = function(enemyName){
// fight function statements

//Ask the player whether they want to fight   
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    if (promptFight === "fight" || promptFight === "FIGHT") {
        // calculate enemy's remaining health
        enemyHealth = enemyHealth - playerAttack;
        console.log(
          playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
      
        // report enemy's status to player
        if (enemyHealth <= 0) {
          window.alert(enemyName + " has died!");
        } else {
          window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
      
        // calculate player's health
        playerHealth = playerHealth - enemyAttack;
        console.log(
          enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
      
        // report player's status to player
        if (playerHealth <= 0) {
          window.alert(playerName + " has died!");
        } else {
          window.alert("Your robot lived! " + playerName + " still has " + playerHealth + " health left.");
                }
        // if player choses to skip
      } else if (promptFight === "skip" || promptFight === "SKIP") { 
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
                if (confirmSkip){
                window.alert(playerName + " has chosen to skip the fight. Goodbye!");
                playerMoney = playerMoney - 2;
                                } 
                else {fight();}}
     else {
        window.alert("You need to choose a valid option. Try again!");
      }
    }

for (var i = 0; i < enemyNames.length; i++){

    fight(enemyNames[i]);
}