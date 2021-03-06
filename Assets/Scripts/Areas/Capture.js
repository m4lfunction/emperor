﻿#pragma strict

var activated : boolean = false;
var timeToCapture : float = 60;
var timeToAmmo : float = 30;

var timeLeft : float = 60;

var captured : boolean = false;
var ammoDude : boolean = false;

private var capturedAt : float;
private var ammoAt : float;





function Start () {
	timeLeft = timeToCapture;
}

function Update () {
	if(activated == true){

		if (Time.time < capturedAt){
	 		timeToCapture = capturedAt - Time.time;
		}
		// capture if timer reaches 0.1 (needs to be above 0)
		if(timeToCapture < 0.1){
			captured = true;
			ammoAt = Time.time + timeLeft;
		}
	
	}

	if(captured == true){
		timeToAmmo = capturedAt - Time.time;
	}
	
	if (timeToAmmo <= 0){
		ammoDude = true;
	}
	
	if (ammoDude == true){
	
	}

}

function OnTriggerEnter(other:Collider) {

	if (other.gameObject.tag == "Player"){
		activated = true;
		capturedAt = Time.time + timeLeft;
	}

}

function OnTriggerExit(other:Collider) {

	if (other.gameObject.tag == "Player"){
		activated = false;
		timeLeft = timeToCapture;
	}

}

function OnGUI(){
	if(activated == true){
	
		if(captured == false){
			GUI.Label(Rect (200, 10, 200, 20), "Captured in: "+timeToCapture);
		}else{
			GUI.Label(Rect (200, 10, 200, 20), "Captured!");

		}
	}
}