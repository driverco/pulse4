import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { App } from '../../models/App.model';
import { Menu } from '../../models/Menu.model';


@Component({
  selector: 'portal-portal',
  templateUrl: './homebrew.component.html',
  styleUrls: ['./homebrew.component.css']
})
export class HomebrewComponent {
  currentApp: App = { name: localStorage.getItem('app') || '' };
  menuItems: Menu[] = [];
  constructor(private menuService: MenuService ) {
    this.menuService.currentApp$.subscribe((app) => {
      this.currentApp = app;
    });
    this.menuService.menu$.subscribe((menu) => {
      this.menuItems = menu;
    });

  }
  
}



