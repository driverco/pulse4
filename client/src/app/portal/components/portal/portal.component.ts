import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'portal-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent{

  constructor(
    private menuService: MenuService, private authService:AuthService)
  { }

}



