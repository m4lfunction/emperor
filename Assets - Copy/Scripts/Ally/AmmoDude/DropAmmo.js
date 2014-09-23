#pragma strict

var ammoBase1 : GameObject;
var dropPoint : Transform;
<<<<<<< HEAD
var nextDrop : float;
var delay : float = 30;

function Start () {

nextDrop = Time.time;

=======
var dropTimer : float = 30;

private var nextDrop : float;

function Start () {
	// make him drop ammo when spawns
	nextDrop = Time.time;
>>>>>>> 51360c7428d2ac8c746147b892aa51f84987a6fc
}

function Update () {

	if (Time.time >= nextDrop){
<<<<<<< HEAD
			nextDrop = Time.time + delay;
			var ammo = Instantiate(ammoBase1, dropPoint.position, transform.rotation);
	}

=======
			nextDrop = Time.time + dropTimer;
			DropAmmo1();
	}

}

function DropAmmo1(){
	var ammo = Instantiate(ammoBase1, dropPoint.position, transform.rotation);
>>>>>>> 51360c7428d2ac8c746147b892aa51f84987a6fc
}