---
title: MacOS Binary Changes
date: "2018-10-05T18:30:25+00:00"
author: georgeadams
description: As a result of a recent change in our build scripts, the directory layout of our macOS tarballs has changed. Many developers had requested that we ship our binaries in the native macOS binary layout rather than our traditional JDK layout.
tags:
  - announcements
---

As a result of a recent change in our build scripts, the directory layout of our macOS tarballs has changed. Many developers had requested that we ship our binaries in the native macOS binary layout rather than our traditional JDK layout.

## Why the change?

There are several good reasons to change the directory layout to match most of the other Java implementations. The main reason that we have chosen to do so is to allow our Homebrew recipes to be merged into core making it much easier for developers to easily download our binaries!

## What does this mean for me?

Essentially the directory tree has changed, previously when you extracted our macOS tarballs the `bin` and `lib` directories were located in the root directory. Native macOS Java binaries alongside most other Java implementations don't come bundled this way. Instead a `Contents` directory containing `Home` and `MacOS` directories along with an `Info.plist` file is shipped.

## What do I need to change?

The actual OpenJDK binary is identical so your Java applications will run in the exact same way but you may need to modify your `PATH` to accommodate these changes. If you are looking for the `bin` and `lib` directories, they are now located inside `Contents/Home/bin` and `Contents/Home/lib`.

```    
.
└── Contents
    ├── Home
    │   ├── bin
    │   ├── conf
    │   ├── demo
    │   ├── include
    │   ├── jmods
    │   ├── legal
    │   ├── lib
    │   ├── man
    │   └── release
    ├── Info.plist
    └── MacOS
        └── libjli.dylib -> ../Home/lib/jli/libjli.dylib
```
