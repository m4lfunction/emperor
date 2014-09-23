#pragma strict

function OnCollisionEnter (collision : Collision)
{

	if (collision.transform.tag == ("Player"))
		{
		Destroy(gameObject);
		}
}