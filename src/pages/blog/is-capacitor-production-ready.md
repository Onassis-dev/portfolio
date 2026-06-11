---
title: "Is Capacitor production ready?"
date: "2026-06-04"
layout: "../../layouts/BlogLayout.astro"
category: "insights"
posted: true
---

I have used [Capacitor](https://capacitorjs.com/) for two production apps now, and I have a few things to say about it.

At first, I thought Capacitor apps were just slow, buggy, and not production ready. If you search for opinions on Google or Reddit, you will find mixed takes, but criticism of Capacitor apps is easy to come by.

However, I have two web applications that are fairly similar: B2B dashboard/CRUD tools where a mobile app was required, since users are much more likely to access their information on their phones.

My first thought was to ship a [PWA](https://web.dev/explore/progressive-web-apps). Add some configuration, an icon, and a manifest, and you already have an installable app — at least in theory. In practice, it was not that simple.

The main problem was [Apple](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html). Their PWA support is very limited. To install an app, you do not get a JavaScript API or a nice button. The user has to tap "More" in the browser, then scroll and find "Add to Home Screen". The flow is so awkward that it almost feels sketchy, like downloading an unofficial app. On Android, by contrast, you can add a custom install button directly inside your app.

Because of this, I had to find a way to publish my apps on the [App Store](https://apps.apple.com/) and [Play Store](https://play.google.com/store). For a serious product, that is a hard requirement.

There are a ton of options for building a mobile app: [Swift](https://www.swift.org/) and [Kotlin](https://kotlinlang.org/) for native development, [Flutter](https://flutter.dev/), [React Native](https://reactnative.dev/), and my preferred choice, [Capacitor](https://capacitorjs.com/).

Capacitor 8 is pretty solid. It has good documentation, performs as well as the web version, integrates native features easily, and builds the same app for Android and iOS.

But the real advantage is the one-codebase architecture. As a solo developer, managing a web version and a separate mobile version of my apps is very complicated. Since my apps are frontend-heavy, building and maintaining the same product twice is almost impossible. With Capacitor, I can develop the web, Android, and iOS versions from a single codebase.

One of the main criticisms of Capacitor is that performance is bad: animations stutter, the UI feels buggy, and rendering is slow. But people use a browser on their phone all the time, and they browse websites without noticing bad performance. In practice, you can ship a small app that is performant, with smooth animations, a solid layout, and plenty of functionality. Usually, if your web app is polished, your Capacitor app will be too.

Obviously, it's not as good as a fully native app. But for dashboards, CRUD tools, charts, and administrative software in general, you can get a great result by adding just a few lines of configuration.

For my apps specifically, Capacitor lets me ship more polished products. I only maintain one frontend, so I can focus all my effort on making it as good as possible. The result is a distinctive UI/UX, solid performance even on older Android devices, and a small bundle size (~5 MB).

Overall, it is clearly the best option for this use case.

Another nice advantage is that I can develop, test, and deploy an iOS app without owning a MacBook, thanks to SaaS platforms that offer cloud builds like [Capawesome](https://capawesome.io/cloud/) and [Capgo](https://capgo.app/).

I believe Capacitor is not only production ready, but actually a solid option for a lot of apps — and the best option for my use case.

If you want to try the apps yourself:

- [**Churchpaq**](https://churchpaq.com)
- [**Capupet**](https://capupet.com)
