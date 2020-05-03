---
title: AdoptOpenJDK 8u252, 11.0.7, and 14.0.1 Available
date: "2020-04-21T12:20:00+00:00"
author: andreasahlenstorf
description: AdoptOpenJDK is happy to announce the immediate availability of AdoptOpenJDK 8u252, 11.0.7, and 14.0.1, both with OpenJDK HotSpot and Eclipse OpenJ9. As always, all binaries are thoroughly tested and available free of charge without usage restrictions on a wide range of platforms.
tags:
  - announcement
---

AdoptOpenJDK is happy to announce the immediate availability of AdoptOpenJDK 8u252, 11.0.7, and 14.0.1, both with [OpenJDK HotSpot](https://openjdk.java.net/groups/hotspot/) and [Eclipse OpenJ9](https://www.eclipse.org/openj9/). As always, all binaries are thoroughly tested and available free of charge without usage restrictions on a wide range of platforms.

* [List of security fixes and other fixes in OpenJDK 8u252](https://bugs.openjdk.java.net/browse/JDK-8241560?jql=project%20%3D%20JDK%20AND%20fixVersion%20%3D%20openjdk8u252%20ORDER%20BY%20created%20DESC)

* [List of security fixes and other fixes in OpenJDK 11.0.7](https://bugs.openjdk.java.net/browse/JDK-8241501?jql=project%20%3D%20JDK%20AND%20fixVersion%20%3D%2011.0.7%20ORDER%20BY%20created%20DESC)

* [List of security fixes and other fixes in OpenJDK 14.0.1](https://bugs.openjdk.java.net/browse/JDK-8241453?jql=project%20%3D%20JDK%20AND%20fixVersion%20%3D%2014.0.1%20ORDER%20BY%20created%20DESC)

* [List of changes in Eclipse OpenJ9 0.20.0](https://github.com/eclipse/openj9/blob/master/doc/release-notes/0.20/0.20.md)

## New and Noteworthy

### Windows Server 2008 R2 and Windows 7 No Longer Supported

Starting with this release, the minimum supported Windows versions have moved to Windows Server 2012 R2 (or newer) and Windows 8.1 (or newer). Previously, AdoptOpenJDK’s Windows builds supported Windows Server 2008 R2 (or newer) as well as Windows 7 (or newer). This change was prompted by Microsoft [ending support for Windows Server 2008 R2](https://support.microsoft.com/en-us/help/4456235/end-of-support-for-windows-server-2008-and-windows-server-2008-r2) and [Windows 7](https://www.microsoft.com/en-us/windows/windows-7-end-of-life-support-information) in January 2020.

The binaries and installers should still work on Windows Server 2008 R2 and Windows 7, however.

### Notarization and Hardened Runtime Support on macOS

Since macOS 10.15 (“Catalina”), Apple requires software distributed outside the Mac App Store (like AdoptOpenJDK!) [to be notarized](https://developer.apple.com/documentation/xcode/notarizing_macos_software_before_distribution) and to offer support for [Hardened Runtime](https://developer.apple.com/documentation/security/hardened_runtime). Otherwise, the software cannot be started on macOS 10.15.

Getting OpenJDK ready for notarization and Hardened Runtime required a big effort by the OpenJDK community, especially for OpenJDK 8, which only targeted older versions of Xcode that do not support notarization. This work has been mostly completed. Our pkg installer of AdoptOpenJDK 14, released in March 2020, was the first one to be fully notarized. It is now joined by AdoptOpenJDK 11.0.7. Be aware that **only pkg installers are notarized**.

The situation around OpenJDK 8 is a bit more complicated. AdoptOpenJDK member George Adams collaborated with the OpenJDK project and Apple to get the necessary patches ready to make OpenJDK 8 notarizable. Partly due to the COVID-19 pandemic, this work could not be completed on time. As a result, AdoptOpenJDK 8u252 is *not* notarized. But do not despair: AdoptOpenJDK 8u252.1 is! It is a separate version because it consists of the official 8u252 source code combined with the candidate patch that is going to bring notarization support to OpenJDK. We hope that this distinction will no longer be necessary in July when the next quarterly patch update is due.

If a pkg installer does not work for you, you can still use our archives and remove the quarantine attributes from the unpackaged directory (jdk-11.0.7+9 in the example):

	$ xattr -d com.apple.quarantine jdk-11.0.7+9

Developers that wish to embed AdoptOpenJDK in their software and notarize it can download an archive, unpack it and run the following commands on the resulting directory (jdk-14+36 in the example):

	$ xattr -cr jdk-14+36
	$ codesign -verbose=4 -deep -force -s “Developer ID Application: MyTeam (XXXX)” jdk-14+36

### Homebrew Users: Use the AdoptOpenJDK Tap

With the introduction of Notarization and Hardened Runtime support, it is of paramount importance to use our Homebrew tap and not the “official” cask adoptopenjdk. The cask adoptopenjdk is not notarized at this time and will not work without workarounds.

To check if you have the correct casks installed, run brew cask list:

	$ brew cask list
	adoptopenjdk

If the output contains adoptopenjdk (without any version number), you caught the wrong cask. To uninstall the cask, run:

	$ brew cask uninstall adoptopenjdk

Then, activate our tap:

	$ brew tap AdoptOpenJDK/openjdk

brew search adoptopenjdk lists all versions of AdoptOpenJDK that you can install. To install AdoptOpenJDK 14, run:

	$ brew cask install adoptopenjdk14

Regardless of the issues with the “official” cask adoptopenjdk, we recommend using our tap AdoptOpenJDK/openjdk because this is the only one that offers all versions and variants of AdoptOpenJKD.

### Eclipse IDE Starts Again on macOS

The [Eclipse IDE could not be started with AdoptOpenJDK 11.0.6 and OpenJDK 14](https://bugs.eclipse.org/bugs/show_bug.cgi?id=559482). It failed with the following message:

	Error: could not find libjava.dylib
	Failed to GetJREPath()

This problem is fixed in OpenJDK 11.0.7 and OpenJDK 14.0.1 and therefore the corresponding versions of AdoptOpenJDK. Happy coding!

### Eclipse OpenJ9 0.20.0, Adds AArch64 As New Platform

AdoptOpenJDK with Eclipse OpenJ9 includes the [latest OpenJ9 release, 0.20.0](http://www.eclipse.org/openj9/oj9_whatsnew.html). In addition to the normal binaries for the different Linux distributions, you will find an early access (EA) release of AdoptOpenJDK 11 for 64-bit ARM (aarch64). Our friends at Eclipse OpenJ9 are working hard to add full support for this architecture. You can help them out by downloading the EA release and trying it out. If you find a problem that they’re not already trying to fix (see [OpenJ9 Known Issues](https://github.com/eclipse/openj9/blob/master/doc/release-notes/0.20/0.20.md#known-issues)), please open a new issue at the [OpenJ9 GitHub repository](https://github.com/eclipse/openj9/issues).

### No AdoptOpenJDK 13.0.3 — yet

In 2017, the [OpenJDK project adapted a new release model](https://mreinhold.org/blog/forward-faster): new feature releases every 6 months (with two updates every quarter) and new long-term support releases every 3 years (with updates for at least three years). The current feature release is OpenJDK 14 and the long-term support (LTS) releases are 8 (with updates at least until May 2026) and 11 (with updates at least until October 2024).

Our friends at Azul decided that this is not enough and introduced a new support tier: [Medium Term Support](https://www.azul.com/press_release/azul-systems-bridges-java-feature-support-availability-gap/). As part of the [OpenJDK Updates](http://openjdk.java.net/projects/jdk-updates/index.html) project, they continue patching and fixing OpenJDK 13 and OpenJDK 15 for 18 months after the general availability of the next LTS release of OpenJDK. This means that *both* OpenJDK 13 and OpenJDK 15 will receive updates until April 2023. The first result of this effort is OpenJDK 13.0.3 that was released alongside OpenJDK 8u252, 11.0.7, and 14.0.1.

Where is AdoptOpenJDK 13.0.3? There won’t be AdoptOpenJDK 13.0.3, at least for now. Medium Term Support is a new initiative and there are multiple open questions around it that need to be resolved before we put our weight behind it. Please chime in and either 👍 or 👎 [the request for AdoptOpenJDK to continue providing OpenJDK 13](https://github.com/AdoptOpenJDK/TSC/issues/147). Your voices will be heard — but only add a comment if necessary.
