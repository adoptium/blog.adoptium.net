---
title: AdoptOpenJDK 8u272, 11.0.9, and 15.0.1 Available
date: "2020-10-24T12:00:00+00:00"
author: andreasahlenstorf
description: AdoptOpenJDK is happy to announce the immediate availability of AdoptOpenJDK 8u272, 11.0.9, and 15.0.1. Binaries are available for download of OpenJDK and Eclipse OpenJ9 (with OpenJDK class libraries). As always, all binaries are thoroughly tested and available free of charge without usage restrictions on a wide range of platforms.
tags:
  - announcement
---

AdoptOpenJDK is happy to announce the immediate availability of AdoptOpenJDK 8u272, 11.0.9, and 15.0.1. Binaries are available for download of OpenJDK and Eclipse OpenJ9 (with OpenJDK class libraries). As always, all binaries are thoroughly tested and available free of charge without usage restrictions on a wide range of platforms.

* [List of security fixes and other fixes in OpenJDK 8u272](https://bugs.openjdk.java.net/browse/JDK-8253664?jql=project%20%3D%20JDK%20AND%20fixVersion%20%3D%20openjdk8u272%20ORDER%20BY%20created%20DESC)

* [List of security fixes and other fixes in OpenJDK 11.0.9](https://bugs.openjdk.java.net/browse/JDK-8253813?jql=project%20%3D%20JDK%20AND%20fixVersion%20%3D%2011.0.9%20ORDER%20BY%20created%20DESC)

* [List of security fixes and other fixes in OpenJDK 15.0.1](https://bugs.openjdk.java.net/browse/JDK-8253202?jql=project%20%3D%20JDK%20AND%20fixVersion%20%3D%2015.0.1%20ORDER%20BY%20created%20DESC)

* [List of changes in Eclipse OpenJ9 0.23.0](https://github.com/eclipse/openj9/blob/master/doc/release-notes/0.23/0.23.md)

## New and Noteworthy

### TLS 1.3 Backported to OpenJDK 8

The [OpenJDK project added support for TLS 1.3 to OpenJDK 8](https://bugs.openjdk.java.net/browse/JDK-8245466). TLS 1.3 is automatically enabled and will be negotiated for connections with servers supporting it. Previously, [TLS 1.3 was only available on OpenJDK 11+](https://openjdk.java.net/jeps/332) or required the installation of additional packages such as [OpenJSEE](https://github.com/openjsse/openjsse).

### CentOS/RHEL 6 Support Restored in AdoptOpenJDK 15

AdoptOpenJDK 15.0.1 will work on CentOS and Red Hat Enterprise Linux 6, again, by requiring only glibc 2.12 or newer. [AdoptOpenJDK 15 that we released last month only works on CentOS and Red Hat Enterprise Linux 7 because it required a more recent version of glibc](https://github.com/AdoptOpenJDK/openjdk-build/issues/2097). This change does not affect OpenJ9 which [supports only CentOS and Red Hat Enterprise Linux 7 and newer](https://www.eclipse.org/openj9/docs/openj9_support/).

Dropping support for glibc 2.12 was a misjudgement by us prompted by the fast-approaching [end of life date for CentOS 6 on 30th November 2020](https://wiki.centos.org/About/Product), which we use for building and testing all OpenJDK versions. We promise to find a way to continue supporting systems with glibc 2.12 or newer [as long as OpenJDK supports it](https://wiki.openjdk.java.net/display/Build/Supported+Build+Platforms). We apologize to everyone that was impacted by our mistake.

### Shenandoah Garbage Collector Enabled in AdoptOpenJDK 11

The Shenandoah Garbage Collector was backported to OpenJDK 11 by the OpenJDK project and is available from AdoptOpenJDK 11.0.9 onwards ([issue](https://github.com/AdoptOpenJDK/openjdk-build/issues/2114)). The supported platforms are x86_64, x86, and aarch64. Shenandoah is a low pause time garbage collector that reduces GC pause times by performing more garbage collection work concurrently with the running Java program. Please see [the OpenJDK wiki page on Shenandoah for details](https://wiki.openjdk.java.net/display/shenandoah/Main).

[Shenandoah was introduced with OpenJDK 12 (JEP 189)](https://openjdk.java.net/jeps/189) and has since been enabled in AdoptOpenJDK. We do not offer Shenandoah in OpenJDK 8 because it is not part of the mainline OpenJDK codebase. If you need Shenandoah on OpenJDK 8, please use [a binary built by Red Hat](https://developers.redhat.com/products/openjdk/overview).

### AdoptOpenJDK 8u272 for Solaris Not Ready

Due to [JDK-8255003](https://bugs.openjdk.java.net/browse/JDK-8255003), there is no AdoptOpenJDK 8u272 for Solaris yet, because it cannot be built successfully. A patch is currently being reviewed, which should allow us to build and ship AdoptOpenJDK 8u272 for Solaris soon.
