// 8.7.2010
// DCLarson
// Simple Object Rotation JavaScript


public var rotate = 1.0;

function Update () 
{
	// Slowly rotate the object around its Y axis
	transform.Rotate (0, rotate * Time.deltaTime, 0);
		
}