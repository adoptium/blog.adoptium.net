---
title: Using IcedTea-Web (to run JNLP) with AdoptOpenJDK.
date: "2018-10-04T04:56:34+00:00"
author: jayashreekumar
description: "We have produced a short slide deck and a video showing you how to get the IcedTea WebStart plugin working with AdoptOpenJDK binaries."
tags:
  - faq
---
When Java went Open, the whole of Java developer community was like "whoo hooo!", and everyone has been embracing OpenJDK with wide open arms. The AdoptOpenJDK community took the lead in making users life easier by providing prebuilt OpenJDK binaries from a fully open source set of build scripts and infrastructure.

However, the Java WebStart Wizard used to create the XML-based JNLP (Java Network Launching Protocol) definition file, that the Web Start software uses to download and run Java applications and applets on client machines was not Open Sourced as part of OpenJDK.

Thankfully the GNU Classpath community come up with a free software implementation of Java Web Start and the Java web browser plugin for running applets and thus our hero IcedTea-Web was born.

We have produced a short slide deck @[Running Web Start Application](https://www.slideshare.net/enasser/open-jdk8-openj9withicedteaweb)
And a video @ [Setting up AdoptOpenJDK with IcedTea-Web](https://www.youtube.com/watch?v=wRRS0LejZuM&feature=youtu.be) showing you how to get the IcedTea WebStart plugin working with AdoptOpenJDK binaries.

Voila!! Go ahead and run your WebStart applications to your heart's content.
