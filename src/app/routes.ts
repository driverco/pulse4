import { Routes } from '@angular/router';
import { NotFoundComponent } from './portal/components/notfound/notfound.component';
import { LoginComponent } from './portal/components/login/login.component';
import { AdminGuard, AuthGuard, LoginGuard } from './portal/guard/auth.guard';
import { HomebrewComponent } from './portal/components/homebrew/homebrew.component';


export const routes: Routes = [
    { path: 'home', component: HomebrewComponent, canActivate:[AuthGuard] },
    { path: '', redirectTo: '/login/', pathMatch: 'full' },
    { path: 'login/:errorType', component: LoginComponent, pathMatch: "full", canActivate:[LoginGuard] },
    { path: 'notfound', component: NotFoundComponent },
    { path: '**', redirectTo: '/login/', pathMatch: 'full' },

];
