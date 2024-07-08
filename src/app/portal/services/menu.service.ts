import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LangService } from './lang.service';
import { App } from '../models/App.model';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MenuService {
  constructor(private langService: LangService, private authService: AuthService, private router: Router) {
    this.menuOpen = false;
  }
  menuOpen: boolean = false;

  langs: MenuItem[] = [{
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


  private menu = new BehaviorSubject<MenuItem[]>(this.getMenuData(undefined));

  menu$ = this.menu.asObservable();


  refreshMenu(app: App | undefined): void {
    this.menu.next(this.getMenuData(app));
  }

  private getMenuData(app: App | undefined): MenuItem[] {
    let menuData: MenuItem[] = [];
    if (app?.name === "companies") {
      Array.prototype.push.apply(menuData, [
        {
          key: 'compa',
          label: 'apps.companies',
          items: [
            {
              key: 'compa01',
              label: 'companies.defineCompanies',
              icon: 'pi pi-languaje'
            },
            {
              key: 'compa02',
              label: 'companies.defineSets',
              icon: 'pi pi-languaje'
            },
            {
              key: 'compa03',
              label: 'companies.setLicences',
              icon: 'pi pi-languaje'
            }

          ]
        },
      ]);

    }
    Array.prototype.push.apply(menuData, [
      {
        key: 'set',
        label: 'settings',
        items: [
          {
            key: 'set-lang',
            label: 'languaje',
            icon: 'pi pi-languaje',
            items: this.langs

          }
        ]
      },
      {
        separator: true
      },
      {
        key: '04',
        label: 'messages',
        icon: 'pi pi-inbox',
        badge: '2'
      },
      {
        key: '05',
        label: 'logout',
        icon: 'pi pi-sign-out',
        command: () => { this.authService.signout() }
      }

    ]);
    return menuData;

  }

}