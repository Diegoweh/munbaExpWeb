import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AvistamientoComponent } from './pages/avistamiento/avistamiento.component';
import { ExploradorComponent } from './pages/explorador/explorador.component';
import { SafariComponent } from './pages/safari/safari.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'avistamiento', component: AvistamientoComponent },
    { path: 'explorador', component: ExploradorComponent },
    { path: 'safari', component: SafariComponent },
];
