---
title: SLSA level 2 compliance for Eclipse Temurin
date: "2022-11-11T12:00:00+00:00"
author: sxa
description: Eclipse Temurin by Adoptium is compliant with level 2 of the SLSA secure development framework.
tags:
  - Temurin
  - Security
---

# Introduction to SLSA

[SLSA](https://slsa.dev) is a framework with tiers for allowing products to
work towards.  Today, we are pleased to announce that the Eclipse Temurin
build and distribution process is compliant with Level 2 of the SLSA
specification.

What does this mean in practice? The [SLSA v0.1 levels are defined at this
link](http://slsa.dev/spec/v0.1/levels) and this means we are complient with
levels 1 and 2 of the specification.

Level 1 means that the build process is full scripted and automated (in
our case via the scripts in temurin-build and the ci-jenkins-pipelines
repository) and we are now producing Software Bill Of Material (SBOM)
documents describing the items which went into producing each of our builds
which are published alongside the downloads. We have been compliant with
level for some time.

Level 2 adds in additional requirements to provide some tamper resistance of
the build process, mostly in the areas of having all of our code version
controlled which we do by storing anything related to producing our buids in
git in our case and also by using a build service to produce and distribute
those builds - in our case this is our jenkins CI server. In our release
cycles since July 2022 we have also provided PGP signature verification
information along with the SHA checksums that we previously had, which was
the final part of achieving SLSA level 2 compliance.

# Next steps for the project

Are we finished? Absolutely not! And we are continuing to work towards
achieving the higher levels of SLSA and have already achieved many of the
requirements of higher levels. But for now, we are proud to be able to claim
full compliance with SLSA level 2.
