#pragma strict

var showMenu = false;
var player : GameObject;

function Update() {

if (Input.GetKeyDown(KeyCode.Escape)){
	if (showMenu == true){
		showMenu = false;
		Time.timeScale = 1.0;
	}
	else{
		showMenu = true;
		Time.timeScale = 0.0;
	}
}

}

function OnGUI () {

if (showMenu == true){
	GUI.Box (Rect (10,10,120,120), "Main Menu");

	if (GUI.Button (Rect (20,40,90,20), "Main Menu")) {
		Time.timeScale = 1.0;
		Application.LoadLevel (0);
	}

	if (GUI.Button (Rect (20,70,90,20), "Save Game")) {
		//print(player.GetComponent(PlayerHealth).health);
		PlayerPrefs.SetInt("health", player.GetComponent(PlayerCounter).health);
		PlayerPrefs.SetInt("xp", player.GetComponent(PlayerCounter).xp);
		PlayerPrefs.SetInt("xpToLvl", player.GetComponent(PlayerCounter).xpToLvl);
		PlayerPrefs.SetInt("lvl", player.GetComponent(PlayerCounter).lvl);
		PlayerPrefs.SetInt("ammo1", player.GetComponent(PlayerCounter).ammo1);
		PlayerPrefs.SetInt("dex", player.GetComponent(PlayerCounter).dex);
		PlayerPrefs.Save();
	}
	
	if (GUI.Button (Rect (20,100,90,20), "Quit Game")) {
		Application.Quit();
	}

}

}
