import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalComponent } from './components/portal/portal.component';
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';
import { MenubarModule  } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { ImageModule } from 'primeng/image';
import { SplitterModule } from 'primeng/splitter'
import { PanelMenuModule } from 'primeng/panelmenu';
import { TranslocoModule } from '@jsverse/transloco';
import { PortalHeaderComponent } from './components/portalheader/portalheader.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuService } from './services/menu.service';


@NgModule({
  declarations: [PortalComponent, PortalHeaderComponent, MenuComponent
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
    TranslocoModule
  ],
  providers: [MenuService
  ],
  exports: [PortalComponent],
})
export class PortalModule {}
