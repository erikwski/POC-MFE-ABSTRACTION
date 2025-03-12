// src/data-service.ts
import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";


export abstract class DataService {
  abstract fetchData(): Observable<any>;
}

