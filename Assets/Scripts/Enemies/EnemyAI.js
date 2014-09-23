#pragma strict

// Enemy stats

var moveSpeed :float = 4;
var aggroRange : float =10;
var actionDist :float = 10;
var maxRange : float = 5;

var player : Transform;

var allyNear = false;
private var thisTransform : Transform;

function Start(){

//player = GameObject.Find("PlayerMesh").transform;

}

function Update (){

    transform.LookAt(player);

 	if(allyNear == false){
   
		if(Vector3.Distance(transform.position,player.position) <= aggroRange 
			&& Vector3.Distance(transform.position,player.position) >= maxRange){
		
		
 				transform.position += transform.forward*moveSpeed*Time.deltaTime;
  
				if(Vector3.Distance(transform.position,player.position) <= actionDist){
    		        //Here Call any function U want Like Shoot at here or something
		   		}
	
		
		}else{
			WaitSome();
		}

	}else{
		WaitSome();
	}

}

function WaitSome(){

	yield WaitForSeconds(Random.Range(1, 3));
	allyNear = false;
}

function OnTriggerEnter(other:Collider) {

	if (other.gameObject.tag == "enemy"){
		allyNear = true;
	}
	
}