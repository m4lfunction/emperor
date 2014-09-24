#pragma strict

// some stuff needed by the script. DO NOT CHANGE!
var activated : boolean = false;
var timeToWave : float;
private var waveCounter : int = 1;
private var enemiesSpawned : int = 0;
//////////////////////////////////

var player : Transform; // Put Player GameObject in here.

var spawn1 : Transform; // Put Spawnpoint1 in here
var spawn2 : Transform;

var enemyBase1 : GameObject; //put enemey prefab1 in here
var enemyBase2 : GameObject;
var enemyBase3 : GameObject;
var enemyBase4 : GameObject;

var waveStrength : int = 3; //number of enemies in wave1
private var lastWaveStrength : float;

var multiplier : float = 1.2;

var delay1 : float = 1;//one second delay.
var delay2 : float = 90;
private var nextUsage1 : float;
private var nextUsage2 : float;

function Start () {
	nextUsage1 = Time.time + delay1;
	nextUsage2 = 0;
	enemiesSpawned = waveStrength;
}

function Update () {

	if(activated == true){
	
	if(waveCounter < 5){
		delay2 = 30;
	}
	else{if(waveCounter < 15){
		delay2 = 60;
		waveStrength = 30;
		waveStrength = 10;
	}else{if(waveCounter < 20){
		waveStrength = 15;
	}else{if(waveCounter < 20){
		delay2 = 90;
	}
	}
	}
	}

  		if (Time.time > nextUsage1){
  			nextUsage1 = Time.time + delay1;
  			// every second
  				    		
			if (waveStrength >= enemiesSpawned){
			
				if(waveCounter < 10 && waveCounter < 15){
					SpawnPill001(spawn1);
				}
				
				if(waveCounter > 3 && waveCounter < 15){
					SpawnPill003(spawn1);
				}
				
				if(waveCounter > 5 && waveCounter < 15){
					SpawnPill001(spawn2);
				}
				
				if(waveCounter >= 10 && waveCounter < 15){

					SpawnPill002(spawn1);
					
				}
				
				if(waveCounter >= 15){

					SpawnPill004(spawn1);
					SpawnPill004(spawn2);
					
				}

			}

		}


		if (Time.time > nextUsage2){
	
			nextUsage2 = Time.time + delay2;
			// every 90 seconds
		
			waveCounter++;
			
			lastWaveStrength = waveStrength;
			
			enemiesSpawned = 0;
			waveStrength = lastWaveStrength * multiplier;
	
		}

	}

	// Next wave in...
	timeToWave = nextUsage2 - Time.time;

}

function OnGUI(){

	GUI.Label(Rect (100, 10, 100, 250), "Wave "+waveCounter+" in "+timeToWave+" seconds.");
	
}

function SpawnPill001(location : Transform){
	var pill001 = Instantiate(enemyBase1, location.transform.position, transform.rotation);
	pill001.GetComponent(EnemyAI).player = player;
	pill001.GetComponent(PillAI).player = player;
	enemiesSpawned++;
}

function SpawnPill002(location : Transform){
	var pill002 = Instantiate(enemyBase2, location.transform.position, transform.rotation);
	pill002.GetComponent(EnemyAI).player = player;
	pill002.GetComponent(PillAI).player = player;
	enemiesSpawned++;
}

function SpawnPill003(location : Transform){
	var pill003 = Instantiate(enemyBase3, location.transform.position, transform.rotation);
	pill003.GetComponent(EnemyAI).player = player;
	pill003.GetComponent(PillAI).player = player;
	enemiesSpawned++;
}

function SpawnPill004(location : Transform){
	var pill004 = Instantiate(enemyBase4, location.transform.position, transform.rotation);
	pill004.GetComponent(EnemyAI).player = player;
	pill004.GetComponent(PillAI).player = player;
	enemiesSpawned++;
}