#pragma strict

var waveControl : GameObject;

function Start () {

}

function Update () {

}

function OnTriggerEnter(other:Collider) {

	if (other.gameObject.tag == "Player"){
		waveControl.GetComponent(WaveControl).activated = true;
	}

}