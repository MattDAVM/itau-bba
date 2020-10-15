import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { load } from './shared/components/load/load.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'itau-talk-more';

  constructor(router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart)
        load.show();

      if (event instanceof NavigationEnd)
        load.hide();

    });
  }
}
