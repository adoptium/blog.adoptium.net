---
title: Reproducible Builds at Eclipse Adoptium
date: "2022-03-31T12:00:00+00:00"
author: anleonar@redhat.com
description: Eclipse Adoptium is working towards fully reproducible builds, this blogs explains why
 they are needed and the work ongoing to achieve them.
tags:
  - Temurin
---

## Why do we need Reproducible Builds?

### Confidence in the high quality of binaries

Being able to repeatably build the same OpenJDK source in an identical manner, producing
identical JDK binaries, shows confidence and quality in the production process.
The necessity to know exactly what is going into the binary and the exact repeatability of the
build process, through what source and dependencies are used, to what compiler tooling is used.
The fact that a reproducible identical JDK binary can only be achieved by all these stringent controls,
shows the high quality of the JDK binaries to the consumers.

### Secure Supply Chain

The reproduciblity of builds goes hand in hand with knowing exactly what goes into it, in other words 
the Software Bill of Materials (SBOM). This detailed knowledge means we know the source and provenance
of everying within and used to build the JDK. Thus any publicly published CVEs or vulnerabilities can be
quickly cross checked with the JDK and build tooling used.

The other aspect of a secure supply chain is being able to absolutely identify a JDK binary as being secure,
this is especially true for Open Source community projects. The ability to repeatably build a JDK binary
identically from the Adoptium build scripts provides a mechanism to achieve this. The Adoptium releases can
be re-built within multiple secure environments each with stringent bill of material checks, and then the binaries
compared to ensure byte for byte identical output. This then gives the utmost secure supply chain confidence in
the Adoptium community public binaries.

### Better consumer support capabilities for releases

Reproducibility necessitates a Software Bill of Materials (SBOM), from the SHAs of all the component parts,
to the versions and SHAs of dependent components and the tooling used to build it. This means any requirement
to re-build with a specific patch can be sure to be rebuilt with the exact same source and tooling, with just
that one patch added. Also any support queries on known bugs or issues in any component or build tool can be
cross checked with the SBOM for any given release.

### Improved Adoptium Build Script Validation

One aspect of a continually changing and improving open source community is ensuring any changes are good with
no side effects. For example ensuring changes to build scripts don't alter the JDK binary when they should not.
A guaranteed way of assuring that such changes do not, is to leverage reproducible builds. Simply comparing the
JDK binary output from before and after a build script change, and checking they are identical, proves the change
has not had any un-forseen effect.

## The progress at Eclipse Adoptium to achieve Reproducible Builds

### OpenJDK upstream contributions

The OpenJDK upstream community is fully supportive of reproducible builds, and over the past year many contributors
their have been finding and resolving non-deterministic issues. At Eclipse Adoptium extensive work has been done to
achieve identical OpenJDK binaries on the Linux platforms in the jdk "head" stream (jdk-19+). This has involved
in-depth build comparison debugging to identify non-deterministic build issues, and any OpenJDK issues are then
contributed back upstream to the OpenJDK community project. These fixes have also been backported to the
jdk17u stream, since jdk-17 is a LTS release.

OpenJDK contributions:
[8284539: Configure --with-source-date=version fails on MacOS](https://github.com/openjdk/jdk/pull/8247)
[8284661: Reproducible assembly builds without relative linking](https://github.com/openjdk/jdk/pull/8177)
[8284437: Building from different users/workspace is not always deterministic ](https://github.com/openjdk/jdk/pull/8124)
[8283315: jrt-fs.jar not always deterministically built](https://github.com/openjdk/jdk/pull/7852)
[8279834: Alpine Linux fails to build when --with-source-date enabled](https://github.com/openjdk/jdk/pull/7025)
[8279182: MakeZipReproducible ZipEntry timestamps not localized to UTC](https://github.com/openjdk/jdk/pull/6926)
[8278766: Enable OpenJDK build support for reproducible jars and jmods using --date](https://github.com/openjdk/jdk/pull/6878)
[8278163: --with-cacerts-src variable resolved after GenerateCacerts recipe setup](https://github.com/openjdk/jdk/pull/6680)
[8278080: Add --with-cacerts-src='user cacerts folder' to enable deterministic cacerts generation](https://github.com/openjdk/jdk/pull/6647)
[8277762: Allow configuration of HOTSPOT_BUILD_USER](https://github.com/openjdk/jdk/pull/6542)
[8276766: Enable jar and jmod to produce deterministic timestamped content](https://github.com/openjdk/jdk/pull/6481)
[8276764: Enable deterministic file content ordering for Jar and Jmod](https://github.com/openjdk/jdk/pull/6395)
[8276743: Make openjdk build Zip Archive generation "reproducible"](https://github.com/openjdk/jdk/pull/6311)
[8276654: element-list order is non deterministic](https://github.com/openjdk/jdk/pull/6278)

### Ongoing Eclipse Adoptium Reproducible Build projects

As well as continuing to identify and fix any OpenJDK non-deterministic issues, Eclipse Adoptium is continuing to
integrate changes into the build scripts to fully support Reproducible Builds.

The following capabilities are available at Eclipse Adoptium:

- Reproducible jdk-19 builds for x64 Linux and aarch64 Linux platforms across all infrastructure.
- Reproducible jdk-19 builds for ppc64 Linux, arm32 Linux, s390x Linux built on the same infrastructure.

The following are projects currently in-progress:

- Further non-deterministic issue resolutions, and subsequent contribution to upstream OpenJDK, and backporting to jdk17u.
- Enhancing the Adoptium jenkins pipelines to integrate CycloneDX SBOM tooling to provide a standardized bill of materials framework for the Adoptium binaries.
- Detailed dependency bill of materials analysis to fully extended the CycloneDX SBOM json.

Future projects:

- Extending reproducible build support to the jdk17u build pipelines.
- Further exploring required fixes to non-deterministic build output on other platforms, eg.MacOS and Windows.
- Further tooling and reporting that leverages reproducible builds to help validate secure JDK binary output, eg.comparison pipeline tooling.

