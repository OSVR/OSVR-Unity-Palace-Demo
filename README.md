# OSVR-Unity Palace Demo

Project source hosted at: https://github.com/OSVR/OSVR-Unity-Palace-Demo

This demo currently uses OSVR-Unity-v0.6.4-33-g6783cb5-with-core-v0.6-1068-gcafc213-build312.

This demo supports Direct Mode, Timewarp, and Distortion Correction via OSVR RenderManager. The DLLs are included in the Plugins x86_64 folder. Direct Mode requires Unity 5.2+ and NVIDIA graphics cards with the latest drivers (361.43). NVIDIA specifies that a 700 series card or better is required, but our testing indicates that select lower cards may also be compatible. Tested and working on a 560M.

1) A recent build of [OSVR-Core](http://osvr.github.io/using/) is required to run this demo.

2) In the OSVR-Core Snapshot download, navigate to the bin folder to find:

osvr_server.exe -- this must be running for OSVR to work.

osvr_server_config.json -- this must be configured for your device. By default it will work with the HDK. See included examples in the bin and share folders for other configurations.

Add any [device plugins](http://osvr.github.io/using/) to the osvr-plugins-0 folder. 

3) Connect your device to and start osvr_server.exe, not necessarily in that order.

# RenderManager / DirectMode
The Plugins folder contains DLLs from [OSVR-RenderManager](https://github.com/sensics/OSVR-RenderManager) v0.6.38 (commit ff68e2d). Installing [RenderManager](http://osvr.github.io/using/) is no longer necessary for DirectMode, but your NVIDIA drivers should be updated.

#Android
Here is an [Android apk](https://github.com/OSVR/OSVR-Unity-Palace-Demo/releases/tag/v0.1.1-android) built with this project.

See the [Android branch README](https://github.com/OSVR/OSVR-Unity-Palace-Demo/blob/androidPalace/README.md) for more information.

