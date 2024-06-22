import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalComponent } from './components/portal/portal.component';
import { MenubarModule  } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { ImageModule } from 'primeng/image';

@NgModule({
  declarations: [PortalComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
    AvatarModule,
    ButtonModule,
    BadgeModule,
    ImageModule
  ],
  providers: [
  ],
  exports: [PortalComponent],
})
export class PortalModule {}
