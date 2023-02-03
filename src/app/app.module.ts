import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { UserCrudComponent, DialogOverviewExampleComponent } from './components/index';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutModule } from '@angular/cdk/layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule} from '@angular/material/sort';

import { MatSidenavModule } from '@angular/material/sidenav';
import { DefaultComponent } from './Layout/default/default.component';
import { SidebarComponent } from './Layout/shared/sidebar/sidebar.component';
import { DashboardComponent } from './Layout/dashboard/dashboard.component';
import { PostsComponent } from './Layout/dashboard/posts/posts.component';


const Ux_modules=[
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  BrowserAnimationsModule
]

@NgModule({
  declarations: [
    AppComponent,
    ForgotPasswordComponent,
    LoginComponent,
    NotFoundComponent,
    UserCrudComponent,
    DialogOverviewExampleComponent,
    DefaultComponent,
    SidebarComponent,
    DashboardComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatCardModule,
    MatRadioModule,
    MatSelectModule,
    MatToolbarModule,
    MatInputModule,
    LayoutModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserModule,
    AppRoutingModule,
    Ux_modules,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
