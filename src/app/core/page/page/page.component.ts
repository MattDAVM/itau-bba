import { Component, ViewChild, AfterViewInit, AfterContentChecked, OnChanges } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';

import { mainMenuAlwaysOpen } from '../../../../environments/environment';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {

  public menuShow: boolean;
  public corNavbar: string;
  public browserIE: boolean;
  public mainOpened: boolean;
  public hiddenBreadcrumb: boolean;
  public complementBreadcrumb: string;

  constructor(
    private router: Router,
  ) {
    this.mainOpened = mainMenuAlwaysOpen;
    this.elementChangeWithRoute();
    this.showMessageBrowserIE();

  }

  // Emit params from component in route actived
  private elementChangeWithRoute() {
    this.router.events.forEach((event) => {
      this.complementBreadcrumb = '';
    });
  }



  changeMenu(value: boolean) {
    this.mainOpened = mainMenuAlwaysOpen ? true : value;
  }

  showMessageBrowserIE() {
    const ua = window.navigator.userAgent;
    const msie = ua.indexOf('MSIE ');

    this.browserIE = msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./);
  }


}
