
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.modules';
import {enableProdMode} from '@angular/core';

if (process.env.ENV === 'production') {
    enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);