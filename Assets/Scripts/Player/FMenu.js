#pragma strict

var show1 : boolean = true;
var show1o1 : boolean = false;
var show1o2 : boolean = false;
var show1o3 : boolean = false;

var clearing : GameObject;
var stoneHouse : GameObject;

function Update () {
	if (Input.GetKeyDown(KeyCode.F1)){

		if (show1 == true){
			show1 = false;
			show1o1 = true;
			show1o2 = true;
			show1o3 = true;
		}else{
			if(show1o1 == true){
				transform.position = clearing.transform.position;
				
				GameObject.Find("Camera").GetComponent(RotateToMouse).cameraDif = GameObject.Find("Camera").camera.transform.position.y - GameObject.Find("Camera").GetComponent(RotateToMouse).fpc.transform.position.y;
				
			}
		}
	
	}
	
	if (Input.GetKeyDown(KeyCode.F2)){
		if (show1o2 == true){
			transform.position = stoneHouse.transform.position;
				
			GameObject.Find("Camera").GetComponent(RotateToMouse).cameraDif = GameObject.Find("Camera").camera.transform.position.y - GameObject.Find("Camera").GetComponent(RotateToMouse).fpc.transform.position.y;
		}
	}	
	
	if (Input.GetKeyDown(KeyCode.F3)){
		if (show1o3 == true){
			show1 = true;
			show1o1 = false;
			show1o2 = false;
			show1o3 = false;
		}
	}
}

function OnGUI(){
	if (show1 == true){
		GUI.Label(Rect (10, 100, 400, 80), "F1 - Quick Travel");
	}
	
	if (show1o1 == true){
		GUI.Label(Rect (10, 100, 400, 80), "F1 - Clearing\nF2 - Stone House\nF3 - Close");
	}
}