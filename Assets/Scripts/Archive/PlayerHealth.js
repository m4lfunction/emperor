#pragma strict

var health = 10;
var healthString : String;
var player : GameObject;

function Start(){
	health = (PlayerPrefs.GetInt("health"));

}

function Update(){

	if (health <= 0){
				Application.LoadLevel(1);
	}
}

function OnCollisionEnter (collision : Collision)
{

	if (collision.transform.tag == ("EnemyWeapon"))
		{
		health -= 1;

		
		}

	if (collision.transform.tag == ("MedPack"))
		{
		health += 5;
		
		}

}

function OnTriggerEnter(other:Collider) {

if (other.gameObject.tag == "Radiation")
	{
	health = 0;
	}
	
}