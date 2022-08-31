---
title: A Summary of the July Retrospectives
date: "2022-08-24T12:20:00+00:00"
author: shelleylambert
description: This post summarizes the retrospective assessment of the July 2022 CPU and various respins thereafter.
tags:
  - Temurin
  - AQAvit
---

## Introduction 
As most of our large consumer base already knows, Eclipse Adoptium is *the* community 'build, distribution and verification' project for the upstream OpenJDK project.  We serve up millions of binaries per week, as can be seen in the download trends in our dashboard (see [dash.adoptium.net](https://dash.adoptium.net/)).  We deliver these binaries in the most transparent manner.  There is no 'mystery meat' in our recipe.  In the spirit of such great transparency, this post serves to share our insights of the post mortem analysis of our most recent release activities.

We follow a strict regime of continuous improvement at the project, which means after each of our release cycles, conducting thorough retrospectives on what went well, what did not go well, and what actions are needed to improve in the future.  

## Goals and Metrics
All good retrospective activities start with "what were we trying to achieve"?  During the July CPU, we were targeting to deliver 42 different 'products', which is essentially the platform/version combinations of Eclipse Temurin that we build, test and distribute at the project.

Based on download numbers, we have divided these products into 'primary' and 'secondary' platforms.  Currently, x64 Linux, x64 Windows and x64 Mac are the leading downloaded platforms, so they are categorized as 'primary' platforms.  The remaining platforms are categorized as 'secondary' platforms.  Within the secondary platforms, some may even be considered 'best effort' platforms which as the name suggests are put at the bottom of the priority list.  To keep our goals simple, we aim to release the primary platforms within 2 days of the OpenJDK GA tag being available.  For secondary platforms, our target is to release within 7 tags of the GA tag availability. 

For the original GA tags for July, you can find our 'scorecard' on how we did.  64.3% were released within the targeted timeframes, 37.7% were not released within targets.  Of the ones that were not released within targets, 7 of them missed the targets by more than 5 days, which I will retrospectively refer to as "the Sickest Seven".  For a detailed breakdown of these targets per platform and version, see [adoptium/issues/157](https://github.com/adoptium/adoptium/issues/157).  

## The Sickest Seven
As [issue 157](https://github.com/adoptium/adoptium/issues/157) describes, 7 of the 42 products released badly missed the target goals (by 5 or more days).  

Let's look at the Sickest Seven, and determine next actions for improvement.  
From the initial July release activity, the _Sickest Seven_ (7 products that took more than 5 business days over the 2 or 7 day target to publish), plus the _two outliers_ from the respins:

| Platform | Version | Days over Target | Underlying Reasons / Notes | Actions to Improve | 
| -- | -- | -- | -- | -- |
| x64 Mac | jdk8 | 14 | Owners need to treat as urgent, onboarding difficulties, slow connectivity | Clarify requirements with owners |
| x64 Mac | jdk18 | 27 | Owners need to treat as urgent, onboarding difficulties, slow connectivity | Clarify requirements with owners |
| aarch64 Mac | jdk17 | 6 | Bottlenecked on having only 1 machine for TCK | 2nd machine now added to temurin-compliance project |
| aarch64 Mac | jdk11 | 6 | Bottlenecked on having only 1 machine for TCK | 2nd machine now added to temurin-compliance project |
| arm32 Linux | jdk8 | 11 | Unclear, possibly slow to add an owner to it, also short-handed, team vacations | Close follow-up to ensure ownership early |
| x86 Solaris | jdk8 | 10 | Delayed on packaging issue | Issue now fixed, [temurin-build/3061](https://github.com/adoptium/temurin-build/issues/3061) |
| sparcv9 Solaris | jdk8 | 20 | Considered a best effort platform, team would/should prioritize this last | No specific action required, Reduction in effort on other platforms, and no respins would mean these lower priority platforms get released quicker |


## New Features Need New Tests
A project that is changing, is a project that is going to occasionally break.  This is will always be the case, but how do we pro-actively protect ourselves in the tug-of-war between adding new features and remaining stable and secure?  The answer is of course 'testing'.  While we have an ever-evolving suite of tests for verifying the OpenJDK binaries we produce via the [AQAvit project](https://adoptium.net/aqavit), we need to be better at adding tests to verify the changes we are making to our own build and distribution scripts.

Several changes went in ahead of the July CPU that introduced delays during the release.  2 of the changes are enhancements as part of our Secure Software Development Framework [(SSDF) activities](https://github.com/adoptium/adoptium/issues/120), [GPG signing](https://blog.adoptium.net/2022/07/gpg-signed-releases/) and the [addition of SBOM artifacts](https://github.com/adoptium/temurin-build/issues/2900). Both of these features introduce new artifacts that can be downloaded alongside of the JDK binaries.  

During the release, there were some initial missteps when not all of the new artifacts were published.  While this was easily rectified, it prompted the team to add checks for ensuring we are publishing the expected set of artifacts.   

A [Windows compiler upgrade](https://github.com/adoptium/temurin-build/pull/2992) was also attempted prior to the release, there were unwanted side-effects, like missing libraries.  These went unnoticed because we had no tests for verifying the full set to be produced, and other testing did not spot the missing libraries either, because our test machines have the compiler installed in order to compile native test material.  The immediate action was to [revert the change](https://github.com/adoptium/temurin-build/pull/3009), until the core issue is addressed.  To future-proof against similar problems, we will be adding smoke tests to be run in a stripped down environment.

 
## Respins
We have covered the issues introduced in our repositories that caused minor delays, now let's look at changes in the upstream OpenJDK repositories that resulted in the need to respin this release.  
For the JDK8u345 respin, the issue is described in [JDK-8194154](https://bugs.openjdk.org/browse/JDK-8194154), which describes the crash that would occur when changing the "user.dir" property.  While changing user.dir is discouraged, some applications still do it, notably Gradle.  This is an interesting dilemna, where the feature is highly discouraged, but still possible, and therefore it is used in the field by some number of applications.  This highlights the fact that we need to be testing with a broad set of external applications, especially ones that are used widely.  We are actively incorporating a set of tests in the AQAvit suite for this purpose, but need to progress this work.  

jdk11.0.16.1, jdk17.0.4.1 and jdk18.0.2.1: c2 regression (excessive memory consumption after 17.0.4 update): [JDK-8292260](https://bugs.openjdk.org/browse/JDK-8292260) - This defect causes intermittent crashes and was introduced as part of a CVE patch Since our Eclipse Foundation project is not a member of the Vulnerability Group (VG), we do not have access to these patches ahead of the GA tags being available.  

Looking at the last 2 years and set of unique issues forcing the need to respin (Aug 2020:JDK-8249677*, Nov 2020:JDK-8250861*, Feb 2022:JDK-8218546, Aug 2022:JDK-8290832, Aug 2022:JDK-8292260*), the *majority were introduced by CVE patches.  It would be good to understand what level of testing the VG does with these CVE patches ahead of releasing them into the OpenJDK code base, and assess what needs to be changed in order to identify these issues before delivery to avoid the churn of a respin.  

In these cases, it was less likely that we would have been able to catch these failures, as we did not have weeks to soak these changes and see the intermittent issues.  The first time we have a chance to build and test with these CVE patches is the day the GA tags are made available and Day 1 of our release period.  In order for us to have access to these patches earlier we would need to join the VG.  While there has been an effort for Eclipse Foundation to join the VG, Oracle has denied the request.  One could argue that the VG would benefit from an additional member that could assist in testing these patches more heavily and across a very broad range of platforms to boot.  In absence of membership, we will have to look at soak testing our release builds a bit longer, the unfortunate side-effect being that it could potentially increase the time it takes us to release products.    

### Positive Takeaways
While most of this blog post has been spent analyzing what could be improved, it is important to remember that many things went well and we have continuously improved our deliveries.  This past release is no exception.  Even during this release, we were able to improve the speed with which we delived the respun products.  

| Release activity | % tarballs published within target |
| --- | --- | 
| Initial July release | 64.3% |
| jdk8u345 respin | 63.6% |
|jdk11.0.16.1+1 respin | 90.9%|
|jdk17.0.4.1+1 respin | 72.7%|
|jdk-18.0.2.1+1 respin | 100%|

We have continued to improve the way we communicate the progress of the release to the community, and the automation related to all of the steps required to deliver the Eclipse Temurin builds.  Let's celebrate these good things.  I look forward to further refinements outlined in [adoptium/issues/155](https://github.com/adoptium/adoptium/issues/155) and invite any and all to participate at the project to help develop and deliver them.  One additional plug for support, if you want to help but have no spare time for project work, you can also directly [sponsor](https://github.com/sponsors/adoptium) the project.  We typically focus these funds to help ensure we have sufficient machine resources to reduce bottlenecks in our pipelines.





