// src/app/shell/data-shell.service.ts
import { Injectable } from '@angular/core';
import { DataService } from 'clm-shared';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataColibriService implements DataService {
  fetchData(): Observable<any> {
    return of('Data from Colibri shell');
  }
}
