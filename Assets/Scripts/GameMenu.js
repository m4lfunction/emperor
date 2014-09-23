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
<<<<<<< HEAD
=======
		Time.timeScale = 1.0;
>>>>>>> 51360c7428d2ac8c746147b892aa51f84987a6fc
		Application.LoadLevel (0);
	}

	if (GUI.Button (Rect (20,70,90,20), "Save Game")) {
<<<<<<< HEAD
		//print(player.GetComponent(PlayerHealth).health);
=======
>>>>>>> 51360c7428d2ac8c746147b892aa51f84987a6fc
		PlayerPrefs.SetInt("health", player.GetComponent(PlayerCounter).health);
		PlayerPrefs.SetInt("xp", player.GetComponent(PlayerCounter).xp);
		PlayerPrefs.SetInt("xpToLvl", player.GetComponent(PlayerCounter).xpToLvl);
		PlayerPrefs.SetInt("lvl", player.GetComponent(PlayerCounter).lvl);
<<<<<<< HEAD
=======
		PlayerPrefs.SetInt("ammo1", player.GetComponent(PlayerCounter).ammo1);
		PlayerPrefs.SetInt("dex", player.GetComponent(PlayerCounter).dex);
>>>>>>> 51360c7428d2ac8c746147b892aa51f84987a6fc
		PlayerPrefs.Save();
	}
	
	if (GUI.Button (Rect (20,100,90,20), "Quit Game")) {
		Application.Quit();
	}

}

}
