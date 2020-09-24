---
title: AdoptOpenJDK 15 Available
date: "2020-09-16T12:00:00+00:00"
author: andreasahlenstorf
description: AdoptOpenJDK is happy to announce the immediate availability of AdoptOpenJDK 15. Binaries are available for download of OpenJDK and Eclipse OpenJ9 (with OpenJDK class libraries). As always, all binaries are thoroughly tested and available free of charge without usage restrictions on a wide range of platforms.
tags:
  - announcement
---

AdoptOpenJDK is happy to announce the immediate availability of AdoptOpenJDK 15. Binaries are available for download of OpenJDK and Eclipse OpenJ9 (with OpenJDK class libraries). As always, all binaries are thoroughly tested (except 32-bit ARM, [see below](#a-note-on-binaries-for-32-bit-arm)) and available free of charge without usage restrictions on a wide range of platforms.

* [List of changes in OpenJDK 15](https://bugs.openjdk.java.net/browse/JDK-8252735?jql=project%20%3D%20JDK%20AND%20fixVersion%20%3D%20%2215%22%20ORDER%20BY%20created%20DESC)
* [List of changes in Eclipse OpenJ9 0.22.0](https://github.com/eclipse/openj9/blob/master/doc/release-notes/0.22/0.22.md)

## New and Noteworthy

### Overview of Java 15

* [JEP 339 added support for the Edwards-Curve Digital Signature Algorithm (EdDSA)](https://openjdk.java.net/jeps/339).
* [JEP 360 brought a preview of Sealed Classes](https://openjdk.java.net/jeps/360).
* [JEP 371 added Hidden Classes](https://openjdk.java.net/jeps/371).
* [JEP 372 removed the Nashorn JavaScript Engine](https://openjdk.java.net/jeps/372).
* [JEP 373 brought a re-implementation of the DatagramSocket API](https://openjdk.java.net/jeps/373).
* [JEP 374 disables and deprecates biased locking](https://openjdk.java.net/jeps/374).
* [JEP 375 landed with the second preview of pattern matching for instanceof](https://openjdk.java.net/jeps/375).
* [With JEP 377, the Z Garbage Collector (ZGC) was promoted to a production feature](https://openjdk.java.net/jeps/377).
* [JEP 378 made the long-awaited Text Blocks an official language feature](https://openjdk.java.net/jeps/378).
* [With JEP 379, the Shenandoah garbage collector was promoted to a production feature](https://openjdk.java.net/jeps/379).
* [JEP 381 removed the Solaris and SPARC ports](https://openjdk.java.net/jeps/381).
* [JEP 383 signaled the start of the second incubation phase for the Foreign Memory Access API](https://openjdk.java.net/jeps/383).
* [JEP 384 started another preview round for Records](https://openjdk.java.net/jeps/384).
* [JEP 385 deprecated RMI activation](https://openjdk.java.net/jeps/385).

### Removal of Client VM from Builds for Windows/x64

For compatibility reasons, AdoptOpenJDK bundled both the Client VM and Server VM with its builds for Windows/x64. We have been one of the last vendors to do so. With AdoptOpenJDK 15, we have dropped the Client VM on Windows/x64, too. On Windows/x64, the Server VM is the superior choice for all workloads. Furthermore, continuing to bundle the Client VM would have resulted in a reduced feature set for the users of the Server VM.

AdoptOpenJDK for Windows/x86 (32-bit) still includes both the Client and Server VM.

## A Note on Binaries for 32-bit ARM<a name="a-note-on-binaries-for-32-bit-arm"></a>

Welcome to our very special interpretation of Groundhog Day! Thanks to Covid-19 and some unrelated challenges, testing of 32-bit ARM binaries is still reduced. But we will get it sorted, promised! You can follow our progress on [Re-enable testing on ARMv7](https://github.com/AdoptOpenJDK/openjdk-build/issues/2078).
