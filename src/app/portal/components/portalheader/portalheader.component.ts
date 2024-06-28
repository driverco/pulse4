import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'portal-portalheader',
  templateUrl: './portalheader.component.html',
  styleUrls: ['./portalheader.component.css']
})
export class PortalHeaderComponent{
  auth: boolean = false;
  langBrowser:string|undefined="";
   toggleMenu() {
    this.menuService.menuOpen = !this.menuService.menuOpen;
  }
  
  constructor(private menuService: MenuService, private authService: AuthService, private router: Router) {
    this.auth = this.authService.isAuthenticated();
  }
  goHome(){
    console.log("goHome");
    this.router.navigateByUrl("/");   
  }
}




