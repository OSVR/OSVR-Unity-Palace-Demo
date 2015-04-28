using UnityEngine;
using System.Collections;

public class QuitOnEscape : MonoBehaviour {

	void Update () {
	    if(Input.GetKeyDown(KeyCode.Escape))
        {
            Application.Quit();
        }
	}
}
