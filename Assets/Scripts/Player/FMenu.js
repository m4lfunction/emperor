#pragma strict

var show1 : boolean = true;
var show1o1 : boolean = false;
var show1o2 : boolean = false;
var show1o3 : boolean = false;
<<<<<<< HEAD

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
=======
var show1o4 : boolean = false;
var show2 : boolean = true;
var show2o1 : boolean = false;

var clearing : GameObject;
var stoneHouse : GameObject;
var theForest : GameObject;

function Update () {
	if (Input.GetKeyDown(KeyCode.F1)){
		if(show1 == true){
			show1 = false;
			show2 = false;
			show1o1 = true;
			show1o2 = true;
			show1o3 = true;
			show1o4 = true;
		}
		else{
			if(show1o1 == true){
					transform.position = clearing.transform.position;
				
					GameObject.Find("Camera").GetComponent(RotateToMouse).cameraDif = GameObject.Find("Camera").camera.transform.position.y - GameObject.Find("Camera").GetComponent(RotateToMouse).fpc.transform.position.y;
			}
		}
		
		
		
			if(show2o1 == true){
				show2o1 = false;
				show1 = true;
				show2 = true;
			}
		
	}
	
	if (Input.GetKeyDown(KeyCode.F2)){
		
			if(show2 == true){
				show2o1 = true;
				show1 = false;
				show2 = false;
			
			
		}else{
			if (show1o2 == true){
			transform.position = stoneHouse.transform.position;
				
			GameObject.Find("Camera").GetComponent(RotateToMouse).cameraDif = GameObject.Find("Camera").camera.transform.position.y - GameObject.Find("Camera").GetComponent(RotateToMouse).fpc.transform.position.y;
		}}
		
	}
	
	if (Input.GetKeyDown(KeyCode.F3)){
		if (show1o3 == true){
			transform.position = theForest.transform.position;
				
			GameObject.Find("Camera").GetComponent(RotateToMouse).cameraDif = GameObject.Find("Camera").camera.transform.position.y - GameObject.Find("Camera").GetComponent(RotateToMouse).fpc.transform.position.y;
		}
	}
	
	if (Input.GetKeyDown(KeyCode.F4)){
		if (show1o4 == true){
>>>>>>> 51360c7428d2ac8c746147b892aa51f84987a6fc
			show1 = true;
			show1o1 = false;
			show1o2 = false;
			show1o3 = false;
<<<<<<< HEAD
=======
			show1o4 = false;
			show2 = true;
>>>>>>> 51360c7428d2ac8c746147b892aa51f84987a6fc
		}
	}
}

function OnGUI(){
	if (show1 == true){
<<<<<<< HEAD
		GUI.Label(Rect (10, 100, 400, 80), "F1 - Quick Travel");
	}
	
	if (show1o1 == true){
		GUI.Label(Rect (10, 100, 400, 80), "F1 - Clearing\nF2 - Stone House\nF3 - Close");
	}
=======
		GUI.Label(Rect (10, 150, 400, 80), "F1 - Quick Travel");
	}
	
	if (show1o1 == true){
		GUI.Label(Rect (10, 150, 400, 80), "F1 - Clearing");
	}
	
	if (show1o2 == true){
		GUI.Label(Rect (10, 165, 400, 80), "F2 - Stone House");
	}
	
	if (show1o3 == true){
		GUI.Label(Rect (10, 180, 400, 80), "F3 - the Forest");
	}
	
	if (show1o4 == true){
		GUI.Label(Rect (10, 195, 400, 80), "F4 - Close");
	}

	if (show2 == true){
		GUI.Label(Rect (10, 165, 400, 80), "F2 - Stats");
	}
	
	if (show2o1 == true){
		GUI.Label(Rect (10, 150, 400, 80), "F1 - Close\nSTATS\n\nLevel: "+gameObject.GetComponent(PlayerCounter).lvl+"\nDexterity: "+gameObject.GetComponent(PlayerCounter).dex);
	}

>>>>>>> 51360c7428d2ac8c746147b892aa51f84987a6fc
}