---
title: Secure Software Development Framework (SSDF) at Adoptium
date: "2022-08-177T12:00:00+00:00"
author: sxa
description: An overview of the SSDF framework and what we are doing to work towards implementing it
tags:
  - Temurin
  - Security
---

# Introduction to the framework

The Secure Software Development Framework (Henceforth SSDF) is
[special publication 800-218](https://csrc.nist.gov/Projects/ssdf)
from the National Institute of Standards and Technology agency of the US
Department of Commerce's Computer Security Resource Center division.  It is
a set of development practices which can be used to establish secure
development practices for your software and was based on development
practices from multiple other organisations.  It's goal is to reduce
vulnerabilities in the software that organisations ship.  With President
Biden's
[executive order 14028](https://www.federalregister.gov/documents/2021/05/17/2021-10460/improving-the-nations-cybersecurity)
from 17th May 2021 being signed in an attempt to improve cybersecurity,
the SSDF document also includes mappings to the executive order's bullet
points.

# Why SSDF and not [insert other framework here]?

There are other models available and if there are others that might have
relevant things not covered by SSDF then please let us know so we can
evaluate whether it's worth including extra things from them.  We
found that of the alternative models available such as
[BSA](https://www.bsa.org/reports/updated-bsa-framework-for-secure-software)
(which maps to SSDF) and [SLSA](https://slsa.dev/) we found the SSDF
publication to be suitably thorough and in many cases is more detailed than the
alternatives we had looked at. This does not prevent us from aiming to
attain the levels in other specifications, but means that our primary focus
will be on SSDF.

## What are we doing?

As a starting point we are performing an analysis to determine where the
Adoptium project, and Eclipse Temurin specifically to start with, is in
terms of the points in the specifications. Our process will be:

1. Determine which levels we already adhere too
2. Collate the information on each of the SSDF points to determine where we currently stand
3. Determine next steps in order to help us achieve the next level
4. Implement actions to get to the best security levels that we can

## What have you done so far?

One of the important things in the secure software specification relate to
Software Bill Of Materials (Henceforth SBOMs) and we have started producing
SBOMs along with the Temurin builds using [CycloneDX](https://cyclonedx.org)
as part of our regular build process. While the full content of it is still
a work in progress and will be enhanced over time, we have a good baseline
of data about what has been used to produce each of our builds across all of
our platforms. The SBOM documents can be obtained along with the Eclipse
Temurin builds.

Additionally, we have been working towards having fully reproducable builds
which are binary identical and can be rebuilt by others if desired in order
to prove that we have built what we say we have, in the way we said we did. 
That way, a cautious user could rebuild what we have to verify that it is
correct, but take advantage of all of our extensive testing and distribution
without having to do that themselves.
[This video](https://www.youtube.com/watch?v=rQpftEfMW5k) shows how far we
have come to producible binary identical builds on Linux, but we've done
similar activities on macOS and Windows platforms too.

Also, in addition to the SHA checksums which we have been providing for a
long time now, we have also recently (July 2022) started
[adding GPG signatures](https://blog.adoptium.net/2022/07/gpg-signed-releases/)
for our downloads, which can be used to verify that the downloads have not
been tampered with since they were produced.

## How can I see how things are progressing?

The top level issue that we are using to track the work is
https://github.com/adoptium/adoptium/issues/120 and we have lots of
sub-tasks for the different sections of the SSDF document.

The major sections of the SSDF document are as follows and we have
individual issues covering each of them

- ["PO": Prepare the Organization](https://github.com/adoptium/adoptium/issues/122) (Determining processes and security requirements)
- ["PS": Protect Software](https://github.com/adoptium/adoptium/issues/123) (Source code management, access control and SBOMs and integrity verification)
- ["PW": Produce Well-secured software](https://github.com/adoptium/adoptium/issues/124) (Peer reviews, secured software components, use standardized tools, thread modelling)
- ["RV": Remediate Vulnerabilities](https://github.com/adoptium/adoptium/issues/125) (Understand and have reporting process for vulnerabilities nad incidents, and perform root cause analysis

## What are your next steps?

While the exact steps are always going to be somewhat fluid, these are some
of the current planned next steps for the short term:

- Continue to improve the SBOM detail ([build#3013](https://github.com/adoptium/temurin-build/issues/3013)) 
- Improve our security of our code repositories including increasing mandatory reviewers for PRs
- Improve isolation of build systems from the rest of the jenkins infrastructure
- Migrate to building in docker images across the remaining Linux platforms (ppc64le and s390x)
- Various other administrative security controls on our infrastructure.

