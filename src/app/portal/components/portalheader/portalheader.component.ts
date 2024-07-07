import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { AppService } from '../../services/app.service';
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
  toggleMenu() {
    this.menuService.menuOpen = !this.menuService.menuOpen;
  }

  constructor(private menuService: MenuService, private authService: AuthService, private appService: AppService, private router: Router) {
    this.auth = this.authService.isAuthenticated();
    appService.currentApp$.subscribe((app) => {
      this.currentApp = app;
      //this.linksService.getLinks(auth,this.authService.isAdmin()).then((links) => (this.items = links));
    });
    authService.authenticated$.subscribe((auth) => {
      this.auth = auth;
      //this.linksService.getLinks(auth,this.authService.isAdmin()).then((links) => (this.items = links));
    });
  }
  goHome() {
    this.appService.setCurrentApp(undefined);
    this.router.navigateByUrl("/");
  }
}




