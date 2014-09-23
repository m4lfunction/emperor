#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter( other : Collider) {
        if(other.gameObject.tag == "Ally") {
                other.GetComponent(AmmoDudeConversation).activated = true;
        }
}