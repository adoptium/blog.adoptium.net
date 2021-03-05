---
title: Transition to Eclipse - An Update
date: "2021-03-06T12:00:00+00:00"
author: tsc
description: An update on our transition from AdoptOpenJDK to Eclipse Adoptium.
tags:
  - AdoptOpenJDK
  - Eclipse Foundation
---

It has been nearly nine months since we originally [announced](/2020/06/adoptopenjdk-to-join-the-eclipse-foundation/) that
AdoptOpenJDK is moving to the Eclipse Foundation, and changing our name to become the
[Eclipse Adoptium project](https://projects.eclipse.org/projects/adoptium).  Since that announcement there has been a great
deal of work behind the scenes by many people to prepare for the move.
Our [last update](https://blog.adoptopenjdk.net/2020/12/eclipse-adoptium-projects-ready-for-community-review/) on plans
and the road ahead was in December, so time to give a quick update on progress.

Throughout the transition to Eclipse we have continued to [deliver high quality runtimes](https://adoptopenjdk.net/releases.html)
to millions of end users who depend upon AdoptOpenJDK to power their production workloads.  Our users are always at the
forethought of everything that we do, and we want the transition to be as smooth as possible, so we won’t rush.

As we described earlier, the [Eclipse Foundation](https://www.eclipse.org/) is a good fit for AdoptOpenJDK’s mission.  Eclipse
has a well-established governance model and rigorous development processes that match our ideals.  Much of the unseen work over
the last few months has been spent ensuring that all the necessary legal agreements and governance structures are in place at
Eclipse that retain the character and spirit of the AdoptOpenJDK community.

Part of the new structure we are establishing at Eclipse is the
[Adoptium Working Group](https://www.eclipse.org/org/workinggroups/adoptium-charter.php).  The working group’s role is to provide
vital vendor-neutral governance structure, intellectual property management, information technology infrastructure, development
process oversight, and ecosystem growth to all the projects at Eclipse Adoptium.  Membership of the working group is a serious
undertaking, and we are proud to have an important set of founding members be part of that group.

As part of the migration, Eclipse Adoptium has been structured into technology projects.
[Eclipse Temurin](https://projects.eclipse.org/projects/adoptium.temurin) provides the build infrastructure and coordination of
our releases across the widest range of platforms and versions.  [Eclipse AQAvit](https://projects.eclipse.org/projects/adoptium.aqavit)
implements the accomplishment of enterprise-grade quality, spanning functional correctness, security, and performance.
[Eclipse Temurin-Compliance](https://projects.eclipse.org/proposals/eclipse-temurin-compliance) ensures the binaries we produce
are compatible with the applicable Java SE specification.

The existing AdoptOpenJDK code is presently going through Eclipse’s intellectual property review as it transitions into these
new projects.  As code moves between Github repositories as part of that process, we continue to develop it, run our builds,
and release updates to our users as usual.  The goal is to transition the home of our code without disruption to developers or users.

In parallel to the technical work we are transferring ownership of our key resources to the Eclipse Foundation.  These resources
cover a broad range of categories, from cash in the bank to cloud account control, and from domain names to private key secrets.
By grounding these fundamental project assets in the Eclipse Foundation no single vendor has control of Adoptium’s future.  We
are passionate about protecting the neutrality of our open source efforts to ensure Adoptium’s runtimes remain secure, open,
and free for everyone forever.

As we transition these resources we are also starting to build awareness of our new Adoptium brand.  This is a critical area where
we have been lucky to have strong community engagement, and have also engaged professional advice to guide us.  AdoptOpenJDK
is a highly recognizable brand at present, with a great reputation that we are grateful to have earned over the years.  As we
accelerate our growth at Eclipse we wish to cement that with a new brand that is reflected in our logo, website, documentation,
and user engagement efforts.  Expect to see more on this over the coming weeks as we roll out our new look.

Finally, the success of AdoptOpenJDK can be attributed to a number of factors, but they are all rooted in the innovation and
creativity of our exceptional community members.  We continue to be very open to new ideas, trying things, and exploring
possibilities.  We are not afraid to try ideas that don’t work out, and believe that the wisdom of the crowd serves us well.
Let us know what you are thinking about on [Slack](https://adoptopenjdk.net/slack) or our 
[mailing lists](https://accounts.eclipse.org/mailing-list/adoptium-pmc).

Hopefully that gives you an idea about what has been, and continues to be happening as we transition from AdoptOpenJDK to
Eclipse Adoptium.  This is an important time in the project's growth, and a very exciting time to be part of the community.  If you
see something that looks cool, or wrong, or have a better idea for how we should be doing something,
[let us know](https://adoptopenjdk.net/getinvolved.html).  If you want fun and want to engage in any aspect of what we are doing,
we always welcome people who can write, draw, code, speak, review, test, organize, and critique.
