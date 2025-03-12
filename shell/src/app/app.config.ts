import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { DataService } from 'clm-shared';

import { routes } from './app.routes';
import { DataShellService } from './data.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    { provide: DataService, useClass: DataShellService },
  ],
};
