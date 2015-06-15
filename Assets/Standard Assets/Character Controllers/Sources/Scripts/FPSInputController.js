private var motor : CharacterMotor;
var camDirection : Transform;

// Use this for initialization
function Awake () {
	motor = GetComponent(CharacterMotor);
}

// Update is called once per frame
function Update () {
	// Get the input vector from keyboard or analog stick
    var directionVector = Vector3(Input.GetAxis("Horizontal"), 0, Input.GetAxis("Vertical"));
	if (directionVector != Vector3.zero) {
		// Get the length of the directon vector and then normalize it
		// Dividing by the length is cheaper than normalizing when we already have the length anyway
		var directionLength = directionVector.magnitude;
	    directionVector = directionVector / directionLength;
	    if (directionVector.sqrMagnitude > 1)
	        directionVector.Normalize();
		
		// Make sure the length is no bigger than 1
		directionLength = Mathf.Min(1, directionLength);
		
		// Make the input vector more sensitive towards the extremes and less sensitive in the middle
		// This makes it easier to control slow speeds when using analog sticks
		directionLength = directionLength * directionLength;
		
		// Multiply the normalized direction vector by the modified length
		directionVector = directionVector * directionLength;
	}
	
    // Apply the direction to the CharacterMotor
    var theForwardDirection = camDirection.TransformDirection (Vector3.forward);
    theForwardDirection.y = 0;
    theForwardDirection.Normalize ();
    motor.inputMoveDirection = camDirection.rotation * directionVector;
	motor.inputJump = Input.GetButton("Jump");
}

// Require a character controller to be attached to the same game object
@script RequireComponent (CharacterMotor)
@script AddComponentMenu ("Character/FPS Input Controller")
