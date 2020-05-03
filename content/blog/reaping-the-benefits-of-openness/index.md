---
title: Reaping the benefits of openness
date: "2018-04-28T19:50:55+00:00"
author: timellison
tags:
  - overview
---

AdoptOpenJDK has a simple mission.  We are all about delivering high quality, open binaries for OpenJDK-based technology.

Achieving that simple mission requires a series of interesting decisions and actions that must be taken.  For example, OpenJDK doesn't contain everything you need for a production-quality binary, so we add in the missing parts.  The tests in OpenJDK must be augmented to achieve the required quality, and there must be a usable distribution mechanism.

Openness is important throughout the process.  There is little point in taking open source code and passing it through a closed, proprietary build process that you cannot reproduce locally should you need to do so.  AdoptOpenJDK is open from front to back - all our [build scripts](https://github.com/AdoptOpenJDK/openjdk-build), [website code](https://github.com/AdoptOpenJDK/openjdk-website), and [machine configurations](https://github.com/AdoptOpenJDK/openjdk-infrastructure) are available for scrutiny and reuse.

The result is an OpenJDK binary that you can trust in production.  Indeed we are delighted that [IBM are prepared to offer service and support](https://www.ibm.com/uk-en/marketplace/support-for-runtimes) for our [release binaries](https://adoptopenjdk.net/archive.html?variant=openjdk8-openj9) and [Docker images](https://hub.docker.com/u/adoptopenjdk/) - a testimony to the work that the community has invested.

Our plan is to use the broad platform capacity we have in [the build farm](https://ci.adoptopenjdk.net/) to get a wide range of quality releases across numerous OpenJDK version streams, different JVM implementations, and disparate OS/CPU combinations.  We want to be a trusted distributor of OpenJDK-based technology, and we have a [support road map](https://adoptopenjdk.net/support.html) that ensures our binaries are there as you transition between release versions.

We'd like to thank [our sponsors](https://adoptopenjdk.net/sponsors.html) who share our vision, and we'd be delighted if you [gave us feedback](https://adoptopenjdk.net/slack.html) on the code we are writing, the process we are following, and your success using the binaries we produce.
