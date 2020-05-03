---
title: New contribution of test cases to AdoptOpenJDK
date: "2017-09-14T08:50:09+00:00"
author: simonrushton
tags:
  - test
---

We have contributed additional tests and a test framework the tests depend on, to the AdoptOpenJDK project in these repositories: [openjdk-systemtest](https://github.com/AdoptOpenJDK/openjdk-systemtest) and [stf](https://github.com/AdoptOpenJDK/openjdk-stf).

The tests are longer running tests which cannot be automated using standard unit test frameworks (such as JUnit or TestNG). They fall under the broad category of 'system tests' - tests which attempt to simulate running production workloads and specific user scenarios.

The tests are mostly load tests which run a collection of java methods (typically discrete test case methods) for either a set number of invocations, or a period of time, using one or more threads. Although the tests can (and do) find functional issues executing the individual methods in the load, that is not the main goal of the testing. Running a workload for a period of time is often the most effective way to identify defects in the java virtual machine such as the garbage collector and the dynamic java compiler.  See the [load test tool documentation](https://github.com/AdoptOpenJDK/stf/blob/master/stf.load/docs/README.md) for more details of these tests.

Other tests are more multi-process, multi-step in nature. For example, tests which use the Java Debugging Interface (JDI) to examine a test program running in a second JVM, and tests which perform remote operations on a second JVM running a workload, such as attaching a Java transformer agent.  See [here](https://github.com/AdoptOpenJDK/openjdk-systemtest/blob/master/openjdk.test.debugging/README.md) for more details of these tests.

You can download and execute the tests locally - follow the instructions at [openjdk-systemtest](https://github.com/AdoptOpenJDK/openjdk-systemtest/blob/master/README.md). You will also find additional documentation about the tests and the test tooling in the repositories.
