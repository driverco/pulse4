import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'portal-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent{
  get menuOpen(): boolean {
    if(this.authService.isAuthenticated()){
      return this.menuService.menuOpen;
    }
    return false;
  }

  constructor(
    private menuService: MenuService, private authService:AuthService)
  { }

}



