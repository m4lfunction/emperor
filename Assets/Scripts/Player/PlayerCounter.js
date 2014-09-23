#pragma strict

<<<<<<< HEAD
var player : GameObject;
=======
var playerMover : GameObject;
>>>>>>> 51360c7428d2ac8c746147b892aa51f84987a6fc

var xp : int;
var xpToLvl : int = 25;
var health : int;
<<<<<<< HEAD
var ammo1 : int = 100;
var lvl : int = 1;

function Start(){

=======
var maxHealth : int;
var ammo1 : int = 100;

var lvl : int = 1;

var dex : int;
private var speedBonus : float;

function Start(){
	// load the player
	health = (PlayerPrefs.GetInt("health"));
>>>>>>> 51360c7428d2ac8c746147b892aa51f84987a6fc
	xp = (PlayerPrefs.GetInt("xp"));
	xpToLvl = (PlayerPrefs.GetInt("xpToLvl"));
	lvl = (PlayerPrefs.GetInt("lvl"));
	health = (PlayerPrefs.GetInt("health"));
<<<<<<< HEAD
}

function Update(){

	health = player.GetComponent(PlayerHealth).health;
=======
	ammo1 = (PlayerPrefs.GetInt("ammo1"));
	dex = (PlayerPrefs.GetInt("dex"));
	
	maxHealth = 25 + lvl * 10;
	speedBonus = dex * 0.2;
	playerMover.GetComponent(PlayerMove).speed += speedBonus;
}

function Update(){
	
	if (health <= 0){
		Die();
	}
	
	if (health > maxHealth){
		health = maxHealth;
	}
>>>>>>> 51360c7428d2ac8c746147b892aa51f84987a6fc
	
	if(xp >= xpToLvl){
		LvlUp();
	}

}

function OnGUI(){
<<<<<<< HEAD
	GUI.Label(Rect (10, 10, 100, 20), "HEALTH: "+health);
	GUI.Label(Rect (10, 25, 100, 20), "EXP: "+xp+"/"+xpToLvl);
=======
	GUI.Box(Rect(5,5,95,70),"");
	GUI.Label(Rect (10, 10, 100, 20), "HP: "+health+" / "+maxHealth);
	GUI.Label(Rect (10, 25, 100, 20), "EXP: "+xp+" / "+xpToLvl);
>>>>>>> 51360c7428d2ac8c746147b892aa51f84987a6fc
	GUI.Label(Rect (10, 40, 100, 20), "LVL: "+lvl);
	GUI.Label(Rect (10, 55, 100, 20), "AMMO: "+ammo1);

}

<<<<<<< HEAD
=======
function OnCollisionEnter (collision : Collision)
{

	// handle the health stuff

//	if (collision.transform.tag == ("EnemyWeapon")){
//		health -= 1;
//	}

	if (collision.transform.tag == ("MedPack")){
		health += 5;
	}
}

>>>>>>> 51360c7428d2ac8c746147b892aa51f84987a6fc
function LvlUp(){
	lvl++;
	xp -= xpToLvl;
	xpToLvl = xpToLvl * 1.5;
<<<<<<< HEAD
=======
	maxHealth += 10;
	health += 10;
	dex += 1;
	speedBonus = dex * 0.2;
	
	playerMover.GetComponent(PlayerMove).speed += 0.2;
}

function Die(){
	Application.LoadLevel(1);
>>>>>>> 51360c7428d2ac8c746147b892aa51f84987a6fc
}