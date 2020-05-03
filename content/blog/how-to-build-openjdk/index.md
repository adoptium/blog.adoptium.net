---
title: How to build OpenJDK
date: 2017-08-04T16:02:28+00:00
author: georgeadams
description: Building OpenJDK with our `makejdk-any-platform.sh` script is really simple.
tags:
  - faq
---

Building OpenJDK with our `makejdk-any-platform.sh` script is really simple...

```bash
git clone https://github.com/AdoptOpenJDK/openjdk-build.git
```

## Docker Build

```bash
./makejdk-any-platform.sh
```

Optionally specify `--destination <path>` if you want the binary to be copied to your machine.

## Local Build

```bash
./makejdk-any-platform.sh --source $PWD --destination $PWD/OpenJDK.tar.gz
```

## Troubleshooting

If you have any issues build OpenJDK then you can check all of the command line flags using:

```bash
./makejdk-any-platform.sh --help
```

It's also worth checking [here](https://github.com/AdoptOpenJDK/openjdk-build/issues) for the latest issues if you are having problems.
