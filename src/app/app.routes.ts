import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PageLayoutComponent } from './components/Layout/page-layout.component';
import { authGuard } from './Guards/auth.guard';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { DashboardChartComponent } from './components/charts/dashboard-chart/dashboard-chart.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: '', component: PageLayoutComponent,
        canActivate: [authGuard],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'product', component: ProductListComponent },
            { path: 'dashboard', component: DashboardChartComponent }



        ]
    }
];
