// js dep
import 'core-js/client/shim.min.js';
import 'zone.js/dist/zone.js';
import 'reflect-metadata/Reflect.js';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);


