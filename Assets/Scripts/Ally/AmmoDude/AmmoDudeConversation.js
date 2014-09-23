#pragma strict

// Ammo Dude conversation script

var activated : boolean = false;

function OnTriggerEnter ( other : Collider ) {
	if(other.gameObject.tag == "Player"){
		activated = true;
	}
}

function OntriggerExit ( other : Collider ) {

}

function OnGUI(){

	if(activated == true){
		GUI.Box(Rect (250, 800, 300, 25), "AMMO DUDE: Yo, grab some rounds!");
		Invoke("EndConversation", 3.5f);
	}
}

function EndConversation(){
	activated = false;
}