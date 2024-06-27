import { Injectable } from '@angular/core';
import { App } from '../models/App.model';
import { MenuItem } from 'primeng/api';
import { LangService } from './lang.service';

@Injectable({providedIn: 'root'})
export class MenuService { 
   constructor(private langService:LangService){}
   menuOpen: boolean = true;
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
            items: [{
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
            }]

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
      }

    ];


    getApps() : App[]{
      return this.apps;
   }
   getMenu(app: string) : MenuItem[]{
      return this.menu;
   }
   

}