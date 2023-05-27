import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonService } from 'src/app/common-service/common.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @ViewChild('openSideNav', { static: true }) openSideNav!: ElementRef;

  constructor(public commonService: CommonService) { }

  ngOnInit() {
    this.commonService.sideNavFlag = this.openSideNav;
  }

}
