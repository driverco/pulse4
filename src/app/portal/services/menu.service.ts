import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LangService } from './lang.service';
import { App } from '../models/App.model';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class MenuService { 
   constructor(private langService:LangService, private authService:AuthService, private router: Router){
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

   private apps: App[] = [
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
    private menu =  [
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
        command: () => { this.authService.signout()}
      }

    ];


    getApps() : App[]{
      return this.apps;
   }
   getMenu(app: string) : MenuItem[]{
      return this.menu;
   }
   

}