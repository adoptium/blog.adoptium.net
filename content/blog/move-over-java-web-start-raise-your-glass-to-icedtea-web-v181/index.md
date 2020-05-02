---
title: Move over Java Web Start — raise your glass to IcedTea-Web V1.8.1!
date: "2019-06-06T12:00:00+00:00"
author: suechaplain
description: "We are pleased to announce that IcedTea-Web is now available as an optional part of the installation mechanism in our Windows (MSI) installer for x64 Windows systems (other platforms to follow!)."
---

Back in March, the IcedTea-Web project was kindly donated by RedHat to the AdoptOpenJDK project, moving from its old [home](http://icedtea.wildebeest.org/hg/) on Mercurial to the [IcedTea-Web Github repository](https://github.com/AdoptOpenJDK/IcedTea-Web). Whilst our friends at Karakun focus on the head stream to deliver a new-age IcedTea-Web capability, others in the Adopt community have been working on the 1.8 code stream to integrate IcedTea-Web with the AdoptOpenJDK installers. We are pleased to announce that IcedTea-Web is now available as an optional part of the installation mechanism in our Windows (MSI) installer for x64 Windows systems (other platforms to follow!).

For all the many customers who highlighted their dependency on Web Start functionality, you can now choose to install IcedTea-Web and continue to launch applications from web pages via the Java Network Launch Protocol (JNLP). We have marked this transition at the AdoptOpenJDK project with the V1.8.1 release, which also contains fixes on top of V1.8. You can also obtain a standalone version of V1.8.1 from the [Iced-Tea-Web build 
page](https://adoptopenjdk.net/icedtea-web.html), which provides Linux, Windows, and portable download packages.

Migrating from Web Start to IcedTea-Web is straightforward, as described on our [Migration page](https://adoptopenjdk.net/migration.html#icedtea-web). To learn about installation options, including how to set up silent installation for wide-scale deployment, read the [Installation page](https://adoptopenjdk.net/installation.html#installers).

Problem reporting has also moved from Bugzilla to [GitHub](https://github.com/AdoptOpenJDK/icedtea-web/issues), so
if you run into any difficulties, please let us know by raising an issue.

You asked and we delivered! Cheers everyone!

*(Special thanks to Jiri Vanek, Charlie Gracie, Philippe Doussot, and others who made this happen)*
