#pragma strict

var radius : float = 5.0;    //provides a radius at which the explosive will effect rigidbodies
var power : float = 10.0;    //provides explosive power
var explosiveLift : float = 1.0; //determines how the explosion reacts. A higher value means rigidbodies will fly upward
var explosiveDelay : float = 5.0; //adds a delay in seconds to our explosive object
var explosionPrefab : Transform;
var bulletSpawn : GameObject;
 
function Update () {

if(Input.GetKeyDown(KeyCode.G)){ 
Fire();
}

}
 
function Fire () {
 
  var spawn : Vector3 = bulletSpawn.transform.position;
  Instantiate(explosionPrefab, spawn, transform.rotation);
  explosionPrefab.rigidbody.AddForce(transform.forward*1000);
  var grenadeOrigin : Vector3 = transform.position;
  yield WaitForSeconds(explosiveDelay);
  var colliders : Collider[] = Physics.OverlapSphere (grenadeOrigin, radius); //this is saying that if any collider within the radius of our object will feel the explosion
 
for(var hit : Collider in colliders){  //for loop that says if we hit any colliders, then do the following below
   if (hit.rigidbody){
      hit.rigidbody.AddExplosionForce(power, grenadeOrigin, radius, explosiveLift); //if we hit any rigidbodies then add force based off our power, the position of the explosion object
              }
         }
}