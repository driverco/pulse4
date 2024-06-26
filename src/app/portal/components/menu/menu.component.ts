import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TranslocoService } from '@jsverse/transloco';
import { MenuService } from '../../services/menu.service';



@Component({
  selector: 'portal-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: MenuItem[] | undefined;
  langArray: string[] = ["en", "es"];
  constructor(
    private translocoService: TranslocoService, private menuService: MenuService
  ) { }



  changeLang(lang: string): void {

    this.translocoService.setActiveLang(lang);
  }
  ngOnInit() {
    this.items = [
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
              command: (event) => { this.changeLang('en') }
            },
            {
              key: 'set-lang-es',
              label: 'esp',
              icon: 'es',
              command: (event) => { this.changeLang('es') }

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
  }

}
