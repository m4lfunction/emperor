#pragma strict

var minDamage : int = 1;
var maxDamage : int = 2;
private var damage : int;

function Start(){
	//maxDamage will never be maxDamage unless minDamage = maxDamage
	maxDamage++;
}

function OnCollisionEnter (other : Collision)
{

	if (other.transform.tag == ("Player")){
		damage = Random.Range(minDamage, maxDamage);
		other.gameObject.GetComponent(PlayerCounter).health -= damage;
	}

	if (other.transform.tag == ("Ally")){
		damage = Random.Range(minDamage, maxDamage);
		other.gameObject.GetComponent(AllyCounter).health -= damage;
	}

}