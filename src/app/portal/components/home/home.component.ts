import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';


@Component({
  selector: 'portal-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  get menuOpen(): boolean {
    return this.menuService.menuOpen;
  }

  constructor(
    private menuService: MenuService
  ) { }

}



