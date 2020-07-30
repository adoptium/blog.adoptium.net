---
title: AdoptOpenJDK 8u262, 11.0.8, and 14.0.2 Available
date: "2020-07-16T12:00:00+00:00"
author: andreasahlenstorf
description: AdoptOpenJDK is happy to announce the immediate availability of AdoptOpenJDK 8u262, 11.0.8, and 14.0.2. Binaries are available for download of OpenJDK and Eclipse OpenJ9 (with OpenJDK class libraries). As always, all binaries are thoroughly tested and available free of charge without usage restrictions on a wide range of platforms.
tags:
  - announcement
---

AdoptOpenJDK is happy to announce the immediate availability of AdoptOpenJDK 8u262, 11.0.8, and 14.0.2. Binaries are available for download of OpenJDK and Eclipse OpenJ9 (with OpenJDK class libraries). As always, all binaries are thoroughly tested (except 32-bit ARM, see below) and available free of charge without usage restrictions on a wide range of platforms.

* [List of security fixes and other fixes in OpenJDK 8u262](https://bugs.openjdk.java.net/browse/JDK-8248399?jql=project%20%3D%20JDK%20AND%20fixVersion%20%3D%20openjdk8u262%20ORDER%20BY%20created%20DESC)

* [List of security fixes and other fixes in OpenJDK 11.0.8](https://bugs.openjdk.java.net/browse/JDK-8247827?jql=project%20%3D%20JDK%20AND%20fixVersion%20%3D%2011.0.8%20ORDER%20BY%20created%20DESC)

* [List of security fixes and other fixes in OpenJDK 14.0.2](https://bugs.openjdk.java.net/browse/JDK-8248956?jql=project%20%3D%20JDK%20AND%20fixVersion%20%3D%2014.0.2%20ORDER%20BY%20created%20DESC)

* [List of changes in Eclipse OpenJ9 0.21.0](https://github.com/eclipse/openj9/blob/master/doc/release-notes/0.21/0.21.md)

## New and Noteworthy

### Java Flight Recorder Available in 8u262

Java Flight Recorder (JFR) is a tool for collecting diagnostics of a running Java application. This diagnostic information can, for example, be analyzed with [JDK Mission Control](http://jdk.java.net/jmc/). JFR was previously only available in Oracle JDK 8, and OpenJDK 11 or later. With OpenJDK 8u262, is now also part of OpenJDK 8 and can be used with AdoptOpenJDK without usage restrictions. Flight recording can be enabled on the command line like this:

```
$ java -XX:StartFlightRecording:filename=recording.jfr,duration=60s ... 
```

It is also possible to enable flight recording for an already running JVM using `jcmd`:

```
$ jcmd <pid> JFR.start
$ jcmd <pid> JFR.dump filename=recording.jfr
```

Run `jcmd` to get a list of available PIDs. The resulting recording can be analyzed using various tools. A popular choice is JDK Mission Control (JMC) [that is also available from AdoptOpenJDK](https://adoptopenjdk.net/jmc.html).

### Auto-Upgrading Homebrew Casks for JRE, OpenJ9 

Users of AdoptOpenJDK can always get the latest and greatest version of the JDK with HotSpot by installing the `adoptopenjdk` cask:

```
$ brew cask install adoptopenjdk
```

We have added additional casks that automatically upgrade to the latest and greatest version of the JRE and OpenJ9, too. If you haven't already, you need to first activate the AdoptOpenJDK tap: 

```
$ brew tap AdoptOpenJDK/openjdk
```

You can then choose between these auto-upgrading casks and install them with `brew cask install <name>`: 

* adoptopenjdk
* adoptopenjdk-jre
* adoptopenjdk-openj9
* adoptopenjdk-openj9-jre

## A Note on Binaries for 32-bit ARM <a name="a-note-on-binaries-for-32-bit-arm"></a>

Because we're short on machines with 32-bit ARM CPUs and those we have are also incredibly slow, our testing capacity is minimal. As a result, we haven't caught a bug in the last release that caused certain SSL connections to fail. This has been fixed in the meantime. We are already looking into procuring additional capacity that should make it possible to re-enable our entire test suite and deliver binaries that match our quality criteria.

Another longstanding problem is that AdoptOpenJDK 8 on 32-bit ARM only supports interpreted mode (Zero VM). We would very much like to fix that. Hence, we're looking for volunteers who help us build AdoptOpenJDK 8 with a proper client VM that is already available on AdoptOpenJDK 11 and higher.
