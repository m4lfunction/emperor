#pragma strict

var player : GameObject;
var health = 10;
var particle : GameObject;
var corpse : GameObject;
var drop : GameObject;
var dropChance = 10.0;

var showHealth : boolean = false;

function Start(){
	player = GameObject.Find("Player");
}

function OnCollisionEnter (collision : Collision){

	if (collision.transform.tag == "PlayerWeapon"){
	// When hit by PlayerWeapon, do:	
		
		audio.Play();
		health -= 5 + player.GetComponent(PlayerCounter).lvl*2;
		showHealth = true;
		Invoke("UnshowHealth", 1.5f);
		
		if (health <= 0){
			
			Die();
			
			}
		}
		
		if(collision.transform.tag == "Bullet"){
			audio.Play();
			health -= 1 + player.GetComponent(PlayerCounter).lvl;
			showHealth = true;
			Invoke("UnshowHealth", 1.5f);
		if (health <= 0){
			
			Die();

		}	
	}

}

function OnGUI(){

	if(showHealth == true){
		GUI.Label(Rect (250, 250, 180, 20), "ENEMY HEALTH: "+health);
	}
}

function Die(){
	GameObject.Find("Player").GetComponent(PlayerCounter).xp++;
	Destroy(gameObject);			
	CheckForDrop();
	SpawnCorpse();
}

function UnshowHealth(){
	showHealth = false;
}

function SpawnCorpse(){
	var corpseClone = Instantiate(corpse, transform.position, transform.rotation);
}

function CheckForDrop(){
	var randomNumber = Random.Range(0.0, 100.0);
	
	if (randomNumber <= dropChance)
				{
				var dropClone = Instantiate(drop, transform.position, transform.rotation);
				var particleClone = Instantiate(particle, transform.position, transform.rotation);

				}
}