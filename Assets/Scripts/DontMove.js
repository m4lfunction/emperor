﻿#pragma strict

var target : Transform;
var fixPoint : Transform;

var activated : boolean = true;

private var thisTransform : Transform;



function Start () {
	thisTransform = transform;
}

function Update () {

	thisTransform.position = Vector3( target.position.x, target.position.y, target.position.z);
	
	//var rotation = Quaternion.LookRotation(Vector3.right , Vector3.forward);
	//transform.rotation = rotation;
	

}

function LateUpdate () {
<<<<<<< HEAD
	if (activated == true){
		transform.LookAt(fixPoint);
	}
=======
	//if (activated == true){
		transform.LookAt(fixPoint);
	//}
>>>>>>> 51360c7428d2ac8c746147b892aa51f84987a6fc
}