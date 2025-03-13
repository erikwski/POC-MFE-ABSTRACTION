// src/data-service.ts
import { Observable } from "rxjs";


export abstract class DataService {
  abstract fetchData(): Observable<any>;
}

