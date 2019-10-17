# react-native-maps rendering bug on iOS with GoogleMaps v.3+

This is a demo to show a rendering bug of Polygon and Circle objects in [react-native-maps](https://github.com/react-native-community/react-native-maps) on iOS when using GoogleMaps pod with a version of 3.0.3 or above.

By default v0.26.1 uses GoogleMaps pod 3.2.0. To change that version pick any [published version](https://developers.google.com/maps/documentation/ios-sdk/releases) and include it in Line 20 of the [podspec](./react-native-google-maps.podspec).

Run a `rm -rf ./node_modules && npm install && cd ios && pod update && cd ..` to use it. A postinstall command will copy the updated podspec in the right place.

# Status

Styling of Polygon and Cirlce works consistently correct on GoogleMaps 2.5.0, 2.6.0 and 2.7.0, but does not work (after initial render) on any tested version from 3.0.3 to 3.5.0.

# Forcing a correct render

Sometimes the first rendering is correct. Often not.
When the app is loaded in the simulator, and circles are shown, changing a circle property such as `strokeColor` in line 66 of [App.js](./App.js) will result in correctly apllied styles (with FastRefresh). The next render will fall back to the defaults.

# Adding a Google Map Key

The demo works without a key, but to enable map rendering, insert your key into [AppDelegate.m](./ios/PolygonDemo/AppDelegate.m) in line 20.