var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerMoney = 10;

//check to see if the value is greater than 0
if (playerHealth > 0){
    console.log("Your robot is still alive!");
}

var playerAttack = 10;

//You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(){
    window.alert("Welcome to Robot Gladiators!");
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
          window.alert(playerName + " still has " + playerHealth + " health left.");
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
      }}


fight();