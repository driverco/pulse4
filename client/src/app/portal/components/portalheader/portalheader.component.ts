import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { App } from '../../models/App.model';


@Component({
  selector: 'portal-portalheader',
  templateUrl: './portalheader.component.html',
  styleUrls: ['./portalheader.component.css']
})
export class PortalHeaderComponent {
  title: string = "";
  auth: boolean = false;
  currentApp: App = new App;
  langBrowser: string | undefined = "";

  constructor(private menuService: MenuService, private authService: AuthService, private router: Router) {
    this.auth = this.authService.isAuthenticated();
    authService.authenticated$.subscribe((auth) => {
      this.auth = auth;
      //this.linksService.getLinks(auth,this.authService.isAdmin()).then((links) => (this.items = links));
    });
  }
  goHome() {
    this.menuService.setCurrentApp(undefined);
    this.router.navigateByUrl("/");
  }
}




