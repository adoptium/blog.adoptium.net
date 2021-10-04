---
title: Creating your own runtime using jlink
date: "2021-10-04T12:00:00+00:00"
author: sxa
description: How to swap a JRE image for a jlink runtime
tags:
  - Temurin
  - Docker
---

With the release of the latest LTS version of Temurin we have decided not to ship Java Runtime Environments (JREs) separately from the JDK downloads.
This post will show you how to simply create your own runtime for Java 17+ which is comparable to a legacy JRE if required.

## Why have you decided to stop shipping JREs?

While the OpenJDK build process still has support for building a JRE via the
`legacy-jre` target it is, as the name suggests, legacy functionality.  The
new LTS version provided us with an opportunity to make a clean break and we
have decided now is the time to no longer provide JREs since there are more
efficient options available. It also simplifies the list of downloads we have
available and reduces our testing overhead.  We will continue to produce
them for the existing 8 and 11 versions to retain continuity for those using
them.  The discussion on this happened in
[this issue](https://github.com/adoptium/temurin-build/issues/2683).

The good news is that it is very easy to produce your own runtime that looks
comparable to a legacy JRE, and in many cases it can be smaller than an old
legacy JRE would be!

## Sounds good. So how do I create my own "JRE"?

Creating your own runtime that is comparable to a JRE is simpler
then you might think.  Firstly, download and extract our JDK image.  You can
then use the
[jlink](https://docs.oracle.com/en/java/javase/17/docs/specs/man/jlink.html)
command to create your own runtime that will be smaller, yet provide
equivalent functionality to the JRE.  Replace `jdk-17+35` in the examples
below with the version of Java you are working with, and replace the forward
slashes with the path separator on your platform (e.g.  `\` for Windows):

```
   jdk-17+35/bin/jlink --add-modules ALL-MODULE-PATH --output jdk-17+35-jre \
      --strip-debug --no-man-pages --no-header-files --compress=2
```

Once you have done that, the contents of the `jdk-17+35-jre` will work in
place of a JRE and be significantly smaller.

## What are the disk space savings?

It will vary by platform and the version of Java you are using, but using
one example with the `jdk-17+35` release, the full JDK for one platform is
about 312Mb on disk.  The jlinked runtime using the above command is about
95Mb.

## Is this identical to the legacy JRE?

Not quite. By default there are some extra modules included via the
`ALL-MODULE-PATH` list than would be included in a normal JRE. You can list
the ones which your runtime supports with `java --list-modules`. At the time
of writing, using the `jdk-17+35` release, the list of extra modules is as
follows:

```
 jdk.attach
 jdk.compiler
 jdk.editpad
 jdk.hotspot.agent
 jdk.internal.ed
 jdk.internal.jvmstat
 jdk.internal.le
 jdk.internal.opt
 jdk.jartool
 jdk.javadoc
 jdk.jcmd
 jdk.jconsole
 jdk.jdeps
 jdk.jdi
 jdk.jlink
 jdk.jpackage
 jdk.jshell
 jdk.jstatd
 jdk.random
 jdk.unsupported.desktop
```

Also, to be able to support some of those modules, you will still have tools
like `javac`, `jlink` and others in the runtime. The `--add-modules` command accepts a comma seperated list of modules
instead of the full list implied by `ALL-MODULE-PATH`. You can use a
comma-separated set of modules from the `--list-modules` output to limit it
further if desired, for example to include the list of extras above. Doing
so will reduce the size further, to around 66Mb, saving an extra 29Mb.

As of `jdk-17+35` the full set of modules needed to do this is shown in the
following command:

`jdk-17+35/bin/jlink --add-modules java.base,java.compiler,java.datatransfer,java.desktop,java.instrument,java.logging,java.management,java.management.rmi,java.naming,java.net.http,java.prefs,java.rmi,java.scripting,java.se,java.security.jgss,java.security.sasl,java.smartcardio,java.sql,java.sql.rowset,java.transaction.xa,java.xml,java.xml.crypto,jdk.accessibility,jdk.charsets,jdk.crypto.cryptoki,jdk.crypto.ec,jdk.dynalink,jdk.httpserver,jdk.incubator.foreign,jdk.incubator.vector,jdk.internal.vm.ci,jdk.internal.vm.compiler,jdk.internal.vm.compiler.management,jdk.jdwp.agent,jdk.jfr,jdk.jsobject,jdk.localedata,jdk.management,jdk.management.agent,jdk.management.jfr,jdk.naming.dns,jdk.naming.rmi,jdk.net,jdk.nio.mapmode,jdk.sctp,jdk.security.auth,jdk.security.jgss,jdk.unsupported,jdk.xml.dom,jdk.zipfs --output jre-17+35 --strip-debug --no-man-pages --no-header-files --compress=2`

## Can I make my runtime even smaller?

As mentioned in the introduction, yes you can!  You just need to identify which modules your
application requires.  You can do this with the
[jdeps](https://docs.oracle.com/en/java/javase/17/docs/specs/man/jdeps.html)
command.  For example if I take a simple "Hello World!" application I can
get the list of modules it requires as follows:

```
$ jdk-17+35/bin/jdeps Hello.class
Hello.class -> java.base
   <unnamed>        -> java.io        java.base
   <unnamed>        -> java.lang      java.base
```

This first line shows that my simple application only requires the
`java.base` module.  In a more complicated example there will be several of
these present in the output.  The rest of the output is a breakdown of what
packages my application uses and which modules they relate to.  I can
therefore create an even smaller custom runtime that will be suitable for my
application using the following `jlink` command:

```
   jdk-17+35/bin/jlink --add-modules java.base --output jdk-17+35-minimaljre \
      --strip-debug --no-man-pages --no-header-files --compress=2
```

And the new runtime, which comes in at only 32Mb, will still be able to run
my "Hello World" application.  From this you can see that using jlink you
can generate custom runtimes for your application which are even smaller
than any JRE we could ship to you.

The `jdeps` command can also be given a jar file instead of a class and show
you all of the modules your packaged application requires.

**WARNING:** In some cases the cryptography modules may not get picked up by
jdeps. If your application uses encryption and you hit problems you may need
to add `jdk.crypto.ec` to the list of modules that you include.

## I love this! Does it work for all Java versions?

The `jlink` command was introduced when the module system was introduced in
OpenJDK. For this reason it is not available in Java 8, but is in all later
supported versions.