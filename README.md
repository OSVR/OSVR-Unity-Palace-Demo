# OSVR-Unity-Palace-Demo
A simple example OSVR Unity project. Built with Unity 4.6. Upgrading to 5 is seamless but the lighting and water shader will likely need tweaking.

If you want the executable, download here: https://www.dropbox.com/s/nu3pzuj5zhxyk5y/osvr_palace.zip?dl=0

This project should work on HMDs with multiple displays, such as the Sensics dSight. You may need to tweak the Build Settings.
This link has all the information you need in order to build a Unity project to render across multiple displays: http://answers.unity3d.com/questions/309819/getting-unity-to-render-across-multiple-monitors.html
Here is a working executable for the dSight: https://www.dropbox.com/s/w49hig5uo9z002n/osvr_palace_wide.zip?dl=0

# Instructions for running the Unity executable:
1) Download the latest 32-bit version of the OSVR-Core Snapshot: http://access.osvr.com/binary/osvr-core

Current source version for this example: v0.2-125-g7642085

64-bit support is coming soon.

2) In the OSVR-Core Snapshot download, navigate to the bin folder to find:

osvr_server.exe -- this must be running for OSVR to work.

osvr_server_config.json -- this must be configured for your device. 
By default it will work with the HDK. See included examples in the bin and share folders.

3) Make sure your device is plugged into USB and start osvr_server.exe.

Example for Sensics dSight:
Copy the contents of osvr_server_config.dSight.json into osvr_server_config.json (or pass osvr_server_config.dsight.json as an argument when starting the server).

Start osvr_server.exe

Start Unity app osvr_palace.exe


