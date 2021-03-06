﻿#pragma strict

var ammoDudeBase : GameObject;
var ammoDudeSpawnPoint : Transform;
var ammoDudeSpawned : boolean = false;
var ammoDudeIn : float = 30;
var riflemanBase : GameObject;
var riflemanIn : float = 30;
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
			nextUpgrade = Time.time + riflemanIn;
			upgradeActive = true;
		}
	}

	if(gameObject.GetComponent(Capture).captured == true && ammoDudeSpawned == true){
		if(Time.time > nextUpgrade){
			var rifleman = Instantiate(riflemanBase, ammoDudeSpawnPoint.position, ammoDudeSpawnPoint.rotation);
			nextUpgrade = Time.time + riflemanIn;
		}
	}

}