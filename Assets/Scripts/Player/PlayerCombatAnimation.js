#pragma strict

var player : GameObject;
var bulletBase : GameObject;
var force : float = 1000.0;
var bulletSpawn : GameObject;
var ammo : int;


<<<<<<< HEAD
private var nextUsage : float;
private var delay : float = 0.5;
=======
private var weaponResetIn : float;
private var weaponResetTimer : float = 0.5;
private var continuousFiring : boolean = false;
var shootTimer : float = 0.5;
private var nextBulletIn : float;
>>>>>>> 51360c7428d2ac8c746147b892aa51f84987a6fc

function Start(){
for (var state : AnimationState in animation) {
    state.speed = 2.5;
    
<<<<<<< HEAD
    nextUsage = Time.time + delay;
=======
    weaponResetIn = Time.time + weaponResetTimer;
>>>>>>> 51360c7428d2ac8c746147b892aa51f84987a6fc
}
}

function Update () {

<<<<<<< HEAD
if(Input.GetButtonDown("Fire1"))
{
	animation.Play();
	GameObject.FindWithTag("PlayerWeapon").GetComponent(DontMove).activated = false;
	
	nextUsage = Time.time + delay;
	
	
}

if(Input.GetButtonDown("Fire2")){
if( player.GetComponent(PlayerCounter).ammo1 >= 1){
	var spawn : Vector3 = bulletSpawn.transform.position;
		var bullet = Instantiate(bulletBase, spawn, transform.rotation);
	bullet.rigidbody.AddForce(transform.forward*force);
	player.GetComponent(PlayerCounter).ammo1--;
}
}

if (Time.time > nextUsage)
		GameObject.FindWithTag("PlayerWeapon").GetComponent(DontMove).activated = true;
}

if(Input.GetButtonUp("Fire1"))
{

}

if(Input.GetButtonUp("Fire2"))
{

=======
	if(Input.GetButtonDown("Fire1")){
		animation.Play();
		GameObject.FindWithTag("PlayerWeapon").GetComponent(DontMove).activated = false;
		weaponResetIn = Time.time + weaponResetTimer;
	}

	if(Input.GetButtonDown("Fire2")){
		if( player.GetComponent(PlayerCounter).ammo1 >= 1){
			FireBullet();
			nextBulletIn = Time.time + shootTimer;
			continuousFiring = true;
		}
	}

	if(Input.GetButtonUp("Fire2")){
		continuousFiring = false;
	}

	if (Time.time > weaponResetIn){
		GameObject.FindWithTag("PlayerWeapon").GetComponent(DontMove).activated = true;
	}

	if(continuousFiring == true && player.GetComponent(PlayerCounter).ammo1 >= 1){
		if(Time.time > nextBulletIn){
			FireBullet();
			nextBulletIn = Time.time + shootTimer;
		}
	}
}

function FireBullet(){
	var spawn : Vector3 = bulletSpawn.transform.position;
	var bullet = Instantiate(bulletBase, spawn, transform.rotation);
	bullet.rigidbody.AddForce(transform.forward*force);
	player.GetComponent(PlayerCounter).ammo1--;
>>>>>>> 51360c7428d2ac8c746147b892aa51f84987a6fc
}