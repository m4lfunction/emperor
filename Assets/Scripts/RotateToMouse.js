#pragma strict
 
//attach this script to your camera and drag your character GameObject in the fpc slot in the inspector
 
 
private var worldPos : Vector3;
private var mouseX : int;
private var mouseY : int;
var cameraDif : float = 25;
var fpc : GameObject;
 
function Start () {
 
    //determines how far down the ScreenToWorldPoint is from the camera position
    //it's calculated [height of camera] - [height of pivot point of character]
    //this is to ensure the character only rotates (via LookAt) along rotation.x and doesn't look up or down
	cameraDif = camera.transform.position.y - fpc.transform.position.y;    
 
 
}
 
function Update () {
  	
    mouseX = Input.mousePosition.x;
    mouseY = Input.mousePosition.y;
 
 
    //this takes your current camera and defines the world position where your mouse cursor is at the height of your character -->translates your onscreen position of mouse into world coordinates
    worldPos = camera.ScreenToWorldPoint(Vector3(mouseX, mouseY, cameraDif));
 
    fpc.transform.LookAt(worldPos);
 
}