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

//FOR loop - switches out enemies when they're KO'd
for (var i = 0; i < enemyNames.length; i++) {
  if(playerHealth > 0) {
    window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
  
      var pickedEnemyName = enemyNames[i];
      enemyHealth = 50;

    fight(pickedEnemyName);
}
else {
  window.alert("You have lost your robot in battle! Game Over!");
  break;
}
}