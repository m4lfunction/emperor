#pragma strict

// Ally AI Script

var conversationActive : boolean = false;

function Start () {

}

function Update () {

}

function OnGUI(){

	// Start conversation

	if(conversationActive == true){
		GUI.Box(Rect (250, 800, 300, 25), "AMMO DUDE: I can provide you with some ammo.");
		Invoke("DeactivateConversation", 3.5f);
	}
}

function DeactivateConversation(){
	conversationActive = false;
}