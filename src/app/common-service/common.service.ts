import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public sideNavFlag: any;
  constructor() { }
  public openSideNav() {
    this.sideNavFlag.toggle();
  }
}
