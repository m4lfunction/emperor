#pragma strict

function Start () {

}

function Update () {

}

function OnGUI () {

	GUI.Box (Rect (10,10,150,120), "Main Menu");

	if (GUI.Button (Rect (20,40,130,20), "start new game")) {
		PlayerPrefs.SetInt("health", 25);
		PlayerPrefs.SetInt("xp", 0);
		PlayerPrefs.SetInt("xpToLvl", 25);
		PlayerPrefs.SetInt("lvl", 0);
		PlayerPrefs.SetInt("tutorial", 0);
		PlayerPrefs.SetInt("spawn", 0);
		PlayerPrefs.SetInt("ammo1", 100);
		PlayerPrefs.SetInt("dex", 5);
		PlayerPrefs.Save();
		Application.LoadLevel (3);
	}

	if (GUI.Button (Rect (20,70,130,20), "continue")) {
		Application.LoadLevel (3);
	}

	if (GUI.Button (Rect (20,100,130,20), "quit game")) {
		Application.Quit();
	}
}
