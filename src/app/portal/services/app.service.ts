import { Injectable } from '@angular/core';
import { App } from '../models/App.model';
import { Subject } from 'rxjs';

@Injectable()
export class AppService {
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

  setCurrentApp(app: App) {
    this.currentApp.next(app);
  }

  getApps(): Promise<App[]> {
    return Promise.resolve(this.getAppsData());
  }
}
