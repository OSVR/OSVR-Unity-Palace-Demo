# OSVR-Unity Palace Demo

Project source hosted at: https://github.com/OSVR/OSVR-Unity-Palace-Demo

This demo currently uses OSVR-Unity-v0.6.3-33-gd8a6a28-with-core-v0.6-772-gc1e8d5d-build294

This demo supports Direct Mode, Timewarp, and Distortion Correction via OSVR RenderManager. The DLLs are included in the Plugins x86_64 folder. Direct Mode requires Unity 5.2+ and NVIDIA graphics cards with the latest drivers (361.43). NVIDIA specifies that a 700 series card or better is required, but our testing indicates that select lower cards may also be compatible. Tested and working on a 560M.

1) A recent build of [OSVR-Core](http://osvr.github.io/using/) is required to run this demo.

2) In the OSVR-Core Snapshot download, navigate to the bin folder to find:

osvr_server.exe -- this must be running for OSVR to work.

osvr_server_config.json -- this must be configured for your device. By default it will work with the HDK. See included examples in the bin and share folders for other configurations.

Add any [device plugins](http://osvr.github.io/using/) to the osvr-plugins-0 folder. 

3) Connect your device to and start osvr_server.exe, not necessarily in that order.

# RenderManager / DirectMode
The Plugins folder contains DLLs from RenderManager v0.6.36. You will need to install [RenderManager](http://osvr.github.io/using/) and run an appropriate configuration file to enable DirectMode. See the sample configs included in the latest release or in the RenderManager install directory.

#Android
Here is an [Android apk](https://github.com/OSVR/OSVR-Unity-Palace-Demo/releases/tag/v0.1.1-android) built with this project.

See the [Android branch README](https://github.com/OSVR/OSVR-Unity-Palace-Demo/blob/androidPalace/README.md) for more information.

