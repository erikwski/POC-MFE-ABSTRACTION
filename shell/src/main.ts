import { initFederation } from '@angular-architects/native-federation';

initFederation({
  cdo: 'http://localhost:4444/remoteEntry.json',
})
  .catch((err) => console.error(err))
  .then((_) => import('./bootstrap'))
  .catch((err) => console.error(err));
