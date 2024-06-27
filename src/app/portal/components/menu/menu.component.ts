import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuService } from '../../services/menu.service';
import { App } from '../../models/App.model';

@Component({
  selector: 'portal-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  items: MenuItem[] | undefined;
  langArray: string[] = ["en", "es"];
  apps: App[] | undefined;

  constructor(
    private menuService: MenuService
  ) { 
    this.apps = menuService.getApps();
    this.items = menuService.getMenu("Admin");
  }


}
