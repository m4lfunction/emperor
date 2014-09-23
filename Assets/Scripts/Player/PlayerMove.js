#pragma strict

var speed = 5.0;

function Update () {

var xMove = Input.GetAxis("Horizontal") * Time.deltaTime * speed;
var zMove = Input.GetAxis("Vertical") * Time.deltaTime * speed;

transform.Translate(xMove,0,zMove);
}