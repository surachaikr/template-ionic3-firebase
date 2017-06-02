# TemplateIonic3Firebase

## How to use this template

*This template can run on web with service worker and android. If you would like to run on ios, please add platform ios before.

Please take care a service worker setting at browser development tool because it make a cache your transplied code.

### With the Ionic CLI:

If you do the first load, please run commands as below:

```bash
$ npm install
$ ionic cordova prepare android
$ ionic cordova prepare browser
$ ionic start
```

Then, to run it, cd into `TemplateIonic3Firebase` and run:

```bash
$ ionic serve
or
$ ionic cordova run android
```

If you would like to run on ios, please add platform
```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```
