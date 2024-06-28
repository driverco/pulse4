import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { PortalModule } from './portal/portal.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';

import { routes } from './routes';
import { FormsModule } from '@angular/forms';
//import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PortalModule,
    FormsModule,
    TranslocoRootModule ,
    RouterModule.forRoot(routes, {
      bindToComponentInputs: true // <-- enable this feature
    })
  ],
  providers: [
    provideAnimationsAsync(),provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
