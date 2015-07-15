# OSVR-Unity Palace Demo

Project source hosted at: https://github.com/OSVR/OSVR-Unity-Palace-Demo

This demo uses OSVR-Unity.unitypackage v0.2.32-gcb1b5d8

1) Requires a recent build of [OSVR-Core](http://access.osvr.com/binary/osvr-core). Last tested with OSVR-Core v0.2.299-gd5b68a9.

2) In the OSVR-Core Snapshot download, navigate to the bin folder to find:

osvr_server.exe -- this must be running for OSVR to work.

osvr_server_config.json -- this must be configured for your device. By default it will work with the HDK. See included examples in the bin and share folders for other configurations.

Add any [device plugins](http://access.osvr.com/) to the osvr-plugins-0 folder. 

3) Make sure your device is plugged into USB and start osvr_server.exe.

Example for Sensics dSight: Copy the contents of osvr_server_config.dSight.json into osvr_server_config.json (or pass osvr_server_config.dsight.json as an argument when starting the server).

Start osvr_server.exe

Start Unity app osvr_palace.exe

#Android
Here is an [Android apk](https://github.com/OSVR/OSVR-Unity-Palace-Demo/releases/tag/v0.1.1-android) built with this project.

See the [Android branch README](https://github.com/OSVR/OSVR-Unity-Palace-Demo/blob/androidPalace/README.md) for more information.

