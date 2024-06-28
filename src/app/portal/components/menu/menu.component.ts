import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuService } from '../../services/menu.service';
import { App } from '../../models/App.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { LangService } from '../../services/lang.service';


@Component({
  selector: 'portal-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  items: MenuItem[] | undefined;
  langList: string[] = [];
  apps: App[] | undefined;
  auth: boolean = false;



  constructor(
    private authService: AuthService,
    private menuService: MenuService,
    private langService: LangService,
    private router: Router
  ) {
    this.apps = menuService.getApps();
    this.items = menuService.getMenu("Admin");

    this.auth = this.authService.isAuthenticated();
    this.langList = langService.langList;
    authService.authenticated$.subscribe((auth) => {
      this.auth = auth;
      //this.linksService.getLinks(auth,this.authService.isAdmin()).then((links) => (this.items = links));
      if (!auth) {
        router.navigate(["/login/_"]);
      }
    });

  }


}
