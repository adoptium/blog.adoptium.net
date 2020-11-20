---
title: AdoptOpenJDK Welcomes Dragonwell
date: "2020-11-20T13:00:00+00:00"
author: tsc
description: With Alibaba Dragonwell, another flavour of OpenJDK is being built at and distributed by AdoptOpenJDK. Dragonwell is a TCK-certified implementation of Java for large-scale application deployments on Alibaba Cloud and elsewhere.
tags:
  - announcement
---

AdoptOpenJDK and Alibaba are happy to announce we have joined forces to build, test, and distribute [Dragonwell JDK](http://dragonwell-jdk.io/) on AdoptOpenJDK's infrastructure. For our users, this means more choice, including some exciting new features that are unique to Dragonwell. One example is [Wisp](https://github.com/alibaba/dragonwell8/wiki/Wisp-Documentation) that implements coroutines on the JVM.

Over the next weeks, the first releases of Dragonwell 8 and 11 are going to appear on AdoptOpenJDK's website alongside existing binary offerings. Dragonwell can also be consumed like any other binary release built at AdoptOpenJDK through the [AdoptOpenJDK API](https://api.adoptopenjdk.net/). The Dragonwell team is going to introduce Dragonwell JDK and its unique features in separate blog posts. Stay tuned!

Dragonwell is a flavour of OpenJDK (like AdoptOpenJDK!). It is a TCK-certified [[1](#fn-tck)<a name="fn-tck-ret"></a>] implementation of Java for large-scale application deployments on Alibaba Cloud and elsewhere. As such, it is a drop-in replacement for any other OpenJDK variant and compatible with all the tools you know, like JDK Flight Recorder and JDK Mission Control.

Alibaba remains committed to collaborating closely with the OpenJDK community and intends to upstream as many customizations as possible from Alibaba Dragonwell.

---

1. Alibaba<a name="fn-tck"></a> performs the TCK certification, not AdoptOpenJDK. [↩︎](#fn-tck-ret "Go back to footnote 1 in the text")
