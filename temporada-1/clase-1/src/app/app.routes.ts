import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => 
            import('./home/home.component')
            .then(m => m.HomeComponent)
    },
    {
        path: 'dashboard',
        loadComponent: () => 
            import('./dashboard/dashboard.component')
            .then(m => m.DashboardComponent)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
