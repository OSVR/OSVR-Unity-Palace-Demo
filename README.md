# OSVR-Unity-Palace-Demo
A simple example OSVR Unity project. Built with Unity 4.6. Upgrading to 5 is seamless but the lighting and water shader will likely need tweaking.

Unity executable download here: <a href="https://dl.dropboxusercontent.com/u/40036354/osvr_palace_nodialog.zip">OSVR-Unity-Palace-Demo</a>

This project should work on HMDs with multiple displays, such as the Sensics dSight. You may need to tweak the Build Settings. See <a href="http://answers.unity3d.com/questions/309819/getting-unity-to-render-across-multiple-monitors.html">How to build a Unity project to render across multiple displays</a>.

# Instructions for running the Unity executable:
1) Download the latest 32-bit version of the <a href="http://access.osvr.com/binary/osvr-core">OSVR-Core Snapshot</a>.

Source version for this example: v0.2-125-g7642085

64-bit support is coming soon.

2) In the OSVR-Core Snapshot download, navigate to the bin folder to find:

osvr_server.exe -- this must be running for OSVR to work.

osvr_server_config.json -- this must be configured for your device. 
By default it will work with the HDK. See included examples in the bin and share folders for other configurations.

3) Make sure your device is plugged into USB and start osvr_server.exe.

Example for Sensics dSight:
Copy the contents of osvr_server_config.dSight.json into osvr_server_config.json (or pass osvr_server_config.dsight.json as an argument when starting the server).

Start osvr_server.exe

Start Unity app osvr_palace.exe

#Android
Here is an Android app built with this project: <a href="https://dl.dropboxusercontent.com/u/40036354/osvr_android_01.apk">OSVR-Palace-Android</a>

Here is a smaller scene if the Palace scene requires too much memory for your device: <a href="https://dl.dropboxusercontent.com/u/40036354/osvr_android__simple.apk">OSVR-Unity-Android-SimpleExample</a>

To run this, you'll need a build of the OSVR Core for Android: <a href="https://github.com/OSVR/OSVR-Android-Build">OSVR-Android-Build</a>

Here is a minimally functional binary distribution: <a href="https://www.dropbox.com/s/i88inav4fmdyf0h/OSVR-Android-0.1.1-win32.tar.gz?dl=0">OSVR-Android-0.1.1-win32</a>

You'll need to push the zipped folder to a directory on a rooted Android device such as /data/local/tmp and unzip there, then run setup.sh (See the <a href="https://github.com/OSVR/OSVR-Android-Build">OSVR-Android-Build</a> for more help).

You can start the OSVR server on the Android device from your PC via an SSH connection. Any SSH client (such as PuTTY) will work. 
This app runs a SSH server on Android: <a href="https://play.google.com/store/apps/details?id=web.oss.sshsftpDaemon&hl=en">Rooted SSH/SFTP Daemon</a>

You could run the OSVR server through adb by connecting the Android device to your PC (a good first step to see if you can run the server before connecting a tracker), but if you only have one USB output on your device, you'll need to connect that to a tracker via a USB OTG cable. This app works with the HDK (untested with other devices), with support being added for more trackers (help appreciated!). It does not use the device's internal tracker, so moving the device does not move the camera. This build would be more useful on a (rooted) box running Android OS such as the Razer Forge TV or Ouya, rather than a phone.

If you want to build this project for Android, you'll need to:

1) Switch the platform in Unity's build settings to Android.

2) Add these dependencies to the Plugins folder: <a href="https://dl.dropboxusercontent.com/u/40036354/OSVR-Android-Dependencies.7z">OSVR-Android-Dependencies</a>

3) Reduce memory consumption. The Palace Demo was not meant for mobile and will have to be compressed. Texture and quality settings are the most important. A mobile-optimized branch will be added soon.

