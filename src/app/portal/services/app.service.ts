import { Injectable } from '@angular/core';
import { App } from '../models/App.model';
import { Subject } from 'rxjs';
import { MenuService } from './menu.service';

@Injectable()
export class AppService {
  constructor(private menuService: MenuService){ 

  }
  private currentApp = new Subject<App>();

  currentApp$ = this.currentApp.asObservable();

  private getAppsData(): App[] {
    return [
      {
        name: 'admin',
        image: 'cog-144.svg',
        description: 'adminDesc'
      },
      {
        name: 'companies',
        image: 'building-48.png',
        description: 'companiesDesc'
      },
    ];

  }

  setCurrentApp(app: App| undefined) {
    if(app){
      this.currentApp.next(app);
      this.menuService.menuOpen = false;
    }else{
      this.currentApp.next(new App);
      this.menuService.menuOpen = true;
    }
  }

  getApps(): Promise<App[]> {
    return Promise.resolve(this.getAppsData());
  }
}
