#pragma strict

function Start () {

}

function Update () {
transform.eulerAngles=new Vector3(0,transform.eulerAngles.y,0);
}