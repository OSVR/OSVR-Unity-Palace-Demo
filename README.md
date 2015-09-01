# OSVR-Unity Palace Demo

Project source hosted at: https://github.com/OSVR/OSVR-Unity-Palace-Demo

This demo currently uses OSVR-Unity-v0.2-54-ge98758a-with-core-v0.2-656-ge285644-build171

1) A recent build of [OSVR-Core](http://osvr.github.io/using/) is required to run this demo. Last tested with OSVR-Core v0.2-656-ge285644.

2) In the OSVR-Core Snapshot download, navigate to the bin folder to find:

osvr_server.exe -- this must be running for OSVR to work.

osvr_server_config.json -- this must be configured for your device. By default it will work with the HDK. See included examples in the bin and share folders for other configurations.

Add any [device plugins](http://osvr.github.io/using/) to the osvr-plugins-0 folder. 

3) Connect your device to and start osvr_server.exe, not necessarily in that order.

#Android
Here is an [Android apk](https://github.com/OSVR/OSVR-Unity-Palace-Demo/releases/tag/v0.1.1-android) built with this project.

See the [Android branch README](https://github.com/OSVR/OSVR-Unity-Palace-Demo/blob/androidPalace/README.md) for more information.

