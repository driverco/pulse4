import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { App } from '../../models/App.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { LangService } from '../../services/lang.service';
import { Menu } from '../../models/Menu.model';


@Component({
  selector: 'portal-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: Menu[] | undefined;
  langList: string[] = [];
  auth: boolean = false;

  ngOnInit(): void {
    this.menuService.mainMenu$.subscribe((items) => {
      this.items = items;
    });
    
  }

  constructor(
    private authService: AuthService,
    private menuService: MenuService,
    private langService: LangService,
    private router: Router
  ) {




    this.auth = this.authService.isAuthenticated();
    this.langList = langService.langList;
    authService.authenticated$.subscribe((auth) => {
      this.auth = auth;
      //this.linksService.getLinks(auth,this.authService.isAdmin()).then((links) => (this.items = links));
      if (!auth) {
        router.navigate(["/login/"]);
      }
    });

  }
  clearApp(){
    this.menuService.setCurrentApp(new App);
  }
}
