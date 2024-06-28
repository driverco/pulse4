import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { App } from '../../models/App.model';


@Component({
  selector: 'portal-portal',
  templateUrl: './homebrew.component.html',
  styleUrls: ['./homebrew.component.css']
})
export class HomebrewComponent {
  apps: App[] = [];
  constructor(private menuService: MenuService) {
    this.apps = menuService.getApps();

  }


}



