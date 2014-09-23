#pragma strict

var target : Transform;
var height : Transform;
var smoothTime = 0.3;
private var thisTransform : Transform;
private var velocity : Vector3;

function Start () {
	thisTransform = transform;
}

function Update () {

	if(Input.GetKeyDown(KeyCode.PageUp) && height.position.y <= 50){
		height.position.y += 5;
		GameObject.Find("Camera").GetComponent(RotateToMouse).cameraDif = GameObject.Find("Camera").camera.transform.position.y - GameObject.Find("Camera").GetComponent(RotateToMouse).fpc.transform.position.y;
	}
	
	if(Input.GetKeyDown(KeyCode.PageDown) && height.position.y >= 15){
		height.position.y -= 5;
		GameObject.Find("Camera").GetComponent(RotateToMouse).cameraDif = GameObject.Find("Camera").camera.transform.position.y - GameObject.Find("Camera").GetComponent(RotateToMouse).fpc.transform.position.y;
	}
	
	if(Input.GetKeyDown(KeyCode.Backspace)){
		height.position.y = 25;
		GameObject.Find("Camera").GetComponent(RotateToMouse).cameraDif = GameObject.Find("Camera").camera.transform.position.y - GameObject.Find("Camera").GetComponent(RotateToMouse).fpc.transform.position.y;
	}

	thisTransform.position.x = Mathf.SmoothDamp( thisTransform.position.x, target.position.x, velocity.x, smoothTime);
	thisTransform.position.z = Mathf.SmoothDamp( thisTransform.position.z, target.position.z, velocity.z, smoothTime);
	thisTransform.position.y = Mathf.SmoothDamp( thisTransform.position.y, height.position.y, velocity.y, smoothTime);

}