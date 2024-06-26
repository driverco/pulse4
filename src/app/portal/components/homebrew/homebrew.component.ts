import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { App } from '../../models/App.model';
import { AppService } from '../../services/app.service';


@Component({
  selector: 'portal-portal',
  templateUrl: './homebrew.component.html',
  styleUrls: ['./homebrew.component.css']
})
export class HomebrewComponent {
  currentApp: App = new App;
  apps: App[] = [];
  constructor(private menuService: MenuService, private appService: AppService) {
    appService.getApps().then(data => {
      this.apps = data;
    });
    appService.currentApp$.subscribe((app) => {
      this.currentApp = app;
    });

  }
  
  callApp(app:App){
    this.appService.setCurrentApp(app);
  }

}



