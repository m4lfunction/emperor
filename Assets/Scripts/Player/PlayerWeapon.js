#pragma strict





var minDamage : int = 1;
var maxDamage : int = 2;
private var damage : int;


var showHealth : boolean = false;
var enemy : GameObject;
var player : GameObject;

function Start(){
	//maxDamage will never be maxDamage unless minDamage = maxDamage
	maxDamage++;
}

function OnCollisionEnter (other : Collision)
{
print(other.transform.tag);

	if (other.transform.tag == ("Enemy")){
		showHealth = true;
		Invoke("UnshowHealth", 1.5f);
		damage = Random.Range(minDamage, maxDamage);
		damage += player.GetComponent(PlayerCounter).lvl;
		print("Player Damage: "+damage);
		other.gameObject.GetComponent(EnemyCounter).health -= damage;
		enemy = other.gameObject;
	}

}


function OnGUI(){

	if(showHealth == true){
		GUI.Label(Rect (250, 250, 180, 20), "ENEMY HEALTH: "+enemy.GetComponent(EnemyCounter).health);
	}
}

function UnshowHealth(){
	showHealth = false;

}