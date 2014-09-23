#pragma strict

var health = 10;
var particle : GameObject;
var corpse : GameObject;
var drop : GameObject;

var dropChance = 10.0;

function OnCollisionEnter (collision : Collision) {
	
	
	if (collision.transform.tag == "PlayerWeapon");
		{
	print(collision.transform.tag);
					print (health);
//		health -=1;
		
		if (health <= 0)
			{
			Destroy(gameObject);
			
			var randomNumber = Random.Range(0.0, 100.0);
			
			//drop MedPack			
			if (randomNumber <= dropChance)
				{
				var dropClone = Instantiate(drop, transform.position, transform.rotation);
				var particleClone = Instantiate(particle, transform.position, transform.rotation);

				}
			
			
			// Spawn corpse
			var corpseClone = Instantiate(corpse, transform.position, transform.rotation);
			}
		
		}
}