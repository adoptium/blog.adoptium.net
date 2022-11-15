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
link](http://slsa.dev/spec/v0.1/levels) and this means we are compliant with
levels 1 and 2 of the specification.

## SLSA Level 1

Level 1 means that the build process is full scripted and automated and we
are now producing Software Bill Of Material (SBOM) documents describing the
items which went into producing each of our builds which are published
alongside the downloads.  We have been compliant with level 1 for some time:
The level 1 requirements are:

- **Build - scripted build**: Our build steps are defined completely by the
  jenkins pipelines from the [ci-jenkins-pipelines](https://github.com/adoptium/ci-jenkins-pipelines) repository and the
  underlying scripts run on the build machines from the
  [temurin-build](https://github.com/adoptium/temurin-build)
  repository - starting at
  [make-adopt-build-farm.sh](https://github.com/adoptium/temurin-build/blob/master/build-farm/make-adopt-build-farm.sh)

- **Provenance - available**: Our SBOM for provenance is not currently in-toto
  but is available alongside each of our Temurin release artifacts and
  includes the information required to re-run the build if required,
  including the full set of parameters which we use to the
  makejdk_any_platform.sh script (invoked from make-adopt-build-farm.sh), 
  the source repository tags (`scmRef`) which was used by the build process
  to produce the builds, the output from the openjdk `configure` invocation
  and various other pieces of information. We are continually evolving the
  specific details which we include in the SBOM. If you want to join in the
  discussion on the content, you can find the conversation in
  [temurin-build#3013](https://github.com/adoptium/temurin-build/issues/3013)

## SLSA Level 2

Level 2 adds in additional requirements to provide some tamper resistance of
the build process, mostly in the areas of having all of our code version
controlled which we do by storing anything related to producing our buids in
git in our case and also by using a build service to produce and distribute
those builds - in our case this is our jenkins CI server. In our release
cycles since July 2022 we have also provided PGP signature verification
information along with the SHA checksums that we previously had, which was
the final part of achieving SLSA level 2 compliance. The requirements here
are:

- **Source - Version controlled**. All of our source code is stored in GitHub in
  the jdkXX repositories, which we mirror from the openjdk project. These
  are version controlled and have tags for each release which we build from

- **Build - Build service**. All of the build steps are run using our jenkins
  build service - currently at https://ci.adoptopenjdk.net which is used to
  perform the builds, generate the SBOMs, and build the installers where
  applicable. The output from the builds are then posted into GitHub release
  repositories named as temurinXX-binaries by our jenkins CI system.

- **Provenance - Authenticated**. We provide GPG checksums that users can use to
  verify that the downloads they receive have come from the Adoptium CI
  system. The verification process is defined in
  [this blog post](https://blog.adoptium.net/2022/07/gpg-signed-releases)

- **Provenance - service generated**. The GPG signatures are generated
  automatically during the build process by our jenkins CI which has access
  to the private keys from the Eclipse Foundation that are used to perform
  the signing.

# Next steps for the project

Are we finished? Absolutely not! And we are continuing to work towards
achieving the higher levels of SLSA and have already achieved many of the
requirements of higher levels. But for now, we are proud to be able to claim
full compliance with SLSA level 2.

We are currently tracking forward progress to meeting the higher level
requirements at
[adoptium#160](https://github.com/adoptium/adoptium/issues/160)
