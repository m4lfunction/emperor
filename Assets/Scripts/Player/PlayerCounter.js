#pragma strict

var playerMover : GameObject;

var xp : int;
var xpToLvl : int = 25;
var health : int;
var maxHealth : int;
var ammo1 : int = 100;

var lvl : int = 1;

var dex : int;
private var speedBonus : float;

function Start(){
	// load the player
	health = (PlayerPrefs.GetInt("health"));
	xp = (PlayerPrefs.GetInt("xp"));
	xpToLvl = (PlayerPrefs.GetInt("xpToLvl"));
	lvl = (PlayerPrefs.GetInt("lvl"));
	health = (PlayerPrefs.GetInt("health"));
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
	
	if(xp >= xpToLvl){
		LvlUp();
	}

}

function OnGUI(){
	GUI.Box(Rect(5,5,95,70),"");
	GUI.Label(Rect (10, 10, 100, 20), "HP: "+health+" / "+maxHealth);
	GUI.Label(Rect (10, 25, 100, 20), "EXP: "+xp+" / "+xpToLvl);
	GUI.Label(Rect (10, 40, 100, 20), "LVL: "+lvl);
	GUI.Label(Rect (10, 55, 100, 20), "AMMO: "+ammo1);

}

function OnCollisionEnter (collision : Collision)
{

	// handle the health stuff

	if (collision.transform.tag == ("EnemyWeapon")){
		health -= 1;
	}

	if (collision.transform.tag == ("MedPack")){
		health += 5;
	}
}

function LvlUp(){
	lvl++;
	xp -= xpToLvl;
	xpToLvl = xpToLvl * 1.5;
	maxHealth += 10;
	health += 10;
	dex += 1;
	speedBonus = dex * 0.2;
	
	playerMover.GetComponent(PlayerMove).speed += 0.2;
}

function Die(){
	Application.LoadLevel(1);
}