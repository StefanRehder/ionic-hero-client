# Simple app created with Angular and Ionic

## Description

This simple app was created with Angular 5.2.11 and Ionic 4.10. The UI was implemented with [Ionic Framework](https://ionicframework.com/) and [Ionicons](https://ionicons.com/).

## Features
  * Fetch and show a list of heroes
  * Delete a hero
  * Add a new hero (or overwrite an existing hero)

## Requirements
  * [Node.js](https://nodejs.org/)
  * [Ionic CLI](https://ionicframework.com/getting-started#cli)
  * [The Hero RESTful service must be running locally](https://github.com/StefanRehder/dotnetcore-simple-nancy-example)
  * [Xcode is needed for iOS](https://developer.apple.com/xcode/)
  * [Android Studio is needed for Android](https://developer.android.com/studio/)

## Getting started

```shell
npm install
```

### Run in browser

```shell
# Start the Hero service linked above before running this command
npm run start
```

### Run on iOS
Confirmed to work out of the box on iPhone X iOS Simulator.

```shell
# Start the Hero service linked above before running this command
npm run ios:start
```

### Run on Android
Confirmed to work on Nexus 5X Emulator with Android 7.1.1. However, it is necessary to change the connection url to the backend in the code from localhost to the local ip of the computer in order to make it work.

```shell
# Start the Hero service linked above before running this command
npm run android:start
```

