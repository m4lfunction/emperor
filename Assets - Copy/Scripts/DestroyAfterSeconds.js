#pragma strict

var seconds : float = 10.0;

function Start () {

	yield WaitForSeconds(seconds);
	Destroy(gameObject);

}