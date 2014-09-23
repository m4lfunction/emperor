#pragma strict

var pointerBase : GameObject;

function Update () {

if (Input.GetKey("n"))
{
if (GameObject.Find("pointer(Clone)") == null){

	var pointer = Instantiate(pointerBase, transform.position, transform.rotation);

}
}

}