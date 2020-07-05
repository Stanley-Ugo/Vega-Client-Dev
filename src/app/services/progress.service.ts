import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProgressService {

  uploadProgress: Subject<any> = new Subject();
  downloadProgress: Subject<any> = new Subject();

  constructor() { }
}

@Injectable()
export class BrowserXhrWithProgress {

}
