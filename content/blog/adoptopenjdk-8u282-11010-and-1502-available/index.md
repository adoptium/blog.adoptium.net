---
title: AdoptOpenJDK 8u282, 11.0.10, and 15.0.2 Available
date: "2021-01-22T15:00:00+00:00"
author: andreasahlenstorf
description: AdoptOpenJDK is happy to announce the immediate availability of AdoptOpenJDK 8u282, 11.0.10, and 15.0.2. Binaries are available for download of OpenJDK and Eclipse OpenJ9 (with OpenJDK class libraries). As always, all binaries are thoroughly tested and available free of charge without usage restrictions on a wide range of platforms.
tags:
  - announcement
---

AdoptOpenJDK is happy to announce the immediate availability of AdoptOpenJDK 8u282, 11.0.10, and 15.0.2. Binaries are available for download of OpenJDK and Eclipse OpenJ9 (with OpenJDK class libraries). As always, all binaries are thoroughly tested and available free of charge without usage restrictions on a wide range of platforms.

* [List of security fixes and other fixes in OpenJDK 8u282](https://bugs.openjdk.java.net/browse/JDK-8253664?jql=project%20%3D%20JDK%20AND%20fixVersion%20%3D%20openjdk8u282%20ORDER%20BY%20created%20DESC)

* [List of security fixes and other fixes in OpenJDK 11.0.10](https://bugs.openjdk.java.net/browse/JDK-8253813?jql=project%20%3D%20JDK%20AND%20fixVersion%20%3D%2011.0.10%20ORDER%20BY%20created%20DESC)

* [List of security fixes and other fixes in OpenJDK 15.0.2](https://bugs.openjdk.java.net/browse/JDK-8253202?jql=project%20%3D%20JDK%20AND%20fixVersion%20%3D%2015.0.2%20ORDER%20BY%20created%20DESC)

* [List of changes in Eclipse OpenJ9 0.24.0](https://github.com/eclipse/openj9/blob/master/doc/release-notes/0.24/0.24.md)

## New and Noteworthy

### New Trust Stores

When you open an HTTPS connection to a web server, your browser has to decide whether it trusts the server's certificate or not. To determine whether it can trust the certificate, the browser checks if the certificate was signed by a trusted CA (certificate authority). Well known CAs are [Let's Encrypt](https://letsencrypt.org) or [Thawte](https://www.thawte.com).  If it is, the connection is established after some further checks were successfully performed. If it is not, you get a warning, and you will be asked whether you want to proceed.

How does the browser know which CAs to trust? It contains a list of trusted CA certficates; or it asks the operating system that has such a list, too. Java is no different. When you open a TLS connection to a server with Java, for example, using [HttpClient](https://openjdk.java.net/groups/net/httpclient/intro.html), Java validates the server's certificate. To decide whether to trust the server's certificate or not, Java uses its own trust store that is contained in a file called `cacerts`. So far, AdoptOpenJDK came with the trust store maintained by the OpenJDK project. Starting with 8u282, 11.0.10, and 15.0.2, this is no longer the case.

Over the years, we received numerous reports from users that could not connect with Java to a server while they had no problem with their browser or command line tools like `curl`. Therefore, we have decided to deviate from OpenJDK and instead to align with Mozilla Firefox. From now on, AdoptOpenJDK's trust store contains the same CA certificates as Firefox.

Does that mean AdoptOpenJDK is less secure than before because it can now connect to more websites than before? Absolutely not. [Mozilla's CA certificate program](https://wiki.mozilla.org/CA) is well regarded throughout the industry for its high standards and independence.

### Freetype Unbundled On Linux

When you want to use AdoptOpenJDK on Linux, you have to install some libraries with your package manager (apt, dnf, ...), while others come with AdoptOpenJDK. Starting with 8u282, 11.0.10, and 15.0.2, [Freetype](https://www.freetype.org), a library to render fonts, is no longer bundled. Instead, it needs to be installed with the system's package manager. You can do so using one of the following commands:

* Debian/Ubuntu/Mint: `apt-get install libfreetype6 fontconfig fonts-dejavu`
* RHEL/CentOS/Fedora: `yum install freetype fontconfig dejavu-sans-fonts`
* SLES/OpenSUSE: `zypper install libfreetype6 fontconfig dejavu-fonts`

The operating system packages (deb, rpm) we provide automatically install those dependencies for you. Please see [Prerequisites for Font Support in AdoptOpenJDK](/2021/01/prerequisites-for-font-support-in-adoptopenjdk/) for further information.

We unbundled Freetype because OpenJDK does not bundle it anymore, either. Another reason is that Freetype on its own is not sufficient to provide font support in AdoptOpenJDK on Linux. You need additional libraries and some fonts. By not including those, AdoptOpenJDK's font support was like a pizza without any toppings: severely lacking. On top of that, you got an unhelpful NullPointerException if any of the required components were missing. This is now slightly better: `Exception in thread "main" java.lang.UnsatisfiedLinkError: /usr/lib/jvm/jdk-11/lib/libfontmanager.so: libfreetype.so.6: cannot open shared object file: No such file or directory`.

### Changed Compiler Levels
OpenJ9 8 is now compiled with Visual Studio 2013 instead of Visual Studio 2010, [that reached its end of life last summer](https://docs.microsoft.com/en-us/lifecycle/products/visual-studio-2010). AdoptOpenJDK 8 has been compiled with Visual Studio 2013 for a while.
