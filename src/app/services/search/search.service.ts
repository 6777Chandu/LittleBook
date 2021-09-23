import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor() {}
  searchName: BehaviorSubject<string> = new BehaviorSubject<string>('');
}
