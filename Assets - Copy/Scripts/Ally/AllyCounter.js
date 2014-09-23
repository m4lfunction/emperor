#pragma strict

var health : int = 25;

function Start () {

}

function Update () {
	if(health <= 0){
		Destroy(gameObject);
	}
}