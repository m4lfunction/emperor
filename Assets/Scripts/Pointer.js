#pragma strict

var target : Transform;
var player : Transform;
var moveSpeed = 10.0;

function Start () {

player = GameObject.Find("PlayerMesh").transform;

}

function Update () {

if (Input.GetKey("n"))
{
	Destroy(gameObject);
}


var dist = Vector3.Distance(player.position, transform.position);

if (dist <= 7.5) {
target = GameObject.Find("target").transform;
transform.LookAt(target);
transform.position += transform.forward*moveSpeed*Time.deltaTime;
    
}
else {

transform.LookAt(player);
transform.position += transform.forward*moveSpeed*Time.deltaTime;

}

}