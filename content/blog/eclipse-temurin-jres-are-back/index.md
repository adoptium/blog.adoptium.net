---
title: Eclipse Temurin JREs are back!
date: "2021-12-21T12:00:00+00:00"
author: timellison
description: Due to popular demand, the Adoptium project will produce JREs for Java 17 onwards.
tags:
  - Temurin
---

## Background

Back in August 2021, I [raised the question](https://github.com/adoptium/temurin-build/issues/2683)
about the ongoing production of Java Runtime Environment(JRE) artifacts for Eclipse Temurin.
That led to one of the longest threads of discussion we've had at the project, with strong
feelings expressed both for and against the idea.

Briefly, the question arose because the upstream
[OpenJDK source project](https://bugs.openjdk.java.net/browse/JDK-8200132) has declared JREs to
be "legacy" beyond Java version 8, with a recommendation to move to using `jlink` and produce customized
runtimes that only contain those Java modules that an application actually uses.

At the Eclipse Adoptium project, we spent time exploring and evaluating various options in
collaboration with our development and user community.
[Our decision](https://github.com/adoptium/adoptium/issues/64) was to stop publishing general
purpose JREs from Java 17 onwards. That decision was based upon the future likelihood that support
for building the "legacy" JREs will be removed from OpenJDK, the characteristics of the jlink
output, and importantly the impact of creating JREs on the Adoptium projects' workload.

We have published helpful guides for how to
[create your own JRE](https://blog.adoptium.net/2021/10/jlink-to-produce-own-runtime/) and how to 
[use jlink in Dockerfiles](https://blog.adoptium.net/2021/08/using-jlink-in-dockerfiles/) that
remain useful today.

## Listening to our user community

Adoptium has a very loyal user community, and they were keen to let us know that even with
knowledge of the `jlink` tool, the availability of general purpose
[Eclipse Temurin](https://adoptium.net/releases.html) JREs directly from the project was highly
valued. There are a number of usecases for reusable runtimes that just don't fit well with the
jlink model for end users.

Adoptium has always focused on ensuring that the quality of our runtime binaries remains very
high. The [Temurin Compliance Project](https://projects.eclipse.org/projects/adoptium.temurin-compliance)
checks that each runtime is Java standards compliant, then
[Eclipse AQAvit](https://projects.eclipse.org/projects/adoptium.aqavit) verifies the quality
of the runtime for use in production environments through an extensive battery of testing and
analysis.

Our users want both the convenience of a JRE package and the AQAvit quality assurance
provided by the Adoptium project. As such, the Adoptium Project Management Committee (PMC) redoubled
efforts to be able to create and maintain JREs for Java 17 onwards. 

## Eclipse Temurin JREs are back!

Adoptium is a community-driven project. We are here for our users, and we succeed by the kind efforts
of our [development community](https://adoptium.net/slack.html) supported by the
[working group members](https://adoptium.net/members.html) and [sponsors](https://adoptium.net/sponsors.html).

The earlier decision to stop creating JREs from Java 17 onwards has been reversed, and we will
continue to publish JREs for as long as it remains technically feasible to do so.

JREs for Eclipse Temurin 17 have been published via
[the website](https://adoptium.net/releases.html?variant=openjdk17) and the
[project API](https://api.adoptium.net/v3/assets/feature_releases/17/ga?architecture=x64&image_type=jre&os=linux).
We continue to encourage feedback about how the project is operating and what we can do better,
and welcome new members and sponsors.
