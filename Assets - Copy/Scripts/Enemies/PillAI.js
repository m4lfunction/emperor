#pragma strict

var agent: NavMeshAgent;

// Enemy stats

private var moveSpeed :float;
var aggroRange : float =10;
var actionDist :float = 10;
var maxRange : float = 5;

var player : Transform;
var weapon : GameObject;

var allyNear = false;
private var thisTransform : Transform;

function Start(){

	moveSpeed = gameObject.GetComponent(EnemyCounter).moveSpeed;
	agent = GetComponent.<NavMeshAgent>();
	
}

function Update (){

    //transform.LookAt(player);

 	//if(allyNear == false){
   
		if(Vector3.Distance(transform.position,player.position) <= aggroRange && Vector3.Distance(transform.position,player.position) >= maxRange){
	//		transform.position += transform.forward*moveSpeed*Time.deltaTime;
			agent.SetDestination(player.position);
		}else{
	//		WaitSome();
	//		allyNear = false;
			agent.SetDestination(transform.position);
		}
	//}else{
	//	WaitSome();
	//	allyNear = false;
	//}
	
	
	
	

	if(Vector3.Distance(transform.position,player.position) <= actionDist){
    	//Here Call any function U want Like Shoot at here or something
    	attack();
	}
}

function WaitSome(){

	yield WaitForSeconds(Random.Range(1, 3));
}

function OnTriggerEnter(other:Collider) {

	if (other.gameObject.tag == "enemy"){
		allyNear = true;
	}
	
}

function attack(){
	weapon.transform.Rotate (Vector3.right * Time.deltaTime * 250);
}