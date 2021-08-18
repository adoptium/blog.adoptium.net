---
title: Using Jlink in Dockerfiles instead of a JRE
date: "2021-10-18T12:00:00+00:00"
author: georgeadams
description: How to swap a JRE docker image for a jlink runtime
tags:
  - Temurin
  - Docker
---

The Eclipse Temurin project is excited to announce that the official docker images for Temurin binaries are now available on [Dockerhub](https://hub.docker.com/_/eclipse-temurin).

If you were using a JDK image with Ubuntu Focal or Centos 7 as the base, the migration path is very simple. Simply change `adoptopenjdk` to `eclipse-temurin` and set the distro after the version number in the tag. E.g for Ubuntu Focal:

```dockerfile
FROM eclipse-temurin:11-focal
# Continue with your application deployment
RUN mkdir /opt/app
COPY japp.jar /opt/app
CMD ["java", "-jar", "/opt/app/japp.jar"]
```

If you were using a base image that was not Ubuntu Focal or Centos 7 you can use the copy command to bring the JDK into your image. E.g to use a Temurin binary inside a debian base image:

```dockerfile
FROM debian
ENV JAVA_HOME=/opt/java/openjdk
COPY --from=eclipse-temurin:11 $JAVA_HOME $JAVA_HOME
ENV PATH="${JAVA_HOME}/bin:${PATH}"
# Continue with your application deployment
RUN mkdir /opt/app
COPY japp.jar /opt/app
CMD ["java", "-jar", "/opt/app/japp.jar"]
```

## What about JRE base images?

The Eclipse Temurin project is currently planning on producing JRE images for OpenJDK8, these will be availble soon. For JDK11+ we recommend using `jlink` to produce a custom runtime:

```dockerfile
# Example of custom Java runtime using jlink in a multi-stage container build
FROM eclipse-temurin:11 as jre-build

# Create a custom Java runtime
RUN $JAVA_HOME/bin/jlink \
         --add-modules java.base \
         --strip-debug \
         --no-man-pages \
         --no-header-files \
         --compress=2 \
         --output /javaruntime

# Define your base image
FROM debian:buster-slim
ENV JAVA_HOME=/opt/java/openjdk
ENV PATH "${JAVA_HOME}/bin:${PATH}"
COPY --from=jre-build /javaruntime $JAVA_HOME

# Continue with your application deployment
RUN mkdir /opt/app
COPY japp.jar /opt/app
CMD ["java", "-jar", "/opt/app/japp.jar"]
```

The `--add-modules` command accepts a comma seperated list of modules. To determine which modules you need you can run the following command with your existing JRE:

```bash
$ jdk-11.0.8+10-jre/bin/java --list-modules
```

We aren't completely ruling out creating JRE's for JDK11+ at this stage, so if a multi-stage dockerfile doesn't work for you then we want to hear your thoughts at https://github.com/adoptium/temurin-build/issues/2683.