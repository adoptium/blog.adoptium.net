---
title: Verifying GPG signatures for Temurin downloads
date: "2022-07-27T16:00:00+00:00"
author: sxa
description: How to verify GPG signatures of the Temurin artifacts using the Eclipse public key
tags:
  - Temurin
  - Security
---

With the latest releases from July 2022 (8u342, 11.0.16, 17.0.4 and 18.0.2)
we provide GPG signatures along with our releases which you can use to
verify that the downloads you have are genuine and have not been tampered
with since we built them.  This gives a quick crib sheet of what you need to
do to verify the downloads.

## What is GPG signing?

## You are already providing SHA256 checksums. Why do I need this?

While going into the details of public key encryption is beyond the scope of
this article, if there was a man in the middle (MITM) attach that resulted
in the downloads you receive being compromised, then the corresponding SHA
checksums could also be compromised.  GPG signing avoids this issue by using
a separately certified signature which you can initially trust and then verify
subsequent downloads.

## What do I need to do to obtain the signatures?

The link to the signatures is provided in the metadata for our releases.  In
the following examples I will use JDK17 but you can change the calls
appropriately for other versions:

The data file that contains the URL of the signatures can be obtained by
downloading the json as follows:

`curl 'https://api.adoptium.net/v3/assets/feature_releases/17/ea?page=0&page_size=1' > adopt.json`

Once you've downloaded that you need to extract the `link` and
`signature_link` entries using your preferred JSON parsing tool.  The
information you want is in the `binaries[0].package.link` and
`binaries[0].package.signature_link` section of the file for the most recent
version.

For automation purposes, I will give an example using the
[jq](https://stedolan.github.io/jq/) command line JSON parsing tool to pull
out the information for Linux/x64 and download the required artifacts - the
product download and the GPG signature link - using the `curl` command
(Examples for linux/x64, change accordingly for other platforms)

```
jq '.[0].binaries[] | select(.architecture=="x64") | select (.os=="linux") | select (.image_type=="jdk") .package.link' adopt.json | xargs curl -LO
jq '.[0].binaries[] | select(.architecture=="x64") | select (.os=="linux") | select (.image_type=="jdk") .package.signature_link' adopt.json | xargs curl -LO
```

Note that as mentioned in the previous section, we have previously also
provided the sha256sums which can be obtained from the JSON file with

```
jq '.[0].binaries[] | select(.architecture=="x64") | select (.os=="linux") | select (.image_type=="jdk") .package.checksum' adopt.json
```

If you have not used them before, The SHA checksums can be verified against
the output from running the `sha256sum` command against the binary artifact.
The SHA checksum verifies that the downloads have occurred without errors,
but the GPG checksums additionally verify the source of the binaries is from
the Adoptium project

## How do I verify the signatures once I have them?

You will need to have the `gpg` tool installed in order to verify the
signatures.  You can then run the following command to check the signature by supplying the signature file and the corresponding file which the signature is for e.g.:

`gpg --verify OpenJDK17U-jdk_x64_linux_hotspot_17.0.4_8.tar.gz.sig OpenJDK17U-jdk_x64_linux_hotspot_17.0.4_8.tar.gz`

If you do not currently have the public signing key you will get a message such as this:

```
gpg: directory '/home/sxa/.gnupg' created
gpg: keybox '/home/sxa/.gnupg/pubring.kbx' created
gpg: Signature made Mon Jul  4 18:20:31 2022 UTC
gpg:                using RSA key 3B04D753C9050D9A5D343F39843C48A565F8F04B
gpg: Can't check signature: No public key
```

To resolve this message you need to acquire the public key that was used to
sign the binaries.  You can download it from a trusted GPG server, for
example to use the Ubuntu key servers run this command:

`gpg --keyserver keyserver.ubuntu.com --recv-keys 3B04D753C9050D9A5D343F39843C48A565F8F04B`

If you then run the verify command you will get a message indicating that the newly imported key has not been trusted:

```
gpg: Good signature from "Adoptium GPG Key (DEB/RPM Signing Key)
<temurin-dev@eclipse.org>" [unknown] gpg: WARNING: This key is not certified
with a trusted signature!  gpg: There is no indication that the signature
belongs to the owner.
```
While the "Good signature" message gives you some
confidence that the download is valud, to fully trust the certificate and
remove the final warning you can run the following then follow the prompts
to grant ultimate trust to it:

```
gpg --edit-key 3B04D753C9050D9A5D343F39843C48A565F8F04B trust
```
The verification should then succeed as follows:
```
gpg: Signature made Mon Jul  4 18:20:31 2022 UTC
gpg:                using RSA key 3B04D753C9050D9A5D343F39843C48A565F8F04B
gpg: checking the trustdb
gpg: marginals needed: 3  completes needed: 1  trust model: pgp
gpg: depth: 0  valid:   1  signed:   0  trust: 0-, 0q, 0n, 0m, 0f, 1u
gpg: Good signature from "Adoptium GPG Key (DEB/RPM Signing Key) <temurin-dev@eclipse.org>" [ultimate]
```

## OK I know what commands to run, but what are the implications of those steps?

For more information on GPG signing and the impliations of the different steps in the process above, see the
[integrity checking article from Eclipse](https://wiki.eclipse.org/Platform-releng/How_to_check_integrity_of_downloads#Example_of_using_GPG_with_the_checksums_files)
