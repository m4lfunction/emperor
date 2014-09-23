#pragma strict

function Update () {

if(Input.GetButtonDown("Fire1"))
{
	
	transform.Rotate(new Vector3(90,0,0));

}

if(Input.GetButtonDown("Fire2"))
{
	transform.Rotate(new Vector3(0,-90,0));

}

if(Input.GetButtonUp("Fire1"))
{
	transform.Rotate(new Vector3(-90,0,0));

}

if(Input.GetButtonUp("Fire2"))
{
	transform.Rotate(new Vector3(0,90,0));

}

}

function OnTriggerEnter (other : Collider) {
	if (other.gameObject.tag == "enemy");
		{

//		print(other.gameObject.tag);
					
//			Destroy(other.gameObject);
		
		}
}