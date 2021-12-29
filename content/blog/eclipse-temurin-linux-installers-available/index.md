---
title: Eclipse Temurin Linux (RPM/DEB) installer packages
date: "2021-12-30T12:00:00+00:00"
author: georgeadams
description: Eclipse Temurin RPM and DEB packages are now available for installing on your favourite Linux distribution.
tags:
  - Temurin
---

Eclipse Temurin RPM and DEB packages are now available for installing on your favourite Linux distribution.

## Eclipse Temurin Package Names
The following name schema is being used:

```
temurin-<version>-jdk
e.g temurin-17-jdk or temurin-8-jdk
```

## Deb installation on Debian or Ubuntu

You need the codename of your Debian or Ubuntu version. It is usually recorded in `/etc/os-release` and can be extracted on Debian by running:

```bash
cat /etc/os-release | grep VERSION_CODENAME | cut -d = -f 2
```

and on Ubuntu by running:

```bash
cat /etc/os-release | grep UBUNTU_CODENAME | cut -d = -f 2
```

1. Ensure the necessary packages are present:
    ```bash
    sudo apt-get install -y wget apt-transport-https gnupg
    ```
1. Download the Eclipse Adoptium GPG key:
    ```bash
    wget -O - https://packages.adoptium.net/artifactory/api/gpg/key/public | sudo apt-key add -
    ```
1. Configure the Eclipse Adoptium apt repository by replacing the values in angle brackets:
    ```bash
    echo "deb https://packages.adoptium.net/artifactory/deb <codename> main" | sudo tee /etc/apt/sources.list.d/adoptium.list
    ```
1. Install the Temurin version you require:
    ```bash
    apt-get update # update if you haven't already
    apt-get install temurin-17-jdk
    ```

## Centos/Rhel/Fedora Instructions

1. Add the RPM repo to `/etc/yum.repos.d/adoptium.repo` making sure to change the Centos version if you are not using Centos 8. RPM’s are also available for Rhel and Fedora. To check the full list of versions supported take a look at https://packages.adoptium.net/ui/repos/tree/General/rpm.
    ```bash
    cat <<EOF > /etc/yum.repos.d/adoptium.repo
    [Adoptium]
    name=Adoptium
    baseurl=https://packages.adoptium.net/artifactory/rpm/centos/8/$(uname -m)
    enabled=1
    gpgcheck=1
    gpgkey=https://packages.adoptium.net/artifactory/api/gpg/key/public
    EOF
    ```
1. Install the Temurin version you require:
    ```bash
    yum update # update if you haven't already
    yum install temurin-17-jdk
    ```

## openSUSE/Sles Instructions

1. Import the RPM repo making sure to change the openSUSE version if you are not using OpenSUSE 15.2. RPM’s are also available for Sles 12 and 15. To check the full list of versions supported take a look at https://packages.adoptium.net/ui/repos/tree/General/rpm.
    ```bash
    zypper ar -f https://packages.adoptium.net/artifactory/rpm/opensuse/15.2/$(uname -m) adoptium
    ```
1. Install the Temurin version you require:
    ```bash
    zypper install temurin-17-jdk
    ```

Please raise any issues over at https://github.com/adoptium/installer/issues.