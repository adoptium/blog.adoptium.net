---
title: AdoptOpenJDK 8u275 and 11.0.9.1 Available
date: "2020-11-18T16:30:00+00:00"
author: andreasahlenstorf
description: AdoptOpenJDK is happy to announce the immediate availability of AdoptOpenJDK 8u275 and 11.0.9.1. As always, all binaries are thoroughly tested and available free of charge without usage restrictions on a wide range of platforms.
tags:
  - announcement
---

AdoptOpenJDK is happy to announce the immediate availability of AdoptOpenJDK 8u275 and 11.0.9.1. The OpenJDK project identified regressions in OpenJDK 8u272 and 11.0.9 that could crash the virtual machine. These regressions have been fixed in 8u275 and 11.0.9.1. As always, all binaries are thoroughly tested and available free of charge without usage restrictions on a wide range of platforms.

* [List of security fixes and other fixes in OpenJDK 8u275](https://bugs.openjdk.java.net/browse/JDK-8255963?jql=project%20%3D%20JDK%20AND%20fixVersion%20%3D%20openjdk8u275%20ORDER%20BY%20created%20DESC)

* [List of security fixes and other fixes in OpenJDK 11.0.9.1](https://bugs.openjdk.java.net/browse/JDK-8255887?jql=project%20%3D%20JDK%20AND%20fixVersion%20%3D%2011.0.9.1%20ORDER%20BY%20created%20DESC)

Because the regressions are not present in AdoptOpenJDK 11.0.9 with OpenJ9, there is no new version of AdoptOpenJDK 11.0.9 with OpenJ9.

## New and Noteworthy

### A Note About Our Versioning

In some places, most notably in the version strings of our Linux packages, 11.0.9.1+1 is identified as 11.0.9+11.2. We know that this might cause confusion, but we cannot accommodate version numbers with four parts in every place. For example, [Semver 2.0.0](https://semver.org/spec/v2.0.0.html), which we expose in our API, does not allow for version numbers with four parts. And for RPM, 11.0.9.1+1 would be the same as 11.0.9+11 that we already released in October.
