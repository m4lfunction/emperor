#pragma strict

var ammoBase1 : GameObject;
var dropPoint : Transform;
var nextDrop : float;
var delay : float = 30;
private var nextDrop : float;

function Start () {

nextDrop = Time.time;

var dropTimer : float = 30;

}

function Start () {
	// make him drop ammo when spawns
	nextDrop = Time.time;
}

function Update () {

	if (Time.time >= nextDrop){
			nextDrop = Time.time + delay;
			var ammo = Instantiate(ammoBase1, dropPoint.position, transform.rotation);
	}

			nextDrop = Time.time + dropTimer;
			DropAmmo1();
	}



function DropAmmo1(){
	var ammo = Instantiate(ammoBase1, dropPoint.position, transform.rotation);
}