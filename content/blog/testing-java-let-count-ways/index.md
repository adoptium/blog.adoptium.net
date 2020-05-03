---
title: "Testing Java: Let Me Count the Ways"
date: "2017-08-08T00:28:10+00:00"
author: shelleylambert
description: For years now, I have been testing Java and if there is a single statement to make about that activity, it is that there are many, many, many ways to test a Java Virtual Machine (JVM).
tags:
  - test
---

For years now, I have been testing Java and if there is a single statement to make about that activity, it is that there are many, many, many ways to test a Java Virtual Machine (JVM).

From code reviews and static analysis, to unit and functional tests, through 3rd party application tests and various other large system tests, to stress/load/endurance tests and performance benchmarks, we have a giant set of tests, tools and test frameworks at our disposal.  Even the opcode testing in the Eclipse OMR project helps to test a JVM.  From those low-level tests, all the way up to running some Derby or solr/Lucene community tests, or Acme Air benchmark there are many ways to reveal defects.  If we can find them, we can fix them… (almost always a true statement).

One common request from developers is “make it easier for me to test”.  Over the last year, we have been working on that very request.  Recently, I’ve had the good fortune to become involved in the AdoptOpenJDK project.  Through that project, we have delivered a lightweight wrapper to loosely tie together the various tests and test frameworks that we use to test Java.

We currently run the set of regression tests from OpenJDK (nearly 6000 test cases).  Very soon, we will be enabling more functional and system-level tests at that project.

My goal with that project is to make it super easy to run, add, edit, exclude, triage, rerun and report on tests.  To achieve that goal, we should:

* create common ways of working with tests (even if they use different frameworks, or focus on different layers in the software stack)
* limit test code/infrastructure bloat
* choose open-source tools and frameworks
* keep technical ego in check to restrict needless complexity for little or no gain in functionality

There is a lot of work ahead, but so far, its been fun and challenging.  If you are interested in helping out on this grand adventure, please check out the project to see [how to get involved at AdoptOpenJDK](https://adoptopenjdk.net/getinvolved.html).
