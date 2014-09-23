#pragma strict

var drawTutorial1 : boolean = false;
var drawTutorial2 : boolean = false;
var drawTutorial3 : boolean = false;

function Start () {

	if (PlayerPrefs.GetInt("tutorial") == 0){

		yield WaitForSeconds(3);
		drawTutorial1 = true;
		yield WaitForSeconds(6);
		drawTutorial1 = false;
		drawTutorial2 = true;
		yield WaitForSeconds(6);
		drawTutorial2 = false;
		drawTutorial3 = true;
		yield WaitForSeconds(6);
		drawTutorial3 = false;
		PlayerPrefs.SetInt("tutorial", 1);

	}
}

function OnGUI () {

	if (drawTutorial1 == true){
<<<<<<< HEAD
		GUI.Box (Rect (100,100,100,40), "WASD to move");
	}
	if (drawTutorial2 == true){
		GUI.Box (Rect (100,100,130,80), "left click to attack\nright click to shoot");
	}
	if (drawTutorial3 == true){
		GUI.Box (Rect (100,100,180,80), "PageUp, PageDown to zoom");
=======
		GUI.Box (Rect (300,300,100,40), "WASD to move");
	}
	if (drawTutorial2 == true){
		GUI.Box (Rect (300,300,130,80), "left click to attack\nright click to shoot");
	}
	if (drawTutorial3 == true){
		GUI.Box (Rect (300,300,180,80), "PageUp, PageDown to zoom");
>>>>>>> 51360c7428d2ac8c746147b892aa51f84987a6fc
	}

}