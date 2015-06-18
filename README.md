#OSVR-Android Palace Demo

This demo uses the Unity Palace project with a build of the OSVR-Android server to connect to an external tracker. It has been tested on a Galaxy Note 4 (Android 5.0.1) and HTC One (4.3) using the HDK and Hillcrest Labs' FSM-9 trackers connected via a USB OTG cable.

##What you need to run this:

1) An Android device running at least 4.1 (Jelly Bean). It may work on older devices if you build the server for an older platform and the phone supports USB-OTG.

2) Root permissions.

3) External tracker. If you're on a mobile device with one micro USB port, you'll need to connect a tracker to that port with a USB On-the-go cable and the device needs to support that capability. This requirement is not necessary if you are on a device such as the Razer Forge TV or Ouya and can connect a tracker via a USB port as you would on PC. This build has only been tested on the phones mentioned above. It does not use a phone's internal tracker.

4) A build of the OSVR-Core server for Android (included with release). See [OSVR-Android-Build](https://github.com/OSVR/OSVR-Android-Build)


##Very Helpful Apps

[SuperSU](https://play.google.com/store/apps/details?id=eu.chainfire.supersu&hl=en)

[BusyBox](https://play.google.com/store/apps/details?id=stericson.busybox&hl=en)

[Rooted SSH/SFTP Daemon](https://play.google.com/store/apps/details?id=web.oss.sshsftpDaemon&hl=en)


##Instructions

1) Root the device and install the helpful apps, and the demo apk.

2) Push the OSVR-Android-Server folder onto the device. I used /data/local/tmp but there is probably a more logical place to put it. You can do this using adb while the device is connected to a PC via USB.

adb push C:\path\to\OSVR-Android-Server /data/local/tmp

You might want to zip the folder and push the zip instead, then unzip on the device using the unzip command made available by BusyBox.

3) Open an SSH connection with the device. Any client will do (PuTTY, for example). You'll need to run an SSH server on the device with the Rooted SSH/SFTP Daemon or similar app. You'll have to setup your SSH connection with the information in the app.

4) Once you are connected, make sure you have root permissions with the command "su". Then navigate to the folder where you pushed the server, and run the setup script:

su (if you don't already have root privileges)
cd /data/local/tmp/OSVR-Android-Server (or to the parent directory if you need to unzip)
sh setup.sh

5) Connect an external tracker such as the HDK of FSM-9 with a USB OTG cable if you're using a phone, or by USB if the device supports it. The server is configured to work with the FSM-9 in this build.

6) Start the server. Then start the Palace Demo app.
./osvr_server

That should do it! You can connect a bluetooth controller to walk around the environment.
