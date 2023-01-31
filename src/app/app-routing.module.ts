import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './Layout/dashboard/dashboard.component';
import { PostsComponent } from './Layout/dashboard/posts/posts.component';
import { DefaultComponent } from './Layout/default/default.component';

const routes: Routes = [  
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'forgot-password',
    component:ForgotPasswordComponent
  },
  {
    path:'admin',
    canActivate:[AuthGuard],
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
  },
  {
    path:'',
    redirectTo:'login',
    pathMatch:"full"
  },
  {
    path:'**',
    component:NotFoundComponent
  },
  {
    path: '', component: DefaultComponent,

    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'posts', component: PostsComponent }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
