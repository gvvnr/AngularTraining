import { Injectable } from '@angular/core';
import {DocDetails} from './home-page/home-page.component';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendDataService {
  private subject = new Subject<any>();

  constructor() { }

  storeData(details: DocDetails[]) {
    console.log(details + 'ffsda');
    this.subject.next(details);


  }
  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
