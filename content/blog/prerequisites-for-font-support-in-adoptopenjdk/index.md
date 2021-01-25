---
title: Prerequisites for Font Support in AdoptOpenJDK
date: "2021-01-22T14:30:00+00:00"
author: andreasahlenstorf
description: Proper font support in AdoptOpenJDK requires some additional configuration on Linux and Solaris. Without it, you get unhelpful NullPointerExceptions. 
tags:
  - announcement
---

Back in the day when everybody got their JDK from Sun and later Oracle it included an [assortment of fonts](https://docs.oracle.com/javase/7/docs/technotes/guides/intl/font.html#lucida) that could be used in addition to the fonts installed on the host. OpenJDK has not bundled any fonts for years (if it ever has), and [Oracle did away with the bundled fonts starting with Oracle JDK 11](https://www.oracle.com/java/technologies/javase/jdk-11-relnote.html#Removed). Already with OpenJDK 9 [font configuration files were removed except on Windows](https://docs.oracle.com/javase/9/intl/font-configuration-files.htm).

This has a couple of implications for OpenJDK distributions, including AdoptOpenJDK: Your system might need additional packages and configuration beyond the AdoptOpenJDK installation for proper font support, especially on Linux.

## macOS, and Windows

Font integration should work out of the box, no matter whether you are using binary builds (compressed tarballs, ZIP archives) or operating system packages (if available).

## Linux

On Linux, you need [Freetype](https://www.freetype.org/) and [Fontconfig](http://fontconfig.org/) to enable OpenJDK to discover and use fonts. If you have neither, you might stumble upon unhelpful exceptions like:

```
Caused by: java.lang.NullPointerException
    at java.desktop/sun.awt.FontConfiguration.getVersion(FontConfiguration.java:1288)
    at java.desktop/sun.awt.FontConfiguration.readFontConfigFile(FontConfiguration.java:225)
    at java.desktop/sun.awt.FontConfiguration.init(FontConfiguration.java:107)
    at java.desktop/sun.awt.X11FontManager.createFontConfiguration(X11FontManager.java:765)
    at java.desktop/sun.font.SunFontManager$2.run(SunFontManager.java:440)
    at java.base/java.security.AccessController.doPrivileged(Native Method)
    at java.desktop/sun.font.SunFontManager.<init>(SunFontManager.java:385)
    at java.desktop/sun.awt.FcFontManager.<init>(FcFontManager.java:35)
    at java.desktop/sun.awt.X11FontManager.<init>(X11FontManager.java:56)
    ... 36 more
```

In addition to that, you need some fonts. [DejaVu](https://dejavu-fonts.github.io) is a family of free fonts based on Vera and included in most (if not all) Linux distributions. This makes it a solid choice. The following commands should install all the necessary packages:

* Debian/Ubuntu/Mint: `apt-get install libfreetype6 fontconfig fonts-dejavu`
* RHEL/CentOS/Fedora: `yum install freetype fontconfig dejavu-sans-fonts`
* SLES/OpenSUSE: `zypper install libfreetype6 fontconfig dejavu-fonts`

If you have a desktop environment installed on your system, those packages should already be present, and there is nothing left to do. If you have installed AdoptOpenJDK **using our operating system packages (rpm, deb)**, all necessary packages will automatically be installed starting with 8u282, 11.0.10, and 15.0.2 released in January 2021.

## AIX

On AIX, the situation is similar to Linux. You need [Freetype](https://www.freetype.org/), [Fontconfig](http://fontconfig.org/), and fonts. On the systems available to us, everything came with the operating system and as such, Java could use the fonts out of the box. 

## Solaris

On Solaris, you need [Freetype](https://www.freetype.org/), [Fontconfig](http://fontconfig.org/), and fonts, too. You should be able to install those using:

```
pkg install system/library/freetype-2
pkg install font/truetype/dejavu
```

If you have a desktop environment installed, all the necessary libraries should already be present.

## Checking the Font Support

If you want to test whether the font support works on your system, here is a small sample program that should output the name of fonts installed on your system if everything is alright:

```java
import java.awt.*;

public class FontTest {

    public static void main(String[] args) {
        String[] names = GraphicsEnvironment.getLocalGraphicsEnvironment().getAvailableFontFamilyNames();

        System.out.println("Found " + names.length + " fonts:");

        for (String name : names) {
            System.out.println(name);
        }
    }
}
```

That's the output on a Fedora 33 system without desktop environment that was configured according to the instructions given above:

```
Found 8 fonts:
DejaVu Sans
DejaVu Sans Condensed
DejaVu Sans Light
Dialog
DialogInput
Monospaced
SansSerif
Serif
```

The list of fonts varies depending on the operating system and its configuration.
