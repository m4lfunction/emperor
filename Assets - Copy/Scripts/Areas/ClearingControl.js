#pragma strict

var riflemanBase : GameObject;
var riflemanSpawnPoint : Transform;
var riflemanIn : float = 300;
var riflemanTimer : float = 300;

function Start () {

riflemanIn = Time.time + riflemanTimer;

}

function Update () {

if(riflemanIn <= Time.time){
	var rifleman = Instantiate(riflemanBase, riflemanSpawnPoint.position, transform.rotation);
	riflemanIn = Time.time + riflemanTimer;
}

}