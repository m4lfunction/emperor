#pragma strict

var agent: NavMeshAgent;
var actionDist : float = 7;

var bulletBase : GameObject;
var force : float = 1000.0;
var bulletSpawn : GameObject;

var delay : float = 0.3;
var nextBullet : float = 1;

function Start () {

	agent = GetComponent.<NavMeshAgent>();

}

function Update () {
	
	if(Vector3.Distance(transform.position,FindClosestEnemy().transform.position) >= actionDist){
		agent.SetDestination(FindClosestEnemy().transform.position);
	}else{
		if (Time.time >= nextBullet){
			agent.SetDestination(transform.position);
			transform.LookAt(FindClosestEnemy().transform);
			FireBullet();
			nextBullet = Time.time + delay;
		}
	}
}

function FireBullet(){
	var spawn : Vector3 = bulletSpawn.transform.position;
	var bullet = Instantiate(bulletBase, spawn, transform.rotation);
	bullet.rigidbody.AddForce(transform.forward*force);
}

function FindClosestEnemy () : GameObject {
	// Find all game objects with tag Enemy
	var gos : GameObject[];
	gos = GameObject.FindGameObjectsWithTag("Enemy"); 
	var closest : GameObject; 
	var distance = Mathf.Infinity; 
	var position = transform.position;
	// Iterate through them and find the closest one
	for (var go : GameObject in gos)  { 
		var diff = (go.transform.position - position);
		var curDistance = diff.sqrMagnitude; 
		if (curDistance < distance) { 
			closest = go; 
			distance = curDistance; 
		} 
	} 
	return closest;	
}