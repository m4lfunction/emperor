#pragma strict

var ammoDudeBase : GameObject;
var ammoDudeSpawnPoint : Transform;
var ammoDudeSpawned : boolean = false;
var ammoDudeIn : float = 30;
var nextUpgrade : float;
var upgradeActive : boolean = true;


function Update () {

	if(gameObject.GetComponent(Capture).captured == true && ammoDudeSpawned == false){
		if(upgradeActive == true){
			nextUpgrade = Time.time + ammoDudeIn;
			upgradeActive = false;
		}
		if(Time.time > nextUpgrade){
			var ammoDude = Instantiate(ammoDudeBase, ammoDudeSpawnPoint.position, ammoDudeSpawnPoint.rotation);
			ammoDudeSpawned = true;
		}
	}

}