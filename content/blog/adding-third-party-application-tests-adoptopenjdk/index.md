---
title: Adding third party application tests at AdoptOpenJDK
date: "2018-02-09T23:13:37+00:00"
author: mesbahalam
description: Adding third party application tests into the automated testing at AdoptOpenJDK is easier now than it has ever been!
tags:
  - test
---
Adding third party application tests into the automated testing at AdoptOpenJDK is easier now than it has ever been!

There exists a template project in the [openjdk-test ](https://github.com/AdoptOpenJDK/openjdk-tests/)repository that can be customized to fit any third party application and run as part of the [External Tests builds](https://ci.adoptopenjdk.net/view/External%20tests/) at Adopt.

The thirdparty_containers [README](https://github.com/AdoptOpenJDK/openjdk-tests/blob/master/thirdparty_containers/README.md) file outlines the steps involved in this process.

For a practical example, you may also want to go over the following demo. It shows how we have added the Lucene-Solr nightly smoke test to the list of third party application tests at Adopt.

<iframe width="560" height="315" src="https://www.youtube.com/embed/OA7y2XLy3xg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Please feel free to [grow the list of third party application tests we run in AdoptOpenJDK](https://github.com/AdoptOpenJDK/openjdk-tests/issues/172).

For any questions or queries, reach out to us on our [testing slack channel](https://adoptopenjdk.slack.com/messages/C5219G28G).
