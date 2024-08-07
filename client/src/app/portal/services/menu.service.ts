import { Injectable } from '@angular/core';
import { LangService } from './lang.service';
import { App } from '../models/App.model';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { Menu } from '../models/Menu.model';

@Injectable({ providedIn: 'root' })
export class MenuService {
  constructor(private langService: LangService, private authService: AuthService, private router: Router) {
    this.currentApp.next({ name: localStorage.getItem('app') || '' });
    this.menu.next(this.getMenuData({ name: localStorage.getItem('app') || '' }));
   

  }

  private currentApp = new Subject<App>();

  currentApp$ = this.currentApp.asObservable();

  setCurrentApp(app: App | undefined) {
    console.log(app);
    if (app) {
      this.currentApp.next(app);
      localStorage.setItem('app', app.name);
    } else {
      localStorage.setItem('app', '');
      this.currentApp.next(new App);
    }
    this.menu.next(this.getMenuData(app));
    this.router.navigate(['/home']);
  }



  langs: Menu[] = [{
    key: 'set-lang-en',
    label: 'eng',
    icon: 'en',
    command: () => { this.langService.changeLang('en') }
  },
  {
    key: 'set-lang-es',
    label: 'esp',
    icon: 'es',
    command: () => { this.langService.changeLang('es') }
  }];

  private mainMenu = new BehaviorSubject<Menu[]>(this.getMainMenuData());

  mainMenu$ = this.mainMenu.asObservable();



  private menu = new BehaviorSubject<Menu[]>(this.getMenuData(undefined));

  menu$ = this.menu.asObservable();

  private getMainMenuData(): Menu[] {
    let mainMenuData: Menu[] = [];
    Array.prototype.push.apply(mainMenuData, [
      {
        key: 'houston',
        label: 'houston',
        icon: 'img/Houston.svg',
        command: () => { this.setCurrentApp({ name: "houston", description: "", image: "" }) }
      },
      {
        key: '05',
        label: 'logout',
        icon: 'img/Logout.svg',
        command: () => { this.authService.signout() }
      }

    ]);
    return mainMenuData;

  }

  private getMenuData(app: App | undefined): Menu[] {
    let menuData: Menu[] = [];
    if (app?.name === "houston") {
      Array.prototype.push.apply(menuData, [
        {
          key: 'companies',
          label: 'companies',
          items: [{
            key: 'compa01',
            label: 'defineCompanies',
            icon: 'pi pi-languaje'
          },
          {
            key: 'compa02',
            label: 'defineSets',
            icon: 'pi pi-languaje'
          },
          {
            key: 'compa03',
            label: 'setLicences',
            icon: 'pi pi-languaje'
          }
          ]

        },
      ]);

    };

    return menuData;

  }

}