#pragma strict

var newObject : Transform;

function Update () {

if(Input.GetButtonDown("Fire1"))
{
	Instantiate(newObject, transform.position, transform.rotation);
	Debug.Log("newObject created");
}
}