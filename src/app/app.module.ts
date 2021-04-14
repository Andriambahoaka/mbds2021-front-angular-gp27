import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

/////
import {MatTableModule } from "@angular/material/table";


import { AssignmentsComponent } from './assignments/assignments.component';
import { RenduDirective } from './shared/rendu.directive';
import { NonRenduDirective } from './shared/non-rendu.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AssignmentDetailComponent } from './assignments/assignment-detail/assignment-detail.component';
import { AddAssignmentComponent } from './assignments/add-assignment/add-assignment.component';
import { Routes, RouterModule } from '@angular/router';
import { EditAssigmentComponent } from './assignments/edit-assigment/edit-assigment.component';
import { AuthGuard } from './shared/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { MatieresComponent } from './matieres/matieres.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {
    // indique que http://localhost:4200 sans rien ou avec un "/" à la fin
    // doit afficher le composant AssignmentsComponent (celui qui affiche la liste)
    path: "",
    component: LoginComponent,
    //redirectTo: "/home",
    //pathMatch: "full"
  },
  {
    // idem avec  http://localhost:4200/home
    path: "register",
    component: RegisterComponent,
  },
  {
    // idem avec  http://localhost:4200/home
    path: "home",
    component: AssignmentsComponent,
    data: { title: "Liste des assignments" }
  },
  {
    path: "add",
    component: AddAssignmentComponent,
    data: { title: "Ajout d'un assignment" }
  },
  {
    path: "assignment/:id",
    component: AssignmentDetailComponent,
    data: { title: "Détails d'un assignment" }
  },
  {
    path: "assignment/:id/edit",
    component: EditAssigmentComponent,
    data: { title: "Modification d'un assignment" },
    canActivate: [AuthGuard]
  },  {
    path: "matieres",
    component: MatieresComponent,
    data: { title: "Listes des matieres" }
  },
]
@NgModule({
  declarations: [
    AppComponent,
    AssignmentsComponent,
    RenduDirective,
    NonRenduDirective,
    AssignmentDetailComponent,
    AddAssignmentComponent,
    EditAssigmentComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    LoginComponent,
    MatieresComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule, MatDividerModule, MatIconModule,
    MatFormFieldModule, MatInputModule, MatDatepickerModule,
    MatNativeDateModule, MatListModule, MatCardModule, MatCheckboxModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTableModule,
    RouterModule.forRoot(routes), HttpClientModule
  ],
  providers: [
    Title,
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
