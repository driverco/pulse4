import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { PortalModule } from './portal/portal.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

//import { routes } from './routes';
//import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PortalModule /*,
    RouterModule.forRoot(routes, {
      bindToComponentInputs: true // <-- enable this feature
    })*/
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
