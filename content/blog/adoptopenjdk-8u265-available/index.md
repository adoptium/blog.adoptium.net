---
title: AdoptOpenJDK 8u265 Available
date: "2020-07-30T12:00:00+00:00"
author: andreasahlenstorf
description: AdoptOpenJDK is happy to announce the immediate availability of AdoptOpenJDK 8u265. Binaries are available for download of OpenJDK and Eclipse OpenJ9 (with OpenJDK class libraries). As always, all binaries are thoroughly tested and available free of charge without usage restrictions on a wide range of platforms.
tags:
  - announcement
---

AdoptOpenJDK is happy to announce the immediate availability of AdoptOpenJDK 8u265. Binaries are available for download of OpenJDK and Eclipse OpenJ9 (with OpenJDK class libraries). As always, all binaries are thoroughly tested (except 32-bit ARM, [see below](#a-note-on-binaries-for-32-bit-arm)) and available free of charge without usage restrictions on a wide range of platforms. This interim release outside the regular cadence was necessary because OpenJDK fixed some regressions in 8u262 that was released two weeks ago.

* [List of security fixes and other fixes in OpenJDK 8u265](https://bugs.openjdk.java.net/browse/JDK-8250575?jql=project%20%3D%20JDK%20AND%20fixVersion%20%3D%20openjdk8u265%20ORDER%20BY%20created%20DESC)

## New and Noteworthy

## A Note on Binaries for 32-bit ARM<a name="a-note-on-binaries-for-32-bit-arm"></a>

As already mentioned in the [release notes for the July updates](/2020/07/adoptopenjdk-8u262-1108-and-1402-available#a-note-on-binaries-for-32-bit-arm), we're short on machines with 32-bit ARM CPUs, and therefore the testing of the 32-bit ARM binaries we perform is minimal. We're in advanced discussions with a potential supplier of a cluster of Raspberry Pis and hope to resolve the shortage in time for the release of AdoptOpenJDK 15 in September.

We're also making progress on AdoptOpenJDK 8 on 32-bit ARM with a proper Client VM. We're releasing two builds of 8u265: the first one with interpreted mode (Zero VM) only and a second one (8u265**.1**) with a Client VM.
