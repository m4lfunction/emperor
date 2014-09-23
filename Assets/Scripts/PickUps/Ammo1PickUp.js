#pragma strict

var ammoAmount : int = 50;

function OnTriggerEnter(other:Collider) {

	if (other.gameObject.tag == "Player"){
		other.gameObject.GetComponent(PlayerCounter).ammo1 += ammoAmount;
		Destroy(gameObject);
	}

}