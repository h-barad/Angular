import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyResolver } from './property/add-property/property-resolver.service';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { PropertyDetailResolver } from './resolvers/property-detail-resolver';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';

const routes: Routes = [
    { path: '', component: PropertyListComponent},
    { path: 'property-list/:SellRent', component: PropertyListComponent, resolve: {prp: PropertyResolver}},
    { path: 'add-property', component: AddPropertyComponent },
    { path: 'property-detail/:id', component: PropertyDetailComponent, resolve: {prp: PropertyDetailResolver}},
    { path: 'user-register', component: UserRegisterComponent },
    { path: 'user/dashboard', component: UserDashboardComponent },
    { path: 'user/login', component: UserLoginComponent }
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [],
  })
  export class AppRoutingModule {}
