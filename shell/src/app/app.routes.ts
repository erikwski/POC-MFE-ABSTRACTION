import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'cdo',
    loadComponent: () =>
      loadRemoteModule('cdo', './cdoMain').then((m) => m.AppComponent),
  },
];
