import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';


@Component({
  selector: 'portal-portalheader',
  templateUrl: './portalheader.component.html',
  styleUrls: ['./portalheader.component.css']
})
export class PortalHeaderComponent{
   toggleMenu() {
    this.menuService.menuOpen = !this.menuService.menuOpen;
  }
  
  constructor(private menuService: MenuService) {
  
  }
   
}




