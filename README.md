# Webtrekk Smart Pixel Angular

[Site](https://www.webtrekk.com/) |
[Docs](https://docs.webtrekk.com/display/WSP/) |
[Support](https://support.webtrekk.com/) |
[Changelog](./CHANGELOG.md) |

## Installation

Using npm:

```shell
$ npm i webtrekk-smart-pixel-angular
```

## Integration

* Create a class and use this as interface between your application and the Webtrekk Smart Pixel

```js
// load the minified build
import webtrekkSmartPixelAngular from "webtrekk-smart-pixel-angular";

// load the debug build
import webtrekkSmartPixelAngular from "webtrekk-smart-pixel-angular/debug";

/**
 * @constructor
 */
var ApplicationTracking = function() {
	// ...
};

export default new ApplicationTracking();
```

* Implement all your tracking functionalities which you need for the application

```js
var ApplicationTracking = function() {
    this.init = function() {
        webtrekkSmartPixelAngular.call(function(wtSmart) {
            wtSmart.init.set({
                trackId: '123451234512345',
                trackDomain: 'data.wt-eu02.net'
            });
        });
    };

    this.page = function(name, data) {
        webtrekkSmartPixelAngular.call(function(wtSmart) {
            wtSmart.page.data.set(name, data);
        });
    };

    this.action = function(data) {
        webtrekkSmartPixelAngular.call(function(wtSmart) {
            wtSmart.action.data.set(data);
        });
    };

    this.track = function() {
        webtrekkSmartPixelAngular.call(function(wtSmart) {
            wtSmart.track();
        });
    };

    this.trackPage = function() {
        webtrekkSmartPixelAngular.call(function(wtSmart) {
            wtSmart.trackPage();
        });
    };

    this.trackAction = function() {
        webtrekkSmartPixelAngular.call(function(wtSmart) {
            wtSmart.trackAction();
        });
    };
};
```

* Import *ApplicationTracking* in all your **Components**, which should be tracked or provide tracking data

```js
// app.component

import { Component, OnInit } from "@angular/core";
import { applicationTracking } from "./tracking/ApplicationTracking";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})

export class AppComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        applicationTracking.init();
    }
}
```

```js
// index.component

import { Component, OnInit } from "@angular/core";
import { applicationTracking } from "./tracking/ApplicationTracking";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"]
})

export class IndexComponent implements OnInit {
    language = 'en';

    constructor() {}

    ngOnInit() {
        applicationTracking.page(language + '.index');
        applicationTracking.trackPage();
    }
}
```
