import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';


@Component({
  selector: 'portal-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent{
  get menuOpen(): boolean {
    return this.menuService.menuOpen;
  }

  constructor(
    private menuService: MenuService
  ) { }

}



