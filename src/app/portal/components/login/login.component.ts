import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MenuService } from '../../services/menu.service';
import { MenuItem } from 'primeng/api';
import { LangService } from '../../services/lang.service';

@Component({
  selector: 'portal-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  error!: String;
  usernm!: String;
  paswd!: String;
  langList: MenuItem[] =[];

  constructor(private authService: AuthService, private langService:LangService, private menuService: MenuService, private router: Router) {
    this.langList = this.menuService.langs;
   }
  


  private _errorType: string = '';
  @Input() set errorType(errorType: string) {
    this._errorType = errorType;
    this.updateErrorType(this._errorType);
  }
  get errorType(): string {
    return this._errorType;
  }
  updateErrorType(errorCode: string) {
    this.error = (() => {
      switch (errorCode) {
        case 'unauthorized':
          return 'No estás autorizado para ver esta página';
          break;
        case 'invalidData':
          return 'Usuario o clave no válido';
          break;
        case 'invalidUsername':
          return 'Usuario no válido';
          break;
        case 'invalidPassword':
          return 'contraseña requerida';
          break;

        default:
          return '';
      }
      return '';
    })();
  }

  login() {
    this.errorType = '';
    if (!this.usernm) {
      this.errorType = 'invalidUsername';
      return;
    }
    if (this.usernm.length < 1) {
      this.errorType = 'invalidUsername';
      return;
    }
    if (!this.paswd) {
      this.errorType = 'invalidPassword';
      return;
    }
    if (this.paswd.length < 1) {
      this.errorType = 'invalidPassword';
      return;
    }
    this.authService.authenticate(this.usernm, this.paswd).then((data) => {
      if (data === true) {
        this.errorType = 'authOk';
        this.menuService.menuOpen =false;
        this.router.navigate(["/home"]);
      } else {
        this.errorType = 'invalidData';
      }
    });

  }
  changeLang(lang: string): void {
    this.langService.changeLang(lang);
  }

}
