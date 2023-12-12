import { Routes } from "@angular/router";
import { LoginModule } from "./pages/login/login.module";

export const AppRotas : Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
  }
];
