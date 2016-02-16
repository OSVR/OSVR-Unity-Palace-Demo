# OSVR-Unity Palace Demo

Project source hosted at: https://github.com/OSVR/OSVR-Unity-Palace-Demo

This demo currently uses OSVR-Unity-v0.6.4-23-ge0de7c4 (build number 302) with OSVR-Core v0.6-807-gc9403f7.

This demo supports Direct Mode, Timewarp, and Distortion Correction via OSVR RenderManager. The DLLs are included in the Plugins x86_64 folder. Direct Mode requires Unity 5.2+ and NVIDIA graphics cards with the latest drivers (361.43). NVIDIA specifies that a 700 series card or better is required, but our testing indicates that select lower cards may also be compatible. Tested and working on a 560M.

1) A recent build of [OSVR-Core](http://osvr.github.io/using/) is required to run this demo.

LG G4 -- working

Samsung Galaxy S6 -- working sometimes, black screen sometimes

If you get a black screen, try restarting the server launcher app.

#Installation

1) Install the OSVR-Android Server launcher: https://github.com/OSVR/OSVR-AndroidServerLauncher

# RenderManager / DirectMode
The Plugins folder contains DLLs from RenderManager v0.6.38. You will need to install [RenderManager](http://osvr.github.io/using/) and run an appropriate configuration file to enable DirectMode. See the sample configs included in the latest release or in the RenderManager install directory.

#Android
Here is an [Android apk](https://github.com/OSVR/OSVR-Unity-Palace-Demo/releases/tag/v0.1.1-android) built with this project.


