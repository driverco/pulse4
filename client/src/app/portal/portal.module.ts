import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';
import { MenubarModule  } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { ImageModule } from 'primeng/image';
import { SplitterModule } from 'primeng/splitter'
import { PanelMenuModule } from 'primeng/panelmenu';
import { TabViewModule } from 'primeng/tabview';
import { DataViewModule } from 'primeng/dataview';
import { CardModule } from 'primeng/card';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FieldsetModule } from 'primeng/fieldset'
import { PortalComponent } from './components/portal/portal.component';
import { PortalHeaderComponent } from './components/portalheader/portalheader.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/notfound/notfound.component';
import { LoginComponent } from './components/login/login.component';
import { QrCodeModule } from 'ng-qrcode';
import { MenuService } from './services/menu.service';
import { LangService } from './services/lang.service';
import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';
import { HomebrewComponent } from './components/homebrew/homebrew.component';
import { QRCodesComponent } from './components/qrcodes/qrcodes.component';


@NgModule({
  declarations: [PortalComponent, PortalHeaderComponent, MenuComponent, HomeComponent, NotFoundComponent, LoginComponent, HomebrewComponent, QRCodesComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
    MenuModule,
    RippleModule,
    AvatarModule,
    ButtonModule,
    BadgeModule,
    ImageModule,
    PanelMenuModule,
    SplitterModule,
    TabViewModule,
    DataViewModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    FormsModule,
    FieldsetModule,
    TranslocoModule,
    QrCodeModule
  ],
  providers: [MenuService, LangService, AuthService, UsersService
  ],
  exports: [PortalComponent],
})
export class PortalModule {}
