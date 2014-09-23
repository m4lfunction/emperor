#pragma strict

function Update () {

if (Input.GetButtonDown("Jump"))
{
	var newTarget = GameObject.FindWithTag("playerCharacter").transform;
	GetComponent(Follow).target = newTarget;
}

}