"use strict";
// js dep
require("core-js/client/shim.min.js");
require("zone.js/dist/zone.js");
require("reflect-metadata/Reflect.js");
const platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
const app_module_1 = require("./app.module");
const platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=bootstrap.js.map